/**
 * @desc 使用两个栈实现队列
 * @author lzw.
 */

class MyQueue {
  private stack1: any[] = []
  private stack2: any[] = []


  add(val: any) {
    this.stack1.push(val)
  }

  delete(): any | null {
    let res: any

    const stack1 = this.stack1
    const stack2 = this.stack2

    // 1、stack1 全部插入到 stack2
    while (stack1.length) {
      const val = stack1.pop()
      if (val != null) {
        stack2.push(val)
      }
    }

    // 2、从 stack2 拿到顶部元素
    res = stack2.pop()

    // 3、stack2 还给 stack1
    while (stack2.length) {
      const val = stack2.pop()
      if (val != null) {
        stack1.push(val)
      }
    }

    return res || null
  }

  get length(): number {
    return this.stack1.length
  }
}

// const q = new MyQueue()
// q.add(100)
// q.add(200)
// q.add(300)
// console.log(q.delete())
// console.log(q.length)

// 测试用例 - jest
describe('队列测试', () => {
  it('正常情况', () => {
    const q = new MyQueue()
    q.add(100)
    q.add(200)
    q.add(300)

    expect(q.delete()).toBe(100)
    expect(q.length).toBe(2)
  })
});