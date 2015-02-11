import React from 'react';
import BackButton from 'reapp-ui/components/buttons/BackButton';
import Button from 'reapp-ui/components/Button';
import Bar from 'reapp-ui/components/Bar';
import List from 'reapp-ui/components/List';
import View from 'reapp-ui/views/View';
import ListItem from 'reapp-ui/components/ListItem';
import SearchBar from 'reapp-ui/components/SearchBar';
import UI from 'reapp-ui';

export default React.createClass({
  render() {
    var back =
      <BackButton onTap={() => window.history.back()} stopPropagation>
        Mailboxes
      </BackButton>

    return (
      <View
        {...this.props}
        title={[back, 'All Inboxes', <Button chromeless>Edit</Button>]}
        scrollTop={UI.getConstants('searchBarHeight') + 1}
        fullscreen
      >
        <SearchBar defaultValue="" />

        <Bar display="bottom">
          <div>
            Feed
          </div>
        </Bar>

        <List styles={{
          self: {
            paddingLeft: 25,
            paddingRight: 10
          }
        }}>
          <ListItem
            title="Facebook"
            titleAfter="8:45 PM"
            titleSub="New messages from Jane Doe really long title should ellipse"
            wrapper={<a href="#" />}
          >
            Lorem ipsume dolor sit amet, consectetur adipiscing
            elit. Nulla sagittis tellus ut turpis condimentium,
            ursula major sagittis.
          </ListItem>

          <ListItem
            title="Facebook"
            titleAfter="8:45 PM"
            titleSub="New messages from Jane Doe really long title should ellipse"
            wrapper={<a href="#" />}
          >
            Lorem ipsume dolor sit amet, consectetur adipiscing
            elit. Nulla sagittis tellus ut turpis condimentium,
            ursula major sagittis.
          </ListItem>

          <ListItem
            title="Facebook"
            titleAfter="8:45 PM"
            titleSub="New messages from Jane Doe really long title should ellipse"
            wrapper={<a href="#" />}
          >
            Lorem ipsume dolor sit amet, consectetur adipiscing
            elit. Nulla sagittis tellus ut turpis condimentium,
            ursula major sagittis.
          </ListItem>

          <ListItem
            title="Facebook"
            titleAfter="8:45 PM"
            titleSub="New messages from Jane Doe really long title should ellipse"
            wrapper={<a href="#" />}
          >
            Lorem ipsume dolor sit amet, consectetur adipiscing
            elit. Nulla sagittis tellus ut turpis condimentium,
            ursula major sagittis.
          </ListItem>

          <ListItem
            title="Facebook"
            titleAfter="8:45 PM"
            titleSub="New messages from Jane Doe really long title should ellipse"
            wrapper={<a href="#" />}
          >
            Lorem ipsume dolor sit amet, consectetur adipiscing
            elit. Nulla sagittis tellus ut turpis condimentium,
            ursula major sagittis.
          </ListItem>

          <ListItem
            title="Facebook"
            titleAfter="8:45 PM"
            titleSub="New messages from Jane Doe really long title should ellipse"
            wrapper={<a href="#" />}
          >
            Lorem ipsume dolor sit amet, consectetur adipiscing
            elit. Nulla sagittis tellus ut turpis condimentium,
            ursula major sagittis.
          </ListItem>

          <ListItem
            title="Facebook"
            titleAfter="8:45 PM"
            titleSub="New messages from Jane Doe really long title should ellipse"
            wrapper={<a href="#" />}
          >
            Lorem ipsume dolor sit amet, consectetur adipiscing
            elit. Nulla sagittis tellus ut turpis condimentium,
            ursula major sagittis.
          </ListItem>

          <ListItem
            title="Facebook"
            titleAfter="8:45 PM"
            titleSub="New messages from Jane Doe really long title should ellipse"
            wrapper={<a href="#" />}
          >
            Lorem ipsume dolor sit amet, consectetur adipiscing
            elit. Nulla sagittis tellus ut turpis condimentium,
            ursula major sagittis.
          </ListItem>

          <ListItem
            title="Facebook"
            titleAfter="8:45 PM"
            titleSub="New messages from Jane Doe really long title should ellipse"
            wrapper={<a href="#" />}
          >
            Lorem ipsume dolor sit amet, consectetur adipiscing
            elit. Nulla sagittis tellus ut turpis condimentium,
            ursula major sagittis.
          </ListItem>

          <ListItem
            title="Facebook"
            titleAfter="8:45 PM"
            titleSub="New messages from Jane Doe really long title should ellipse"
            wrapper={<a href="#" />}
          >
            Lorem ipsume dolor sit amet, consectetur adipiscing
            elit. Nulla sagittis tellus ut turpis condimentium,
            ursula major sagittis.
          </ListItem>

          <ListItem
            title="Facebook"
            titleAfter="8:45 PM"
            titleSub="New messages from Jane Doe really long title should ellipse"
            wrapper={<a href="#" />}
          >
            Lorem ipsume dolor sit amet, consectetur adipiscing
            elit. Nulla sagittis tellus ut turpis condimentium,
            ursula major sagittis.
          </ListItem>
        </List>
      </View>
    );
  }
});