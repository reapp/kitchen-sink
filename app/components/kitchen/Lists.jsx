import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import BackButton from 'components/shared/BackButton';
import { Container } from 'reapp-ui/components/Grid';
import List from 'reapp-ui/components/List';
import Icon from 'reapp-ui/components/Icon';
import Badge from 'reapp-ui/components/Badge';
import Title from 'reapp-ui/components/Title';
import ListItem from 'reapp-ui/components/ListItem';
import { Link } from 'react-router';

export default StaticView({
  statics: {
    title: [BackButton, 'Lists Page']
  },

  render() {
    var icon = <Icon name="contact" size="28" />;
    var badge = <Badge>5</Badge>;

    return (
      <div>
        <Container>
          <p>ListViewPage View</p>
        </Container>

        <Title>Mail Style Media List</Title>
        <List>
          <ListItem
            title="Facebook"
            titleAfter="8:45"
            titleSub="New messages from Jane Doe"
            wrapper={<a href="http://google.com" />}
            noicon>
            Lorem ipsume dolor sit amet, consectetur adipiscing
            elit. Nulla sagittis tellus ut turpis condimentium,
            ursula major.
          </ListItem>
        </List>

        <Title>Simple Media List</Title>
        <List>
          <ListItem
            before={icon}
            title="Facebook"
            titleSub="New messages from Jane Doe" />
          <ListItem
            before={icon}
            title="Facebook"
            titleSub="New messages from Jane Doe"
            wrapper={<a href="http://google.com" />} />
        </List>

        <Title>List with Icons</Title>
        <List>
          <ListItem
            before={icon}
            after="Whatup"
            wrapper={<a href="http://google.com" />}>
            Nate Wienert
          </ListItem>
          <ListItem
            before={icon}
            after={badge}>
            Nate Wienert
          </ListItem>
          <ListItem
            before={icon}
            after={icon}>
            Nate Wienert
          </ListItem>
        </List>

        <Title>List with Links</Title>
        <List>
          Modals
          Popovers
          Tabs
        </List>

        <Title>Grouped with Sticky Titles</Title>
        <List title="A">
          {['Adam', 'Alix', 'Annabel']}
        </List>
        <List title="B">
          {['Billy', 'Brenda', 'Byron']}
        </List>
        <List title="C">
          {['Clay', 'Cody', 'Crystal']}
        </List>

        <Title>Inset</Title>
        <List type="inset">
          <a href="http://google.com">Google</a>
          <Link to="popovers">Popovers</Link>
          <Link to="drawers">Drawers</Link>
        </List>
      </div>
    );
  }
});