import React from 'react';
import BackButton from 'reapp-ui/components/buttons/BackButton';
import Button from 'reapp-ui/components/Button';
import Bar from 'reapp-ui/components/Bar';
import Icon from 'reapp-ui/components/Icon';
import List from 'reapp-ui/components/List';
import View from 'reapp-ui/views/View';
import ListItem from 'reapp-ui/components/ListItem';
import SearchBar from 'reapp-ui/components/SearchBar';
import StaticWhenAnimated from 'reapp-ui/helpers/StaticWhenAnimated';

var MailboxView = React.createClass({
  contextTypes: {
    theme: React.PropTypes.object
  },

  render() {
    var backButton =
      <BackButton onTap={() => window.history.back()} stopPropagation>
        Mailboxes
      </BackButton>

    return (
      <View
        {...this.props}
        title={[backButton, 'All Inboxes', <Button chromeless>Edit</Button>]}
        scrollTop={this.context.theme.constants['searchBarHeight'] + 1}
        after={<MailboxBar />}
        offsetBottom={48}>
        <Mailbox />
      </View>
    )
  }
});

var MailboxBar = React.createClass({
  render() {
    return (
      <Bar
        animationSource="viewList"
        animations={{ self: 'moveToLeft' }}
        attach="bottom">
        <div>
          <span style={styles.bottomtext}>Updated Sunday</span>
          <span style={styles.bottomtext}>1 Unsent Message</span>
        </div>
        <Button chromeless>
          <Icon name="box-arrow-in" size={18} />
        </Button>
      </Bar>
    )
  }
})

var Mailbox = React.createClass({
  messages: ['Erinn Silsby', 'Phebe Matz', 'Derek Boulware', 'Samantha Canor',
    'Eugenio Calcagni', 'Moses Meggs', 'Evita Corel', 'Shantelle Rabideau'],

  render() {
    return (
      <div>
        <SearchBar key={100} defaultValue="" />

        <List key={110}>
          {this.messages.map((message, i) =>
            <ListItem
              key={i}
              title={message}
              titleAfter="8:45 PM"
              titleSub="New messages from someone really long title should ellipse">
              Lorem ipsume dolor sit amet, consectetur adipiscing
              elit. Nulla sagittis tellus ut turpis condimentium,
              ursula major sagittis.
            </ListItem>
          )}
        </List>
      </div>
    );
  }
});

export default MailboxView;

const styles = {
  bottomtext: {
    fontSize: 11,
    padding: '4px 0 0',
    fontWeight: 400
  }
};