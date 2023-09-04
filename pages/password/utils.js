// 数字 0123456789
export const NUMBERS = '0123456789'
// 小写字母 abcdefghijklmnopqrstuvwxyz
export const LOWER_CASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'
// 大写字母 ABCDEFGHIJKLMNOPQRSTUVWXYZ
export const UPPER_CASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// 常用符号 ~!@#$%^&*()_+
export const SYMBOLS = '~!@#$%^&*()_+'

// 字符配置
export const CHARACTERS = [
  {
    label: '数字',
    value: 'NUMBERS',
    chars: NUMBERS,
  },
  {
    label: '小写字母',
    value: 'LOWER_CASE_LETTERS',
    chars: LOWER_CASE_LETTERS,
  },
  {
    label: '大写字母',
    value: 'UPPER_CASE_LETTERS',
    chars: UPPER_CASE_LETTERS,
  },
  {
    label: '常用符号',
    value: 'SYMBOLS',
    chars: SYMBOLS,
  },
]

// 生成指定长度的随机字符串
export function randomString(chars, length) {
  let result = ''

  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }

  return result
}
