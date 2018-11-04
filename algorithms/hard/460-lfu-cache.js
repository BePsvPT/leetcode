/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.capacity = capacity
  this.size = 0
  this.cache = [] // array of [key, val, used]
  this.mapping = {}
};

/**
* @param {number} key
* @return {number}
*/
LFUCache.prototype.get = function(key) {
  if (this.capacity <= 0) {
      return -1
  }

  if (!this.mapping.hasOwnProperty(key)) {
      return -1
  }

  let index = this.mapping[key]
  let pre = index - 1
  let content = this.cache[index]
  let result = content[1]
  let used = ++content[2]

  for (; index > 0; --index, --pre) {
      if (this.cache[pre][2] > used) {
          break
      } else {
          this.mapping[this.cache[pre][0]]++
      }
  }

  pre += 1

  this.cache.splice(this.mapping[key], 1)
  this.cache.splice(pre, 0, content)
  this.mapping[key] = pre

  return result
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LFUCache.prototype.put = function(key, value) {
  if (this.capacity <= 0) {
      return
  }

  if (this.mapping.hasOwnProperty(key)) {
      let index = this.mapping[key]
      let pre = index - 1
      let content = this.cache[index]
      let used = ++content[2]

      content[1] = value

      for (; index > 0; --index, --pre) {
          if (this.cache[pre][2] > used) {
              break
          } else {
              this.mapping[this.cache[pre][0]]++
          }
      }

      pre += 1

      this.cache.splice(this.mapping[key], 1)
      this.cache.splice(pre, 0, content)
      this.mapping[key] = pre
  } else {
      if (this.size >= this.capacity) {
          delete this.mapping[this.cache[this.cache.length - 1][0]]
          this.cache.pop()
          this.size--
      }


      let index

      for (index = this.cache.length - 1; index >= 0; --index) {
          if (this.cache[index][2] > 0) {
              break
          } else {
              this.mapping[this.cache[index][0]]++
          }
      }

      index += 1

      this.cache.splice(index, 0, [key, value, 0])
      this.mapping[key] = index
      this.size++
  }
};
