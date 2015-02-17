import React from 'react';
import ListItem from 'reapp-ui/components/ListItem';
import TweetTitle from './TweetTitle';
import iconUrl from '../../../../assets/icon.png';

export default React.createClass({
  render() {
    var { name, handle, children, ...props } = this.props;

    return (
      <ListItem
        before={<img src={iconUrl} />}
        title={<TweetTitle name={name} handle={handle} />}
        {...this.props}>
        {children}
      </ListItem>
    );
  }
});