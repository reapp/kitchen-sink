var React = require('react');
var Component = require('component');
var { Link, RouteHandler } = require('react-router');
var Menu = require('reapp-ui/components/Menu');
var Button = require('reapp-ui/components/Button');
var LayoutLeftNav = require('reapp-ui/views/LayoutLeftNav');
var PopoverHandler = require('reapp-ui/mixins/PopoverHandler');
var Popover = require('reapp-ui/components/Popover');
var ModalHandler = require('reapp-ui/mixins/ModalHandler');
var Modal = require('reapp-ui/components/Modal');

require('./App.css');

module.exports = Component({
  mixins: [
    PopoverHandler,
    ModalHandler
  ],

  render() {
    var button = (
      <Button
        iconProps={{
          name: 'hamburger',
          stroke: 1,
          size: 26,
          shapeRendering: 'crispEdges'
        }}
        chromeless />
    );

    var menu = (
      <Menu>
        <Link to="kitchen">Kitchen Sink</Link>
      </Menu>
    );

    return (
      <LayoutLeftNav side={menu} handle={button} title="Kitchen Sink">
        {this.props.children}
        {this.state.popoverProps && (
          <Popover {...this.state.popoverProps} />
        )}
        {this.state.modalProps && (
          <Modal {...this.state.modalProps} />
        )}
      </LayoutLeftNav>
    );
  }
});