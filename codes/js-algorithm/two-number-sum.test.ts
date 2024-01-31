/**
 * @desc 找出一个数组中和为n的两个数
 * @author lzw.
 */

// 嵌套循环
function twoNumberSum1(arr: number[], n: number): number[] {
  const res: number[] = []
  const length = arr.length

  if (length === 0) return res

  let flag = false // 是否得到结果

  // O(n^2)
  for (let i = 0; i < length - 1; i++) {
    const n1 = arr[i]

    for (let j = i + 1; j < length - 1; j++) {
      const n2 = arr[j]

      if (n1 + n2 === n) {
        res.push(n1)
        res.push(n2)
        flag = true
        break
      }
    }

    if (flag) break
  }

  return res
}


// 双指针思路
function twoNumberSum2(arr: number[], n: number): number[] {
  const res: number[] = []
  const length = arr.length

  if (length === 0) return res

  let i = 0; // 头
  let j = length - 1 // 尾

  // O(n)
  while (i < j) {
    const n1 = arr[i]
    const n2 = arr[j]
    const sum = n1 + n2

    if (sum > n) {
      // 需要向前移动
      j--
    } else if (sum < n) {
      // 需要向后移动
      i++
    } else {
      res.push(n1)
      res.push(n2)
      break
    }
  }

  return res
}


// 功能测试
const arr = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 7, 11, 15]
const n = 15
// console.log(twoNumberSum2(arr, n))
// console.log(twoNumberSum2([], n))
// console.log(twoNumberSum2([1, 2, 4, 7, 12, 15], n))

// 性能测试

console.time('twoNumberSum1')
for(let i=0;i<100*10000;i++){
  twoNumberSum1(arr, n)
}
console.timeEnd('twoNumberSum1') // 204.293ms

console.time('twoNumberSum2')
for(let i=0;i<100*10000;i++){
  twoNumberSum2(arr, n)
}
console.timeEnd('twoNumberSum2') // 49.095ms