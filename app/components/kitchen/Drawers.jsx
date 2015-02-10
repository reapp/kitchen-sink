import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import Drawer from 'reapp-ui/components/Drawer';
import View from 'reapp-ui/views/View';
import Title from 'reapp-ui/components/Title';
import Button from 'reapp-ui/components/Button';
import { Container, Block } from 'reapp-ui/components/Grid';
import BackButton from 'components/shared/BackButton';
import Button from 'reapp-ui/components/Button';

export default StaticView({
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
    this.props.disableViewListDrag(true);

    if (!this.state.left && !this.state.right && !this.state.top && !this.state.bottom)
      this.props.disableViewListDrag(false);
  },

  render() {
    return (
      <div>
        <Title>Drawers</Title>
        <p>Drawers slide out from a side of the screen</p>
        <Container wrap>
          <Button onClick={this.toggleDrawer.bind(this, 'top')}>Top</Button>
          <Button onClick={this.toggleDrawer.bind(this, 'bottom')}>Bottom</Button>
          <Button onClick={this.toggleDrawer.bind(this, 'right')}>Right</Button>
          <Button onClick={this.toggleDrawer.bind(this, 'left')}>Left</Button>
        </Container>

        {['left', 'right', 'bottom', 'top'].map((type) =>
          <Drawer
            from={type}
            open={this.state[type]}
            dragger={type !== 'right'}>
            <View>
              <p>{type} drawer</p>
              <Button onClick={this.toggleDrawer.bind(this, type)}>Close me</Button>
              <br />
              <img src="/assets/sunrise.jpg" />
            </View>
          </Drawer>
        )}
      </div>
    );
  }
});