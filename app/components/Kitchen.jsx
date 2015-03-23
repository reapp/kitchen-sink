import React from 'react';
import { Link } from 'react-router';
import Tappable from 'reapp-ui/helpers/Tappable';
import RoutedViewListMixin from 'reapp-routes/react-router/RoutedViewListMixin';
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
      isDemoing: false,
      hasInteracted: false,
      demoIndex: 0,
      searchVal: '',
      disableScroll: false
    };
  },

  componentWillMount() {
    if (window.location.hash.match(/demo/)) {
      this.setState({ isDemoing: true });
      this.demo();
    }
  },

  demo() {
    if (this.demoTimeout)
      clearTimeout(this.demoTimeout);

    this.demoTimeout = setTimeout(() => {
      var name = this.interfaceLinks[this.state.demoIndex][0];

      if (!this.state.hasInteracted && !this.props.hasInteracted) {
        this.context.router.transitionTo(name);
        this.setState({ demoIndex: this.state.demoIndex + 1 });

        if (this.state.demoIndex + 1 === this.interfaceLinks.length)
          this.setState({ hasInteracted: true });
      }
    }, 3600);
  },

  handleViewLeft(i) {
    if (this.state.isDemoing && i === 1)
      this.demo();
  },

  handleSearch(e) {
    this.setState({ searchVal: e.target.value });
  },

  filteredLinks(links) {
    var search = RegExp(this.state.searchVal, 'i');
    var filteredLinks = links.filter(link => !!link[1].match(search));
    return filteredLinks.map(this.makeLink);
  },

  makeLink(link, i) {
    return (
      <ListItem
        key={i}
        onTap={() => this.context.router.transitionTo(link[0])}
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
    ['gallery', 'Gallery'],
    ['modals', 'Modals'],
    ['popovers', 'Popovers'],
    ['forms', 'Forms'],
    ['bars', 'Bars'],
    ['grids', 'Grid'],
    ['drawers', 'Drawers'],
    ['cards', 'Cards']
  ],

  demoLinks: [
    ['mailbox', 'Mailbox'],
    // ['twitter', 'Twitter'],
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
        {...this.routedViewListProps({
          onViewEntered: this.props.onViewEntered,
          onViewLeft: this.handleViewLeft
        })}
        disableScroll={this.state.disableScroll}>

        <View
          title={[this.props.handle, 'Kitchen Sink']}
          scrollTop="searchBarHeight">

          <SearchBar onChange={this.handleSearch} defaultValue="" />

          <Title>Demos</Title>
          <List>
            {this.filteredLinks(this.demoLinks)}
          </List>

          <Title>Interface</Title>
          <List>
            {this.filteredLinks(this.interfaceLinks)}
          </List>

          <Title>Views</Title>
          <List>
            {this.filteredLinks(this.viewLinks)}
          </List>

          <p>
            Welcome! We're alpha, expect bugs and sketchy performance. Help us &amp; <a href="https://github.com/reapp/reapp-ui/issues" target="_blank">report issues</a> you find.
          </p>
        </View>

        {this.childRouteHandler({
          disableParentViewList: this.disableScroll,
          isDemoing: this.state.isDemoing,
          hasInteracted: this.props.hasInteracted || this.state.hasInteracted
        })}
      </NestedViewList>
    );
  }
});