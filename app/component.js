import Component from 'reapp-component';
import DemoViewMixin from './mixins/DemoViewMixin';
import StaticView from 'reapp-ui/helpers/StaticView';

var component = Component();

component.addDecorator(spec => {
  // pages
  if (spec.page) {
    // spec.mixins = (spec.mixins || []).concat(DemoViewMixin);
    // spec = StaticView(spec);
  }

  return spec;
});

export default component;