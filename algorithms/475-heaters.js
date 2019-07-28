/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  // if there is only one heater, just find the max radius
  if (heaters.length === 1) {
      return Math.max(Math.abs(Math.max(...houses) - heaters[0]), Math.abs(Math.min(...houses) - heaters[0]))
  }

  // we don't know whether the array is sorted or not, thus, sort it :(
  houses.sort((a, b) => a - b)
  heaters.sort((a, b) => a - b)

  {
      // i don't want to check the left and right boundaries, just unshift
      // and push the distance between min and max house value. after doing
      // this, all houses' value will in heaters
      let house_min = houses[0]
      let house_max = houses[houses.length - 1]
      let heater_min = heaters[0]
      let heater_max = heaters[heaters.length - 1]

      if (house_min < heater_min) {
          heaters.unshift(house_min - (heater_min - house_min))
      }

      if (house_max > heater_max) {
          heaters.push(house_max + (house_max - heater_max))
      }
  }

  let min = 0 // answer
  let x = 0 // first heater
  let y = 1 // second heater

  // let's start
  for (let i = 0; i < houses.length; i++) {
      let house = houses[i]
      let left

      // this ensure we will not exceed the heaters' boundary
      while (y <= heaters.length - 1) {
          left = house - heaters[x]

          // if distance between house and heater is negative,
          // we need to advance heaters one step, thanks for
          // what we do previously
          if (left >= 0) {
              break
          }

          x++
          y++
      }

      // check is while loop ended or not
      if (y >= heaters.length) {
          break
      }

      let right = Math.abs(heaters[y] - house)
      let radius = Math.min(left, right)

      // if house is larger than right heater,
      // we need to advance heaters and check
      // this house againt. otherwise, we will
      // got wrong answer for this case:
      // findRadius([1, 10], [2, 3])
      if (house > heaters[y]) {
          i--
          x++
          y++
      } else if (radius > min) { // now, if radius is large than min, assign it to min
          min = radius
      }
  }

  return min
};
