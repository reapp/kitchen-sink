import React from 'react';
import View from 'reapp-ui/views/View';
import Popover from 'reapp-ui/components/Popover';
import Button from 'reapp-ui/components/Button';
import BackButton from 'components/shared/BackButton';
import Title from 'reapp-ui/components/Title';
import { Link, Navigation } from 'react-router';
import DemoViewMixin from 'mixins/DemoViewMixin';

const hamburgerIcon = require('reapp-ui/assets/icons/hamburger.svg');

export default React.createClass({
  mixins: [
    DemoViewMixin
  ],

  getInitialState() {
    return {
      target: null
    };
  },

  menuIconProps: {
    file: hamburgerIcon,
    size: 24,
    stroke: 1,
    debug: true,
    shapeRendering: 'crispEdges',
    animations: false
  },

  handleMenuPopover(e) {
    this.setState({ target: e.target });
  },

  render() {
    var menuButton =
      <Button
        iconProps={this.menuIconProps}
        onTap={this.handleMenuPopover}
        chromeless
      />

    return (
      <View {...this.props} title={[BackButton, 'Popovers', menuButton]}>
        <PopoversContent
          target={this.state.target}
          onPopoverClose={() => this.handleMenuPopover({})}
        />
      </View>
    );
  }
});


let PopoversContent = React.createClass({
  getInitialState() {
    return {
      to: null,
      target: this.props.target
    };
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      target: nextProps.target
    });
  },

  showPopover(e) {
    this.setState({
      target: e.target
    });
  },

  popoverClick(to) {
    this.setState({ to });
  },

  handlePopoverClose() {
    var path = this.state.to;

    this.props.onPopoverClose();

    this.setState({
      target: null,
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
          debug: true,
          shapeRendering: 'crispEdges',
        }}
        onTap={this.showPopover}
        chromeless
      />

    return (
      <div>
        {this.state.target &&
          <Popover target={this.state.target} onClose={this.handlePopoverClose}>
            <Button chromeless onTap={this.popoverClick.bind(this, 'modals')}>Modals</Button>
            <Button chromeless onTap={this.popoverClick.bind(this, 'popovers')}>Popovers</Button>
            <Button chromeless onTap={this.popoverClick.bind(this, 'tabs')}>Tabs</Button>
          </Popover>
        }

        <Title>Popover Below</Title>
        <Button onTap={this.showPopover}>Below</Button>
        <p>
          Popovers are menus that float above the element that triggers them.
          Apple recommends to use popovers on iPad, not smaller mobile devices.
          For iPhone, use actions and modals.
        </p>

        <Title>Menu</Title>
        <p>Try the hambuger icon at the top right to see menus near edges of screen.</p>

        <Title>Popover Above</Title>
        <p>
          A popover near the bottom half of the screen will popover upwards.
        </p>
        <Button onTap={this.showPopover}>Above</Button>
      </div>
    );
  }
});