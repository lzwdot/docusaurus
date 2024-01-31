/**
 * @desc 二分树搜索
 * @author lzw.
 */

// 二叉树节点
interface ITreeNode {
  value: number,
  left: ITreeNode | null,
  right: ITreeNode | null
}

const arr: number[] = []

/**
 *     5
 *    / \
 *   3   7
 *  / \  /\
 * 2  4 6  8 
 */

const bst: ITreeNode = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 8,
      left: null,
      right: null
    }
  }
}

// 前序遍历
function proOrderTraverse(node: ITreeNode | null) {
  if (node == null) return
  // console.log(node.value)
  arr.push(node.value)
  proOrderTraverse(node.left)
  proOrderTraverse(node.right)
}
// 测试
// proOrderTraverse(bst)

// 中序遍历
function inOrderTraverse(node: ITreeNode | null) {
  if (node == null) return
  inOrderTraverse(node.left)
  // console.log(node.value)
  arr.push(node.value)
  inOrderTraverse(node.right)
}
// 测试
// inOrderTraverse(bst)

// 后序遍历
function postOrderTraverse(node: ITreeNode | null) {
  if (node == null) return
  postOrderTraverse(node.right)
  postOrderTraverse(node.left)
  // console.log(node.value)
  arr.push(node.value)
}
// 测试
// postOrderTraverse(bst)


// =====求二叉搜索树的第K小值
function getKthVal(node: ITreeNode, k: number): number | null {
  inOrderTraverse(node)
  return arr[k - 1] || null
}
console.log(getKthVal(bst, 3)) // 测试
