/**
 * @desc 反转单向链表
 * @author lzw.
 */


// 定义链表
interface ILinkNode {
  value: any,
  next?: ILinkNode
}

// 创建单向链表
function createLinkList(arr: any[]): ILinkNode {
  const length = arr.length

  if (length === 0) throw new Error('数组为空')

  // 定义链表头，拿数组最后一个元素开始，最后一个元素没有 next
  let curNode: ILinkNode = {
    value: arr[length - 1],
  }

  // 如果只有一个元素
  if (length === 1) return curNode

  // 从后往前遍历生成链表
  for (let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }
  return curNode
}

// 反转单链表
function reverseLinkList(listNode: ILinkNode): ILinkNode {
  let prevNode: ILinkNode | undefined = undefined
  let curNode: ILinkNode | undefined = undefined
  let nextNode: ILinkNode | undefined = listNode

  // 循环移动指针，当 nextNode 为空是停止
  while (nextNode) {
    /**
     * curNode 指向链头情况
     *       1   2 3 4 5 6
     * prev cur next
     */
    if (curNode && !prevNode) {
      // 需要删除 curNode.next 避免循环引用
      delete curNode.next
    }

    /**
     * prevNode 指向链头时，三个指针都指向了元素，开始反转
     *  1    2    3 4 5 6
     * prev cur next
     *  
     */
    if (curNode && prevNode) {
      curNode.next = prevNode
    }

    // 整体移动指针
    prevNode = curNode
    curNode = nextNode
    nextNode = nextNode?.next
  }

  /**最后还有一种情况，nextNode 为空了，curNode 指向了最后一个元素
   * 1 2 3 4   5    6
   *          prev cur next
   */
  curNode.next = prevNode

  return curNode
}

// 测试一下
// const arr = [100, 200, 300, 400, 500, 600]
// const list1 = createLinkList(arr)
// console.log(list1)
// const list2 = reverseLinkList(list1)
// console.log(list2)

// 测试用例 - jset
describe('反转单向链表', () => {
  it('单个元素', () => {
    const node = createLinkList([100])
    const node1 = reverseLinkList(node)
    expect(node1).toEqual({ value: 100 })
  })

  it('多个元素', () => {
    const node = createLinkList([100, 200, 300])
    const node1 = reverseLinkList(node)
    console.log(node1)
    expect(node1).toEqual({
      value: 300,
      next: {
        value: 200,
        next: {
          value: 100
        }
      }
    })
  })
})