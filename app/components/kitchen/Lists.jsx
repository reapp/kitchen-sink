import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import BackButton from 'components/shared/BackButton';
import List from 'reapp-ui/components/List';
import Icon from 'reapp-ui/components/Icon';
import Badge from 'reapp-ui/components/Badge';
import Title from 'reapp-ui/components/Title';
import { Link } from 'react-router';
import DemoViewMixin from 'mixins/DemoViewMixin';

export default StaticView({
  mixins: [
    DemoViewMixin
  ],

  statics: {
    title: [BackButton, 'Lists Page']
  },

  render() {
    var icon =
      <img
        src={require('assets/icon.png')}
        width={40}
        height={40}
        style={{ borderRadius: 8 }}
      />

    var badge = <Badge>5</Badge>;

    return (
      <div>
        <Title>Mail Style Media List</Title>
        <List>
          <List.Item
            title="Donny Radcliffe"
            titleAfter="8:45 AM"
            titleSub="New messages from Jane Doe"
            wrapper={<a href="#" />}
            noicon>
            Lorem ipsume dolor sit amet, consectetur adipiscing
            elit. Nulla sagittis tellus ut turpis condimentium,
            ursula major.
          </List.Item>
        </List>

        <Title>Simple Media List</Title>
        <List>
          <List.Item
            before={icon}
            title="Mark McGraw"
            titleSub="New messages from a person" />
          <List.Item
            before={icon}
            title="John Appleseed"
            titleSub="New messages from another person"
            wrapper={<a href="#" />} />
        </List>

        <Title>List with Icons</Title>
        <List>
          <List.Item
            before={icon}
            after="Linked">
            Brian Cole
          </List.Item>
          <List.Item
            before={icon}
            after={badge}>
            Joey Mills
          </List.Item>
          <List.Item
            before={icon}
            after={icon}>
            Blair Batac
          </List.Item>
        </List>

        <Title>Basic list</Title>
        <List wrap>
          {['Modals', 'Popovers', 'Tabs']}
        </List>

        <Title>Grouped with Sticky Titles</Title>
        <List title='Name Starting with "A"' wrap>
          {['Adam', 'Alix', 'Annabel']}
        </List>
        <List title='Name Starting with "B"' wrap>
          {['Billy', 'Brenda', 'Byron']}
        </List>
        <List title='Name Starting with "C"' wrap>
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