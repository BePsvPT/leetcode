/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let MAX_INT = 2147483647
  let MIN_INT = -2147483648
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let chars = str.split('')
  let sign = 1
  let digit = []

  while (chars.length) {
      switch (chars[0]) {
          case ' ':
              chars.shift()
              continue

          case '+':
          case '-':
              if (chars.length === 1 || !digits.includes(chars[1])) {
                  return 0
              }

              if (chars.shift() === '-') {
                  sign = -1
              }

              break

          default:
              if (digits.includes(chars[0])) {
                  break
              }

              return 0
      }

      break
  }

  while (chars.length) {
      if (chars[0] === '0') {
          chars.shift()
      } else {
          break
      }
  }

  if (!chars.length) {
      return 0
  }

  while (chars.length) {
      if (!digits.includes(chars[0])) {
          break
      }

      digit.push(chars.shift())
  }

  if (digit.length > 10) {
      return sign > 0 ? MAX_INT : MIN_INT
  } else if (digit.length === 10) {
      if (sign > 0) {
          if (digit.join('').localeCompare('2147483647') >= 0) {
              return MAX_INT
          }
      }

      if (digit.join('').localeCompare('2147483648') >= 0) {
          return MIN_INT
      }
  }

  let result = 0

  while (digit.length) {
      result = result * 10 + parseInt(digit.shift(), 10)
  }

  return result * sign
};