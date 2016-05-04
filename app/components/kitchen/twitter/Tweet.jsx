import React from 'react';
import List from 'reapp-ui/components/List';
import TweetTitle from './TweetTitle';
import iconUrl from '../../../../assets/icon.png';

export default React.createClass({
  render() {
    var { name, index, handle, children, ...props } = this.props;

    return (
      <List.Item
        index={index}
        before={<img src={iconUrl} />}
        title={<TweetTitle name={name} handle={handle} />}
        {...this.props}>
        {children}
      </List.Item>
    );
  }
});