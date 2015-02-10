import React from 'react';
import { Link } from 'react-router';
import Tappable from 'reapp-ui/helpers/Tappable';
import { RoutedViewListMixin } from 'reapp-routes/react-router';
import NestedViewList from 'reapp-ui/views/NestedViewList';
import View from 'reapp-ui/views/View';
import SearchBar from 'reapp-ui/components/SearchBar';
import List from 'reapp-ui/components/List';
import ListItem from 'reapp-ui/components/ListItem';
import Title from 'reapp-ui/components/Title';
import Badge from 'reapp-ui/components/Badge';

export default React.createClass({
  mixins: [
    RoutedViewListMixin
  ],

  getInitialState() {
    return {
      hasInteracted: true,
      demoIndex: 0,
      searchVal: '',
      disableScroll: false
    };
  },

  componentDidMount() {
    // this.demo();

    window.addEventListener('mouseover', this.setInteracted);
    window.addEventListener('focus', this.setInteracted);
  },

  setInteracted() {
    if (!this.state.hasInteracted)
      this.setState({ hasInteracted: true });
  },

  demo() {
    setTimeout(() => {
      var name = this.interfaceLinks[this.state.demoIndex][0];

      if (!this.state.hasInteracted) {
        this.transitionTo(name);
        this.setState({ demoIndex: this.state.demoIndex + 1 });
      }
    }, 3500);
  },

  handleSearch(e) {
    this.setState({ searchVal: e.target.value });
  },

  filteredLinks(links) {
    var search = RegExp(this.state.searchVal, 'i');
    var filteredLinks = links.filter(link => !!link[1].match(search));
    return filteredLinks.map(this.makeLink);
  },

  makeLink(link) {
    return (
      <ListItem
        onTap={() => this.transitionTo(link[0])}
        after={link[2] &&
          <Badge styles={{self: { background: 'red' } }}>!</Badge>
        }
        icon>
        {link[1]}
      </ListItem>
    );
  },

  interfaceLinks: [
    ['buttons', 'Buttons'],
    ['lists', 'Lists'],
    ['modals', 'Modals'],
    ['popovers', 'Popovers'],
    ['forms', 'Forms'],
    ['bars', 'Toolbars'],
    ['grids', 'Grid'],
    ['drawers', 'Drawers'],
    ['cards', 'Cards']
  ],

  viewLinks: [
    ['view-lists', 'Nested View List'],
    ['dotted-view-lists', 'Dotted View List']
  ],

  disableScroll(val) {
    this.setState({
      disableScroll: val
    });
  },

  render() {
    return (
      <NestedViewList
        {...this.routedViewListProps()}
        disableScroll={this.state.disableScroll}>
        <View title={[this.props.handle, 'Kitchen Sink']} scrollTop="searchBarHeight">
          <SearchBar onChange={this.handleSearch} defaultValue="" />

          <p>
            Welcome! We're alpha, expect bugs and sketchy performance. Help us &amp; <a href="https://github.com/reapp/reapp-ui/issues" target="_blank">report issues</a> you find.
          </p>

          <Title>Interface</Title>
          <List>
            {this.filteredLinks(this.interfaceLinks)}
          </List>

          <Title>Views</Title>
          <List>
            {this.filteredLinks(this.viewLinks)}
          </List>
        </View>

        {this.childRouteHandler({
          disableViewListDrag: this.disableScroll
        })}
      </NestedViewList>
    );
  }
});