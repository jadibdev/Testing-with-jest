const stringLength = require('./stringLength');

test('returns total number of characters', () => {
  // arrange
  let string = 'Francisco'

  // Act
  const getTotalChar = stringLength(string)

  // Assert
  expect(getTotalChar).toBe(string.length);
})

test('exception thrown when string is less than 1 or greater than 10', () => {
  // Arrange
  const string = 'San Francisco'
  const errorMessage = 'string char length is out of range'

  // Act
  // stringLength(string)
  
  // Assert
 expect(() => {
   stringLength(string)
 }).toThrow(errorMessage)
})