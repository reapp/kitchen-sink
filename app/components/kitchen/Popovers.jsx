import React from 'react';
import View from 'reapp-ui/views/View';
import Popover from 'reapp-ui/components/Popover';
import Button from 'reapp-ui/components/Button';
import BackButton from 'components/shared/BackButton';
import Title from 'reapp-ui/components/Title';
import { Link, Navigation } from 'react-router';
import DemoViewMixin from 'mixins/DemoViewMixin';

export default React.createClass({
  mixins: [
    DemoViewMixin
  ],

  getInitialState() {
    return {
      to: null,
      popoverProps: false
    };
  },

  showPopover(e) {
    this.setState({
      popoverProps: {
        target: e.target
      }
    });
  },

  popoverClick(to) {
    this.setState({ to: to });
  },

  handlePopoverClose() {
    var path = this.state.to;

    this.setState({
      popoverProps: null,
      to: null
    });

    if (path)
      this.transitionTo(path);
  },

  render() {
    var menuButton =
      <Button
        iconProps={{
          file: require('reapp-ui/assets/icons/hamburger.svg'),
          size: 24,
          stroke: 1,
          shapeRendering: 'crispEdges',
        }}
        onTap={this.showPopover}
        chromeless
      />;

    return (
      <View {...this.props} title={[BackButton, 'Popovers', menuButton]}>
        {this.state.popoverProps &&
          <Popover {...this.state.popoverProps} onClose={this.handlePopoverClose}>
            <a onClick={this.popoverClick.bind(this, 'modals')}>Modals</a>
            <a onClick={this.popoverClick.bind(this, 'popovers')}>Popovers</a>
            <a onClick={this.popoverClick.bind(this, 'tabs')}>Tabs</a>
          </Popover>
        }

        <Title>Popover Below</Title>
        <p>
          Popovers are <Button onTap={this.showPopover}>menus</Button> that will float above an element that triggers them. Apple recommends to use popovers on iPad, not smaller mobile devices. For iPhone, use actions and modals.
        </p>

        <div style={{height: 200}} />

        <Title>Popover Above</Title>
        <p>
          This is a popover that should trigger from the bottom of the page and point upwards.
        </p>
        <Button onTap={this.showPopover}>Click here</Button>
      </View>
    );
  }
});