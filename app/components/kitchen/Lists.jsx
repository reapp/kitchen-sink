import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import BackButton from 'components/shared/BackButton';
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
    var icon = <img src={require('assets/icon.png')} width={32} height={32} />;
    var badge = <Badge>5</Badge>;

    return (
      <div>
        <Title>Mail Style Media List</Title>
        <List>
          <ListItem
            title="Facebook"
            titleAfter="8:45"
            titleSub="New messages from Jane Doe"
            wrapper={<a href="#" />}
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
            wrapper={<a href="#" />} />
        </List>

        <Title>List with Icons</Title>
        <List>
          <ListItem
            before={icon}
            after="Whatup"
            wrapper={<a href="#" />}>
            Brian Cole
          </ListItem>
          <ListItem
            before={icon}
            after={badge}>
            Joey Mills
          </ListItem>
          <ListItem
            before={icon}
            after={icon}>
            Blair Batac
          </ListItem>
        </List>

        <Title>Basic list</Title>
        <List wrap>
          {['Modals', 'Popovers', 'Tabs']}
        </List>

        <Title>Grouped with Sticky Titles</Title>
        <List title="A" wrap>
          {['Adam', 'Alix', 'Annabel']}
        </List>
        <List title="B" wrap>
          {['Billy', 'Brenda', 'Byron']}
        </List>
        <List title="C" wrap>
          {['Clay', 'Cody', 'Crystal']}
        </List>

        <Title>Inset</Title>
        <List type="inset" wrap>
          <a href="#">Google</a>
          <Link to="popovers">Popovers</Link>
          <Link to="drawers">Drawers</Link>
        </List>
      </div>
    );
  }
});