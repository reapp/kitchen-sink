import React from 'react';
import DottedViewList from 'reapp-ui/views/DottedViewList';
import NestedViewList from 'reapp-ui/views/NestedViewList';
import { RoutedViewListMixin } from 'reapp-routes/react-router';
import { Link, RouteHandler } from 'react-router';
import View from 'reapp-ui/views/View';
import Button from 'reapp-ui/components/Button';
import Icon from 'reapp-ui/components/Icon';
import List from 'reapp-ui/components/List';
import ListItem from 'reapp-ui/components/ListItem';
import Bar from 'reapp-ui/components/Bar';
import BarItem from 'reapp-ui/components/BarItem';
import Tweet from './twitter/Tweet';

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
  mixins: [
    RoutedViewListMixin
  ],

  getInitialState() {
    return {
      nestedViewIndex: 0
    };
  },

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
      <View {...this.props}>
        <NestedViewList
          {...this.routedViewListProps({
            onViewEntered: i => {
              this.props.disableParentViewList(i > 0);
              this.setState({ nestedViewIndex: i })
            }
          })}
          onViewEntering={i => this.setState({ nestedViewIndex: i })}
          titleBarProps={{
            styles: {
              self: {
                background: 'blue'
              }
            }
          }
        }>
          <View>
            <DottedViewList
              disableScroll={this.state.nestedViewIndex > 0}
              titleBarProps={{
                height: 48,
                styles: {
                  self: {
                    background: 'blue'
                  },
                  mid: {
                    color: '#fff'
                  }
                }
              }
            }>
              <View title="Home">
                <List>
                  <Tweet
                    onTap={() => this.transitionTo('tweetView')}
                    name="Nothing"
                    handle="@nothign">
                    I just used a ClojureScript REPL to live target C.
                  </Tweet>

                  <Tweet
                    onTap={() => this.transitionTo('tweetView')}
                    name="Nothing"
                    handle="@nothign">
                    I just used a ClojureScript REPL to live target C.
                  </Tweet>

                  <Tweet
                    onTap={() => this.transitionTo('tweetView')}
                    name="Nothing"
                    handle="@nothign">
                    I just used a ClojureScript REPL to live target C.
                  </Tweet>
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
          </View>

          {this.childRouteHandler()}
        </NestedViewList>
      </View>
    )
  }
});

export default InnerView;