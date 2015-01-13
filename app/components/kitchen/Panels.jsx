import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import Drawer from 'reapp-ui/components/Drawer';
import View from 'reapp-ui/views/View';
import { Container, Block } from 'reapp-ui/components/Grid';
import BackButton from 'components/shared/BackButton';
import Button from 'reapp-ui/components/Button';

export default StaticView({
  statics: {
    title: [BackButton, 'Panels']
  },

  title: 'Panels',

  getInitialState() {
    return {
      bottomClosed: true,
      leftClosed: true,
      topClosed: true,
      rightClosed: true
    };
  },

  toggleBottomView() {
    this.setState({ bottomClosed: !this.state.bottomClosed });
  },

  toggleLeftView() {
    this.setState({ leftClosed: !this.state.leftClosed });
  },

  toggleRightView() {
    this.setState({ rightClosed: !this.state.rightClosed });
  },

  toggleTopView() {
    this.setState({ topClosed: !this.state.topClosed });
  },

  render() {
    return (
      <div>
        <h3>{this.title}</h3>
        <p>Panels slide out from a side of the screen</p>
        <Container>
          <Button onClick={this.toggleTopView}>Top</Button>
          <Button onClick={this.toggleBottomView}>Bottom</Button>
          <Button onClick={this.toggleRightView}>Right</Button>
          <Button onClick={this.toggleLeftView}>Left</Button>
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