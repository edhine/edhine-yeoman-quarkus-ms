module.exports = {
  isDate,
  isNumber
}

function isDate(attribute) {
  var dates = ["LocalDateTime", "LocalDate", "LocalTime", "Instant"]
  return dates.includes(attribute.type);
}

function isNumber(attribute) {
  var numbers = ["Integer", "Double", "Long", "Short"]
  return numbers.includes(attribute.type);;
}