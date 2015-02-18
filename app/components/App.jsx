import React from 'react';
import { Link, RouteHandler } from 'react-router';
import Menu from 'reapp-ui/components/Menu';
import Button from 'reapp-ui/components/Button';
import LayoutLeftNav from 'reapp-ui/views/LayoutLeftNav';
import hasInteracted from 'lib/hasInteracted';

export default React.createClass({
  getInitialState() {
    return {
      disableDragger: false
    };
  },

  componentDidMount() {
    window.addEventListener('mouseover', this.setInteracted);
    window.addEventListener('focus', this.setInteracted);
  },

  setInteracted() {
    hasInteracted(true);
  },

  handleViewEntered(i) {
    this.setState({ disableDragger: i > 0 });
  },

  render() {
    var handle =
      <Button
        iconProps={{
          file: require('reapp-ui/assets/icons/hamburger.svg'),
          stroke: 1,
          size: 24,
          animations: false
        }}
        chromeless />

    var menu =
      <Menu>
        <Link style={{color: '#fff'}} to="kitchen">Kitchen Sink</Link>
      </Menu>

    return (
      <LayoutLeftNav
        side={menu}
        handle={handle}
        draggable={false}>
        <RouteHandler {...this.props} onViewEntered={this.handleViewEntered} />
      </LayoutLeftNav>
    );
  }
});