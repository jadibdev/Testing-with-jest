const capitalizeString = require('./capitalizeString')

test('return string capitalized', () => {
  // Arrange
  const string = 'san francisco'

  // Act
  const capStr = capitalizeString(string)

  // Assert
  expect(capStr).toBe('San francisco')
})