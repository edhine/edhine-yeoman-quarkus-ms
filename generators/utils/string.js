const _ = require("lodash");

module.exports = {
  trueCamelCase
}


function trueCamelCase(str) {
  var kebab = _.camelCase(str);
  return kebab.charAt(0).toUpperCase() + kebab.slice(1);
}
