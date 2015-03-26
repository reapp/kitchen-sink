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
          titleBarProps={{ styles: styles.titlebar }}>
          <View
            offsetBottom={49}
            after={
              <Bar attach="bottom">
                <BarItem icon="home">Timelines</BarItem>
                <BarItem icon="bell">Notifications</BarItem>
                <BarItem icon="message">Messages</BarItem>
                <BarItem icon="person">Me</BarItem>
              </Bar>
            }>
            <DottedViewList
              disableScroll={this.state.nestedViewIndex > 0}
              titleBarProps={{
                height: 48,
                styles: styles.titlebar
              }}>
              <View title="Home">
                <List>
                  <Tweet
                    onTap={() => this.context.router.transitionTo('tweetView')}
                    name="Nothing"
                    handle="@nothign">
                    I just used a ClojureScript REPL to live target C.
                  </Tweet>

                  <Tweet
                    onTap={() => this.context.router.transitionTo('tweetView')}
                    name="Nothing"
                    handle="@nothign">
                    I just used a ClojureScript REPL to live target C.
                  </Tweet>

                  <Tweet
                    onTap={() => this.context.router.transitionTo('tweetView')}
                    name="Nothing"
                    handle="@nothign">
                    I just used a ClojureScript REPL to live target C.
                  </Tweet>
                </List>
              </View>

              <View title="Discover" plain></View>

              <View title="Etc" plain></View>
            </DottedViewList>
          </View>

          {this.childRouteHandler({
            titleBarProps: {
              styles: styles.titlebar
            }
          })}
        </NestedViewList>
      </View>
    )
  }
});

const styles = {
  titlebar: {
    self: {
      background: '#2C81D5'
    },
    mid: {
      color: '#fff'
    }
  }
};

export default InnerView;