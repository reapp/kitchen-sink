import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import Drawer from 'reapp-ui/components/Drawer';
import View from 'reapp-ui/views/View';
import { Container, Block } from 'reapp-ui/components/Grid';
import BackButton from 'components/shared/BackButton';
import Button from 'reapp-ui/components/Button';

export default StaticView({
  statics: {
    title: [BackButton, 'Drawers']
  },

  getInitialState() {
    return {
      bottomClosed: true,
      leftClosed: true,
      topClosed: true,
      rightClosed: true
    };
  },

  getStateKey(type) {
    return `${type}Closed`;
  },

  // if val isn't passed it, it toggles, otherwise sets to val
  toggleDrawer(type, val) {
    var key = this.getStateKey(type);

    this.setState({
      [key]: (typeof val !== 'undefined') ? val : !this.state[key]
    });
  },

  render() {
    return (
      <div>
        <h3>Drawers</h3>
        <p>Drawers slide out from a side of the screen</p>
        <Container>
          <Button onClick={this.toggleDrawer.bind(this, 'top')}>Top</Button>
          <Button onClick={this.toggleDrawer.bind(this, 'bottom')}>Bottom</Button>
          <Button onClick={this.toggleDrawer.bind(this, 'right')}>Right</Button>
          <Button onClick={this.toggleDrawer.bind(this, 'left')}>Left</Button>
        </Container>

        <Drawer
          from="bottom"
          closed={this.state.bottomClosed}
          onClose={this.toggleDrawer.bind(this, 'bottom', false)}>
          <View>
            <p>Bottom ipsum</p>
          </View>
        </Drawer>

        <Drawer
          from="top"
          closed={this.state.topClosed}
          onClose={this.toggleDrawer.bind(this, 'top', false)}>
          <View>
            <p>Top ipsum</p>
          </View>
        </Drawer>

        <Drawer
          from="left"
          closed={this.state.leftClosed}
          onClose={this.toggleDrawer.bind(this, 'left', false)}>
          <View>
            <p>Left ipsum</p>
          </View>
        </Drawer>

        <Drawer
          from="right"
          closed={this.state.rightClosed}
          onClose={this.toggleDrawer.bind(this, 'right', false)}>
          <View>
            <p>Right ipsum</p>
          </View>
        </Drawer>
      </div>
    );
  }
});