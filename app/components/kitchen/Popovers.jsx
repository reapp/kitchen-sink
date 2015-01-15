import React from 'react';
import View from 'reapp-ui/views/View';
import PopoverLink from 'reapp-ui/components/PopoverLink';
import ShowPopover from 'reapp-ui/actions/ShowPopover';
import Button from 'reapp-ui/components/Button';
import BackButton from 'components/shared/BackButton';
import Title from 'reapp-ui/components/Title';
import { Link } from 'react-router';

var PopoversPageContent = React.createClass({
  render() {
    return (
      <div>
        <Title>Popover Below</Title>
        <p>
          Popovers are <PopoverLink content={this.props.content}>menus</PopoverLink> that will float above an element that triggers them. Apple recommends to use popovers on iPad, not smaller mobile devices. For iPhone, use actions and modals.
        </p>

        <br /><br /><br /><br /><br /><br /><br /><br />

        <Title>Popover Above</Title>
        <p>
          This is a popover that should trigger from the bottom of the page and point upwards. <PopoverLink content={this.props.content}>Check it out</PopoverLink>.
        </p>
      </div>
    );
  }
});

export default React.createClass({
  render() {
    var popoverContent = [
      <Link to="modals">Modals</Link>,
      <Link to="popovers">Popovers</Link>,
      <Link to="popovers">Tabs</Link>
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
      <View {...this.props} title={[BackButton, 'Popovers', menuButton]}>
        <PopoversPageContent {...this.props} content={popoverContent} />
      </View>
    );
  }
});