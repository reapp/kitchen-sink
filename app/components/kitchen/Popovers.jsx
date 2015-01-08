import React from 'react';
import View from 'reapp-ui/views/View';
import PopoverLink from 'reapp-ui/components/PopoverLink';
import ShowPopover from 'reapp-ui/actions/ShowPopover';
import { Container } from 'reapp-ui/components/Grid';
import Button from 'reapp-ui/components/Button';
import BackButton from 'reapp-ui/components/buttons/BackButton';
import { Link } from 'react-router';

var PopoversPage = React.createClass({
  render() {
    return (
      <div>
        <Container>
          <p>Popovers
          are <PopoverLink content={this.props.content}>menus</PopoverLink> that
          will float above an element that triggers them. Apple recommends
          to use popovers on iPad, not smaller mobile devices. For iPhone, use
          actions and modals.</p>
        </Container>
      </div>
    );
  }
});

export default React.createClass({
  render() {
    var popoverContent = [
      <Link to="modals">Modals</Link>,
      <Link to="popovers">Popovers</Link>,
      <Link to="tabs">Tabs</Link>
    ];

    var menuButton = (
      <Button
        iconProps={{
          name: 'hamburger',
          size: 24,
          stroke: 1,
          shapeRendering: 'crispEdges',
        }}
        onClick={ShowPopover.bind(null, { content: popoverContent })}
        chromeless />
    );

    return (
      <View {...this.props} title={[<BackButton />, 'Popovers', menuButton]}>
        <PopoversPage {...this.props} content={popoverContent} />
      </View>
    );
  }
});