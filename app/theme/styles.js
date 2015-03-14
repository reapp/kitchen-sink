import { makeStyles } from 'reapp-ui';

var requirer = (name) => require('./styles/' + name);

module.exports = makeStyles(requirer, [
  'TitleBar'
]);