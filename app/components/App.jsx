import React from 'react';
import { Link, RouteHandler } from 'react-router';
import Menu from 'reapp-ui/components/Menu';
import Button from 'reapp-ui/components/Button';
import LayoutLeftNav from 'reapp-ui/views/LayoutLeftNav';

export default React.createClass({
  getInitialState() {
    return { demoIndex: 0 };
  },

  afterDemo() {
    this.setState({ demoIndex: demoIndex++ });
  },

  render() {
    var button = (
      <Button
        iconProps={{
          name: 'hamburger',
          stroke: 1,
          size: 26,
          shapeRendering: 'crispEdges'
        }}
        chromeless />
    );

    var menu = (
      <Menu>
        <Link to="kitchen">Kitchen Sink</Link>
      </Menu>
    );

    return (
      <LayoutLeftNav side={menu} handle={button} title="Kitchen Sink">
        <RouteHandler demoIndex={this.state.demoIndex} afterDemo={this.afterDemo} {...this.props} />
      </LayoutLeftNav>
    );
  }
});