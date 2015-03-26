import React from 'react';
import Tweet from './Tweet';
import View from 'reapp-ui/views/View';
import Button from 'reapp-ui/components/Button';
import Icon from 'reapp-ui/components/Icon';
import List from 'reapp-ui/components/List';

export default React.createClass({
  render() {
    return (
      <View {...this.props} title="View Tweet">
        <List>
          <Tweet
            name="dlongster"
            handle="@dlongster">
            Lorem ipsum dolor sit amet, man!
          </Tweet>
        </List>
      </View>
    );
  }
});