/**
 * @desc 二分查找
 * @author lzw.
 */

// 循环
function binarySearch1(arr: any[], target: any): number {
  const length = arr.length
  // 没数据
  if (length === 0) return -1

  let startIdx = 0 // 开始位置
  let endIdx = length - 1 // 结束位置

  while (startIdx <= endIdx) {
    // 中间位置
    const middleIdx = Math.floor((startIdx + endIdx) / 2)
    const middleVal = arr[middleIdx]

    // target的值 和 中间值对比
    if (middleVal > target) {
      // 在左半段
      endIdx = middleIdx - 1
    } else if (middleVal < target) {
      // 在右半段
      startIdx = middleIdx + 1
    } else {
      // 找到了
      return middleIdx
    }
  }
  return -1
}

// 循环
function binarySearch2(arr: any[], target: any, startIdx?: number, endIdx?: number): number {
  const length = arr.length
  // 没数据
  if (length === 0) return -1

  if (startIdx == null) startIdx = 0 // 开始位置
  if (endIdx == null) endIdx = length - 1 // 结束位置

  if (endIdx < startIdx) return -1

  // 中间位置
  const middleIdx = Math.floor((startIdx + endIdx) / 2)
  const middleVal = arr[middleIdx]

  // target的值 和 中间值对比
  if (middleVal > target) {
    // 在左半段
    return binarySearch2(arr, target, startIdx, middleIdx - 1)
  } else if (middleVal < target) {
    // 在右半段    
    return binarySearch2(arr, target, middleIdx + 1, endIdx)
  } else {
    // 找到了
    return middleIdx
  }
}

// 测试
// console.log(binarySearch2([10, 20, 30, 50, 60], 50)) // 3
// console.log(binarySearch2([10, 20, 30, 50, 60], 500)) // -1

// 测试用例 - jest
describe('二分查找', () => {
  it('循环', () => {
    const arr = [10, 20, 30, 50, 60]
    expect(binarySearch1(arr, 50)).toBe(3)
    expect(binarySearch1(arr, 500)).toBe(-1)
    expect(binarySearch1([], 500)).toBe(-1)
  })

  it('递归', () => {
    const arr = [10, 20, 30, 50, 60]
    expect(binarySearch2(arr, 50)).toBe(3)
    expect(binarySearch2(arr, 500)).toBe(-1)
    expect(binarySearch2([], 500)).toBe(-1)
  })
});

// 性能测试
const arr = [10, 20, 30, 50, 60]
const target = 50

console.time('binarySearch1')
for (let i = 0; i < 100 * 10000; i++) {
  binarySearch1(arr, target)
}
console.timeEnd('binarySearch1') // 8.628ms

console.time('binarySearch2')
for (let i = 0; i < 100 * 10000; i++) {
  binarySearch2(arr, target)
}
console.timeEnd('binarySearch2') // 13.434ms