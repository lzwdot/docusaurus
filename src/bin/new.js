const glob = require('glob')
const path = require('path')
const fs = require('fs')
const matter = require('gray-matter')
const moment = require('moment')

// 全局定义
const docsPath = './docs' // docs 目录
const blogPath = './blog' // blog 目录
const issuePath = './issues' // issue 目录
const codePath = './codes' // code 目录
const srcPath = './src' // src 目录

//============创建文档 或 博客========================

const dirPath = `codes/data-visual`
const title = '标题'
const fileType = process.argv.slice(2)[0] // docs | blog | issues | codes
const reg = /^[docs|blog|issues|codes]+$/

reg.test(fileType) ? createMd(dirPath, title, fileType) : getMaxId()

//============创建文档 或 博客 END========================

/**
 * 新建 md 文档
 * @param {*} dirname 
 * @param {*} title 
 * @param {*} fileType 
 * @param {*} author 
 */
function createMd(dirname, title, fileType, author = 'lzw') {
  const maxId = getMaxId() + 1
  const date = moment().format('YYYY-MM-DD HH:mm:ss');
  const matterData = {
    title: title + (fileType === 'issues' ? ` !${maxId}` : ''),
    ID: maxId,
    date: date,
    authors: [author],
    tags: dirname.split('/'),
    slug: `/${maxId}`,
    type: fileType
  }

  let content = ''
  let dirPath = dirname//`${docsPath}/${dirname}`
  let filePath = `${dirPath}/${maxId}.md`
  if (fileType && fileType == 'blog') {
    dirPath = blogPath
    content = '\n <!--truncate-->'

    // 新建目录
    const tempDir = `${dirPath}/${date.slice(0, 4)}`
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir)
    }

    filePath = `${tempDir}/${date.slice(5, 10)}-${maxId}.md`
  } else {
    // 创建文件夹的 readme 文件 
    writeReadMe(dirPath)
  }

  //创建 md 文件
  content = matter.stringify(content, matterData)
  fs.writeFileSync(filePath, content)

  // 更新最新文章
  getMaxId()
}

/**
 * 创建 README.md 文件
 * @param {*} dirPath 
 */
function writeReadMe(dirPath) {
  const filePath = `${dirPath}/README.md`
  let matterData = {
    title: '标题',
    authors: ['lzw']
  }
  // 先删除文件，重建
  if (fs.existsSync(filePath)) {
    matterData = matter.read(filePath)?.data;
    // 删除 README.md 文件
    fs.unlinkSync(filePath)
  }

  const content = matter.stringify(`
import DocCardList from '@theme/DocCardList';

<DocCardList />
  `, matterData)
  // 创建分类 JSON
  createCateJson(dirPath, matterData)
  // 写入内容
  fs.writeFileSync(filePath, content)
}

/**
 * 获取 max id
 */
function getMaxId() {
  let maxID = 0
  let allPosts = {} // 所有文章

  //遍历 docs 下所有文件夹和文件
  const docFiles = glob.sync(`${docsPath}/**/*.md`)
  docFiles.map(file => {
    const matterData = matter.read(file)
    // 获取 max id
    maxID = Math.max(matterData?.data?.ID || maxID, maxID)

    if (matterData?.data?.ID) {
      allPosts[matterData?.data?.ID] = matterData.data
    }
  })

  // 遍历 blog 下所有文件
  const blogFiles = glob.sync(`${blogPath}/**/*.md`)
  blogFiles.map(file => {
    const matterData = matter.read(file)
    // 获取 max id
    maxID = Math.max(matterData?.data?.ID || maxID, maxID)

    if (matterData?.data?.ID) {
      allPosts[matterData?.data?.ID] = matterData.data
    }
  })

  // 遍历 issue 下所有文件
  const issueFiles = glob.sync(`${issuePath}/**/*.md`)
  issueFiles.map(file => {
    const matterData = matter.read(file)
    // 获取 max id
    maxID = Math.max(matterData?.data?.ID || maxID, maxID)

    if (matterData?.data?.ID) {
      // content = matter.stringify(matterData.content, Object.assign(matterData.data,{type:'issues'}))
      // fs.writeFileSync(file, content)
      allPosts[matterData?.data?.ID] = matterData.data
    }
  })

  // 遍历 code 下所有文件
  const codeFiles = glob.sync(`${codePath}/**/*.md`)
  codeFiles.map(file => {
    const matterData = matter.read(file)
    // 获取 max id
    maxID = Math.max(matterData?.data?.ID || maxID, maxID)

    if (matterData?.data?.ID) {
      allPosts[matterData?.data?.ID] = matterData.data
    }
  })

  const allIds = Object.keys(allPosts)
  const latestIds = allIds.sort((a, b) => b - a).slice(0, 10)
  const latestPosts = latestIds.map(v => allPosts[v])

  fs.writeFileSync(`${srcPath}/config/latest-posts.json`, JSON.stringify(latestPosts, null, 2))

  return maxID
}

/**
 * 生产文件夹中的 _category_.json
 * @param {*} dirPath 
 * @param {*} matterData 
 */
function createCateJson(dirPath, matterData) {
  const fileData = matterData
  const fileName = '_category_.json'
  const content = {
    label: fileData?.title || '标题',
    position: fileData?.sidebar_position || 100
  }

  fs.writeFileSync(dirPath + '/' + fileName, JSON.stringify(content, ' ', ' '))
}
