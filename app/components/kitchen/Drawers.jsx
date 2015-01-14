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

  toggleDrawer(type) {
    var key = `${type}Closed`;
    this.setState({ [key]: !this.state[key] });
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

        <Drawer type="bottom" closed={this.state.bottomClosed}>
          <View>
            <p>Bottom ipsum</p>
          </View>
        </Drawer>

        <Drawer type="top" closed={this.state.topClosed}>
          <View>
            <p>Top ipsum</p>
          </View>
        </Drawer>

        <Drawer type="left" closed={this.state.leftClosed}>
          <View>
            <p>Left ipsum</p>
          </View>
        </Drawer>

        <Drawer type="right" closed={this.state.rightClosed}>
          <View>
            <p>Right ipsum</p>
          </View>
        </Drawer>
      </div>
    );
  }
});