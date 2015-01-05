var Component = require('component');
var ReactRouter = require('react-router');

module.exports = {
  global: [],
  shared: {
    'RouteState': ReactRouter.State,
    'RouteHandler': ReactRouter.RouteHandlerMixin,
    'Navigation': ReactRouter.Navigation,
  }
};