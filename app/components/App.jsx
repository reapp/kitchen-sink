import React from 'react';
import { Link, RouteHandler } from 'react-router';
import Menu from 'reapp-ui/components/Menu';
import Button from 'reapp-ui/components/Button';
import LayoutLeftNav from 'reapp-ui/views/LayoutLeftNav';
import hasInteracted from 'lib/hasInteracted';

export default React.createClass({
  componentDidMount() {
    window.addEventListener('mouseover', this.setInteracted);
    window.addEventListener('focus', this.setInteracted);
  },

  setInteracted() {
    hasInteracted(true);
  },

  render() {
    var button = (
      <Button
        iconProps={{
          name: 'hamburger',
          stroke: 1,
          size: 24
        }}
        chromeless />
    );

    var menu = (
      <Menu>
        <Link to="kitchen">Kitchen Sink</Link>
      </Menu>
    );

    return (
      <LayoutLeftNav
        side={menu}
        handle={button}
        title="Kitchen Sink">

        <RouteHandler {...this.props} />
      </LayoutLeftNav>
    );
  }
});