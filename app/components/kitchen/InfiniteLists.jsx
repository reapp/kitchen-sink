import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import BackButton from 'components/shared/BackButton';
import List from 'reapp-ui/components/List';
import ListItem from 'reapp-ui/components/ListItem';
import DemoViewMixin from 'mixins/DemoViewMixin';
import Infinite from 'react-infinity';

export default StaticView({
  mixins: [
    DemoViewMixin
  ],

  statics: {
    title: [BackButton, 'Infinite List']
  },

  getInitialState: function() {
    return {
      items: (new Array(5000)).map(i => ({ title: 'John Doe', index: i }))
    };
  },

  render() {
    return (
      <div>
        <List>
          <Infinite
            data={this.state.items}
            elementWidth={window.innerWidth}
            elementHeight={80}
            margin={0}
            childComponent={ListItem} />
        </List>
      </div>
    );
  }
});