const math = require('.')
const qw = require('@perl/qw')

for (let _ of qw`
  five_times_six seven_plus_three two_to_the_power_of_five_minus_seven
  twenty_five_times_two open_parenthesis_three_times_four_close_parenthesis_to_the_power_of_three
  wobble_times_seven seventy_three
  `) {
//  console.log(`${_} = ${math[_]}`)
  console.log(`console.log(math.${_}) // ${math[_]}`)
}
