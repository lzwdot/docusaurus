/**
 * @desc 单向链表实现队列
 * @author lzw.
 */

// 链表结构
interface IListNode {
  value: any,
  next: IListNode | null
}

class ListQueue {
  private head: IListNode | null = null
  private tail: IListNode | null = null
  private len = 0

  // 入队
  add(val: any) {
    // 新的节点
    const newNode: IListNode = {
      value: val,
      next: null
    }

    // 一开始 head 为空时，指向第一个节点
    if (this.head === null) {
      this.head = newNode
    }

    // 处理 tail 指向最新节点
    const tailNode = this.tail
    if (tailNode !== null) {
      tailNode.next = newNode
    }
    // 入队
    this.tail = newNode

    // 实时记录长度
    this.len++
  }

  // 出队
  delete(): any | null {
    if (this.len <= 0) return null

    // 从 head 指向的元素出队
    const headNode = this.head
    if (headNode === null) return null

    // 取值
    const val = headNode.value
    // 把 head 移动到下一元素
    this.head = headNode.next

    // 实时记录长度
    this.len--

    return val
  }

  get length(): number {
    return this.len
  }
}

// 测试一下
// const q = new ListQueue()
// q.add(100)
// q.add(200)
// q.add(300)
// console.log(q.delete(), q.length)
// console.log(q.delete(), q.length)
// console.log(q.delete(), q.length)
// console.log(q.delete(), q.length)

// 测试用例 - jset
describe('单向链表实现队列', () => {
  it('入队和长度', () => {
    const q = new ListQueue()
    expect(q.length).toBe(0)

    q.add(100)
    q.add(200)
    q.add(300)
    expect(q.length).toBe(3)
  })

  it('多个元素', () => {
    const q = new ListQueue()
    expect(q.delete()).toBeNull()
    q.add(100)
    q.add(200)
    q.add(300)
    expect(q.delete()).toEqual(100)
    expect(q.delete()).toEqual(200)
    expect(q.delete()).toEqual(300)
    expect(q.delete()).toBeNull()
  })
})
