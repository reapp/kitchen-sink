var { makeStyles } = require('reapp-ui');
var requirer = (name) => require('./styles/' + name);

module.exports = makeStyles(requirer, [
  'Dots',
  'TitleBar'
]);