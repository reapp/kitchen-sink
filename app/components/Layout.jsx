var React = require('react');
var Component = require('component');
var { Link, RouteHandler } = require('react-router');
var DocumentTitle = require('react-document-title');
var Menu = require('ui/components/Menu');
var Button = require('ui/components/Button');
var LayoutLeftNav = require('ui/views/LayoutLeftNav');
var PopoverHandler = require('ui/mixins/PopoverHandler');
var Popover = require('ui/components/Popover');
var ModalHandler = require('ui/mixins/ModalHandler');
var Modal = require('ui/components/Modal');

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
      <LayoutLeftNav side={menu} handle={button}>
        <DocumentTitle title="React Base" />
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