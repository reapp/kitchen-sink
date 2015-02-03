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
      left: false,
      right: false,
      bottom: false,
      top: false
    };
  },

  componentWillMount() {
    this.props.disableViewListDrag(true);
  },

  componentWillUnmount() {
    this.props.disableViewListDrag(false);
  },

  openDrawer(type) {
    this.setState({ [type]: true });
  },

  closeDrawer(type) {
    this.setState({ [type]: false });
  },

  render() {
    return (
      <div>
        <h3>Drawers</h3>
        <p>Drawers slide out from a side of the screen</p>
        <Container>
          <Button onClick={this.openDrawer.bind(this, 'top')}>Top</Button>
          <Button onClick={this.openDrawer.bind(this, 'bottom')}>Bottom</Button>
          <Button onClick={this.openDrawer.bind(this, 'right')}>Right</Button>
          <Button onClick={this.openDrawer.bind(this, 'left')}>Left</Button>
        </Container>

        {['left', 'right', 'bottom', 'top'].map((type) =>
          <Drawer
            from={type}
            open={this.state[type]}
            onClose={this.closeDrawer.bind(this, type)}>
            <View>
              <p>{type} drawer</p>
              <img src="/assets/sunrise.jpg" />
            </View>
          </Drawer>
        )}
      </div>
    );
  }
});