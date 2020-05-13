'use strict'
const userInput = 'Test'
alert(`Your input ${userInput}`)

/**
 *
 * @param {Array<number>} rest
 * @returns {number}
 */
function sum (...rest) {
  return rest.reduce((total, item) => total + item, 0)
}

