const glob = require('glob')
const fs = require('fs')
const matter = require('gray-matter')
const dayjs = require('dayjs')
const markdown = require('markdown-it');
const sharp = require('sharp');
const path = require('path');

// 全局定义
const srcDir = 'src' // src 目录
const blogDir = 'blog' // blog 目录
const docsDir = 'docs' // docs 目录
const issueDir = 'issue' // issue 目录

// 修改内容
const files = glob.sync('./issue/**/**');
files.forEach(async (file) => {
  // const state = fs.statSync(file);
  // if (state.isFile()) {
  //   const res = matter.read(file);
  //   if (res.data?.title && file.includes('README')) {
  //     fs.writeFileSync(
  //       file,
  //       matter.stringify(`# ${res.data.title} \n${res.content}`, {
  //         // date: `${res.data.date}`,
  //         // slug: `${res.data.slug}`
  //       }),
  //     );
  //   }
  // }
  // 图片转 web
  // if (/.*.\.(jpg|png|gif|jpeg)$/.test(file)) {
  //   const _file = path.join(__dirname, './..', file);
  //   await sharp(_file)
  //     .toFile(_file.substring(0, _file.lastIndexOf('.')) + '.webp')
  //     .then((res) => {
  //       fs.unlinkSync(_file);
  //       console.log(file, 'Yes');
  //     })
  //     .catch((err) => {
  //       console.log(file, err);
  //     });
  // }
});



//============创建文档 或 博客========================
const fileType = process.argv.slice(2)[0] // docs | blog | issue
const reg = new RegExp(`^${blogDir}|${docsDir}|${issueDir}+$`)

reg.test(fileType) ? createMd(fileType) : getMaxId()
//============创建文档 或 博客 END========================

/**
 * 新建 md 文档
 */
function createMd(fileType) {
  const postId = getMaxId() + 1
  const matterData = {
    date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    slug: `/${postId}`
  }

  let dirPath = `./${fileType}`
  if (fileType == blogDir) {
    matterData['author'] = 'author';
    dirPath = `./${fileType}/${dayjs().format('YYYY/MM')}`
  }
  if (!fs.existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
  //创建 md 文件
  const content = matter.stringify('# [标题]', matterData);
  fs.writeFileSync(`${dirPath}/${postId}.md`, content);

  // 更新最新文章
  getMaxId()
}


/**
 * 获取 max id
 */
function getMaxId() {
  let maxID = 0
  let allPosts = [] // 所有文章

  const syncDir = (dirName) => {
    const files = glob.sync(`./${dirName}/**/*.md`)
    files.map(file => {
      const res = matter.read(file)
      const postId = res?.data?.slug?.replace(/\//g, '') || 0
      maxID = Math.max(postId, maxID)

      // 可能没有 title
      if (res && !res?.data?.title && res?.content) {
        const tokens = new markdown().parse(res?.content, {});
        const index = tokens.findIndex((token) => token.tag == 'h1');

        if (index >= 0) {
          const content = tokens[index + 1]?.content;
          res.data.title = content ? html2Escape(content) : '';
        } else {
          res.data.title = 'No title';
        }
      }

      if (res?.data?.slug) {
        allPosts.push({
          ...res.data,
          type: dirName
        })
      }
    })
  }

  // 遍历 blog 下所有文件
  syncDir(blogDir)

  //遍历 docs 下所有文件夹和文件
  syncDir(docsDir)

  // 遍历 issue 下所有文件
  syncDir(issueDir)

  // 最新 10 篇文章
  allPosts = allPosts.sort((a, b) => dayjs(b.date) - dayjs(a.date)).slice(0, 10)
  fs.writeFileSync(`./${srcDir}/data/latest.json`, JSON.stringify(allPosts))

  return maxID
}

/**
 * html 标签转义
 */
function html2Escape(str) {
  return str.replace(/[<>&"]/g, function (c) {
    return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c];
  });
}

