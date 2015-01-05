var React = require('react');
var Mixins = require('./lib/mixins');
var component = require('reapp-component')();

// decorators
component.addDecorator(spec => {
  spec = decorateMixins(spec);
  return React.createClass(spec);
});

// adds support for string mixins and global mixins
function decorateMixins(spec) {
  if (spec.mixins)
    spec.mixins = spec.mixins.map(mixin =>
      typeof mixin === 'string' ? Mixins.shared[mixin] : mixin);

  spec.mixins = Mixins.global.concat(spec.mixins);
  return spec;
}

module.exports = component;