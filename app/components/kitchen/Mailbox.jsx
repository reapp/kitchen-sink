import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import BackButton from 'components/shared/BackButton';
import List from 'reapp-ui/components/List';
import Icon from 'reapp-ui/components/Icon';
import Badge from 'reapp-ui/components/Badge';
import Title from 'reapp-ui/components/Title';
import ListItem from 'reapp-ui/components/ListItem';

export default StaticView({
  statics: {
    title: [BackButton, 'Mailbox Demo']
  },

  render() {
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
      </div>
    );
  }
});