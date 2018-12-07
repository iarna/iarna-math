'use strict'
const qw = require('@perl/qw')
const qr = require('@perl/qr')

const mathTable = qw`
  plus + times * divided_by / minus - to_the_power_of ** modula % and +
  open_parenthesis ( close_parenthesis ) eleven 11 twelve 12 thirteen 13
  fourteen 14 fifteen 15 sixteen 16 seventeen 17 eighteen 18 nineteen 19
  twenty_ 2 thirty_ 3 fourty_ 4 fifty_ 5 sixty_ 6 seventy_ 7 eighty_ 8
  ninety_ 9 twenty 20 thirty 30 fourty 40 fifty 50 sixty 60 seventy 70
  eighty 80 ninety 90 zero 0 one 1 two 2 three 3 four 4 five 5 six 6 seven 7
  eight 8 nine 9 ten 10 _ ${' '}`
const error = 'a suffusion of yellow'

module.exports = new Proxy({}, {
  get: (_, prop) => {
    for (let ii = 0; ii < mathTable.length; ii += 2) {
      prop = prop.replace(qr.g`${mathTable[ii]}`, mathTable[ii + 1])
    }
    try {
      return eval(prop)
    } catch (_) {
      return error
    }
  }
})