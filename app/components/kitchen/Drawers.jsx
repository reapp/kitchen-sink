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
      drawer: false
    };
  },

  toggleDrawer(drawer) {
    console.log('drawer', drawer);
    this.setState({
      drawer: drawer === this.state.drawer ? false : drawer
    });

    this.disableViewList(!!drawer);
  },

  disableViewList(disable) {
    if (!this.props.disableViewList)
      return;

    this.props.disableViewList(disable);
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

        {this.state.drawer && (
          <Drawer
            from={this.state.drawer}
            onClose={this.toggleDrawer.bind(this, this.state.drawer)}>
            <View>
              <p>{this.state.drawer} drawer</p>
              <img src="/assets/sunrise.jpg" />
            </View>
          </Drawer>
        )}
      </div>
    );
  }
});