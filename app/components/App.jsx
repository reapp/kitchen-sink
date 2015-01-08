import React from 'react';
import { Link, RouteHandler } from 'react-router';
import Menu from 'reapp-ui/components/Menu';
import Button from 'reapp-ui/components/Button';
import LayoutLeftNav from 'reapp-ui/views/LayoutLeftNav';
import PopoverHandler from 'reapp-ui/mixins/PopoverHandler';
import Popover from 'reapp-ui/components/Popover';
import ModalHandler from 'reapp-ui/mixins/ModalHandler';
import Modal from 'reapp-ui/components/Modal';

export default React.createClass({
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
        <RouteHandler {...this.props} />
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