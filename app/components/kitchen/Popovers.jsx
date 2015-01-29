import React from 'react';
import View from 'reapp-ui/views/View';
import Popover from 'reapp-ui/components/Popover';
import Button from 'reapp-ui/components/Button';
import BackButton from 'components/shared/BackButton';
import Title from 'reapp-ui/components/Title';
import { Link } from 'react-router';

export default React.createClass({
  getInitialState() {
    return { popoverProps: false };
  },

  showPopover(e) {
    this.setState({
      popoverProps: {
        target: e.target
      }
    });
  },

  render() {
    var menuButton = (
      <Button
        iconProps={{
          name: 'hamburger',
          size: 24,
          stroke: 1,
          shapeRendering: 'crispEdges',
        }}
        onClick={this.showPopover}
        chromeless />
    );

    return (
      <View {...this.props} title={[BackButton, 'Popovers', menuButton]}>
        {this.state.popoverProps && (
          <Popover {...this.state.popoverProps}>
            <Link to="modals">Modals</Link>
            <Link to="popovers">Popovers</Link>
            <Link to="popovers">Tabs</Link>
          </Popover>
        )}

        <Title>Popover Below</Title>
        <p>
          Popovers are <a onClick={this.showPopover}>menus</a> that will float above an element that triggers them. Apple recommends to use popovers on iPad, not smaller mobile devices. For iPhone, use actions and modals.
        </p>

        <div style={{height: 300}} />

        <Title>Popover Above</Title>
        <p>
          This is a popover that should trigger from the bottom of the page and point upwards. <a onClick={this.showPopover}>Click here</a>.
        </p>
      </View>
    );
  }
});