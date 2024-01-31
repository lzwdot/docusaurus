/**
 * @desc 括号匹配
 * @author lzw.
 */

function isMatch(left: string, right: string): boolean {
  if (left === '(' && right === ')') return true
  if (left === '{' && right === '}') return true
  if (left === '[' && right === ']') return true
  return false
}

function matchBracket(str: string): boolean {
  const length = str.length
  if (length === 0) return true

  const stack = []
  const leftBracket = '{(['
  const rightBracket = '})]'

  for (let i = 0; i < length; i++) {
    const s = str[i]
    // 左括号，压栈
    if (leftBracket.includes(s)) {
      stack.push(s)
    }
    if (rightBracket.includes(s)) {
      const top = stack[stack.length - 1]
      // 是否匹配，出栈
      if (isMatch(top, s)) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}

// 测试用例 - jest
describe('括号匹配', () => {
  it('正常情况', () => {       
    expect(matchBracket('{a(b[c]d)e}f')).toBe(true)
  })
});

describe('括号匹配', () => {
  it('错误情况', () => {
    expect(matchBracket('{a(b[c]de}f)')).toBe(false)
  })
});

describe('括号匹配', () => {
  it('空', () => {
    expect(matchBracket('')).toBe(true)
  })
});