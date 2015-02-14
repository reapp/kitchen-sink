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
          <View
            title="Home"
            titleBarProps={{
              styles: {
                self: {
                  background: 'blue'
                },
                mid: {
                  color: '#fff'
                }
              }
            }}>
            <List>
              <ListItem
                title={<TwitTitle name="David Long" handle="@swannster" />}>
                I just used a ClojureScript REPL to live target C.
              </ListItem>

              <ListItem
                title={<TwitTitle name="Lauren Morill" handle="@laurenmorrill" />}>
                Lorem.
              </ListItem>

              <ListItem
                title={<TwitTitle name="Benedict Walker" handle="@bwalkerio" />}>
                Lorem.
              </ListItem>

              <ListItem
                title={<TwitTitle name="Darren Gross" handle="@darren_gross" />}>
                Lorem.
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

var TwitTitle = React.createClass({
  styles: {
    name: {
      fontWeight: 'bold'
    },

    handle: {
      color: '#999'
    }
  },

  render() {
    return (
      <div>
        <span style={this.styles.name}>{this.props.name}</span>
        <span style={this.styles.handle}>{this.props.handle}</span>
      </div>
    );
  }
});

export default OuterView;