// 思路1

function rotate1(arr: number[], k: number): number[] {
  const length = arr.length
  if (!k || length === 0) return arr
  const step = Math.abs(k & length) // k可能大于length 所以取余，绝对值

  for (let i = 0; i < step; i++) {
    const n = arr.pop()
    if (n != null) {
      arr.unshift(n)
    }
  }

  return arr
}

// 思路2
function rotate2(arr: number[], k: number): number[] {
  const length = arr.length
  if (!k || length === 0) return arr
  const step = Math.abs(k & length) // k可能大于length 所以取余，绝对值

  const part1 = arr.slice(-step)
  const part2 = arr.slice(length - step)
  const part3 = part1.concat(part2)

  return part3
}

// 测试用例 - jest

describe('数组旋转', () => {
  it('正常情况', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 3
    const res = rotate1(arr, k)
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
});

describe('数组旋转', () => {
  it('正常情况', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 3
    const res = rotate2(arr, k)
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
});


// 性能测试
const arr1 = []
const arr2 = []
for (let i = 1; i <= 100000; i++) {
  arr1.push(i)
  arr2.push(2)
}

console.log('rotate1用时')
console.time('rotate1')
rotate1(arr1, 9 * 10000)
console.timeEnd('rotate1')

console.log('rotate2用时')
console.time('rotate2')
rotate2(arr2, 9 * 10000)
console.timeEnd('rotate2')