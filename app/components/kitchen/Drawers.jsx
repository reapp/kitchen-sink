import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import Drawer from 'reapp-ui/components/Drawer';
import View from 'reapp-ui/views/View';
import Title from 'reapp-ui/components/Title';
import { Container, Block } from 'reapp-ui/components/Grid';
import BackButton from 'components/shared/BackButton';
import Button from 'reapp-ui/components/Button';
import DemoViewMixin from 'mixins/DemoViewMixin';

var image = require('../../../assets/photos/sunrise.jpg');

export default StaticView({
  mixins: [
    DemoViewMixin
  ],

  statics: {
    title: [BackButton, 'Drawers']
  },

  getInitialState() {
    return {
      left: false,
      right: false,
      bottom: false,
      top: false
    };
  },

  toggleDrawer(type) {
    this.setState({ [type]: !this.state[type] });
    var allClosed = !this.state.left && !this.state.right && !this.state.top && !this.state.bottom;
    this.props.disableParentViewList(allClosed);
  },

  render() {
    return (
      <div>
        <Title>Drawers</Title>
        <p>Drawers slide out from a side of the screen</p>
        <Container wrap>
          <Button onTap={this.toggleDrawer.bind(this, 'top')}>Top</Button>
          <Button onTap={this.toggleDrawer.bind(this, 'bottom')}>Bottom</Button>
          <Button onTap={this.toggleDrawer.bind(this, 'right')}>Right</Button>
          <Button onTap={this.toggleDrawer.bind(this, 'left')}>Left</Button>
        </Container>

        {['left', 'right', 'bottom', 'top'].map((type) =>
          <Drawer
            from={type}
            open={this.state[type]}
            dragger={type !== 'left'}>
            <View>
              <p>{type} drawer</p>
              <Button onTap={this.toggleDrawer.bind(this, type)}>Close me</Button>
              <br />
              <img src={image} />
            </View>
          </Drawer>
        )}
      </div>
    );
  }
});