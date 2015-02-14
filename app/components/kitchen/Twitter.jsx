import React from 'react';
import DottedViewList from 'reapp-ui/views/DottedViewList';
import View from 'reapp-ui/views/View';
import Button from 'reapp-ui/components/Button';
import Icon from 'reapp-ui/components/Icon';
import List from 'reapp-ui/components/List';
import ListItem from 'reapp-ui/components/ListItem';
import Bar from 'reapp-ui/components/Bar';
import BarItem from 'reapp-ui/components/BarItem';

var OuterView = React.createClass({
  render() {
    var { disableParentViewList, ...props } = this.props;
    return (
      <View {...props}>
        <InnerView disableParentViewList={disableParentViewList} />
      </View>
    );
  }
});

var InnerView = React.createClass({
  render() {
    var addPersonIcon =
      <Button chromeless>
        <Icon name="person-add" size={18} />
      </Button>

    var searchIcon =
      <Button chromeless>
        <Icon name="search" size={18} />
      </Button>

    var tweetIcon =
      <Button chromeless>
        <Icon name="new-message" size={18} />
      </Button>

    return (
      <div>
        <DottedViewList
          {...this.props}>
          <View title="Home">
            <List>
              <ListItem
                title={
                  <div>
                    <span>Benedict Evans</span><span>@Benedict Evans</span>
                  </div>
                }>
              </ListItem>
            </List>
          </View>

          <View title="Discover"></View>

          <View title="Etc"></View>
        </DottedViewList>
        <Bar attach="bottom">
          <BarItem icon="home">Timelines</BarItem>
          <BarItem icon="bell">Notifications</BarItem>
          <BarItem icon="message">Messages</BarItem>
          <BarItem icon="person">Me</BarItem>
        </Bar>
      </div>
    )
  }
});

export default OuterView;