import React from 'react';
import { Link } from 'react-router';
import { RoutedViewListMixin } from 'reapp-platform';
import NestedViewList from 'reapp-ui/views/NestedViewList';
import View from 'reapp-ui/views/View';
import SearchBar from 'reapp-ui/components/SearchBar';
import List from 'reapp-ui/components/List';
import ListItem from 'reapp-ui/components/ListItem';
import Title from 'reapp-ui/components/Title';
import Badge from 'reapp-ui/components/Badge';

var InertLink = React.createClass({
  displayName: 'Link',
  render() { return <Link {...this.props} activeClassName="" />; }
});

export default React.createClass({
  mixins: [
    RoutedViewListMixin
  ],

  getInitialState() {
    return {
      searchVal: ''
    };
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
        wrapper={<InertLink to={link[0]} />}
        after={link[2] && <Badge styles={{self: { background: 'red' } }}>!</Badge>}>
        {link[1]}
      </ListItem>
    );
  },

  interfaceLinks: [
    ['controls', 'Controls'],
    ['lists', 'Lists'],
    ['modals', 'Modals'],
    ['popovers', 'Popovers'],
    ['forms', 'Forms'],
    ['tabs', 'Tabs'],
    ['grids', 'Grid'],
    ['panels', 'Drawers'],
    ['cards', 'Cards']
  ],

  viewLinks: [
    ['view-lists', 'View List'],
    ['dotted-view-lists', 'Dotted View List'],
    ['view-frosted', 'Frosted Glass Titlebar', true]
  ],

  render() {
    return (
      <NestedViewList {...this.routedViewListProps()}>
        <View title={[this.props.handle, 'Kitchen Sink']}>
          <SearchBar onChange={this.handleSearch} defaultValue="" />

          <Title>Interface</Title>
          <List>
            {this.filteredLinks(this.interfaceLinks)}
          </List>

          <Title>Views</Title>
          <List>
            {this.filteredLinks(this.viewLinks)}
          </List>
        </View>

        {this.routedSubRoute()}
      </NestedViewList>
    );
  }
});