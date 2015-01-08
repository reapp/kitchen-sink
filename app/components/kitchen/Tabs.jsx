import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import Tabs from 'reapp-ui/components/Tabs';
import TabItem from 'reapp-ui/components/TabItem';
import Button from 'reapp-ui/components/Button';
import BackButton from 'reapp-ui/components/buttons/BackButton';
import { Container, Block } from 'reapp-ui/components/Grid';

export default StaticView({
  statics: {
    title: [<BackButton />, 'Tabs']
  },

  getInitialState() {
    return { tabsType: 'text' };
  },

  handleTabType(e) {
    this.setState({ tabsType: e.currentTarget.getAttribute('data-type') });
  },

  render() {
    var tabContents = {
      text: [
        <TabItem>Feed</TabItem>,
        <TabItem>Stream</TabItem>,
        <TabItem>Board</TabItem>
      ],

      icon: [
        <TabItem icon="mailbox" />,
        <TabItem icon="stopwatch" />,
        <TabItem icon="star" />
      ],

      'icon-text': [
        <TabItem icon="mailbox" text="Mailbox" />,
        <TabItem icon="stopwatch" text="Stopwatch" />,
        <TabItem icon="star" text="Star" />
      ],

      'icon-text-right': [
        <TabItem icon="mailbox" text="Mailbox" />,
        <TabItem icon="stopwatch" text="Stopwatch" />,
        <TabItem icon="star" text="Star" />
      ]
    };

    return (
      <div>
        <Container>
          <Block>
            <h3>Tabs</h3>
            <p>Tabs are something</p>
          </Block>
        </Container>

        <Container>
          <Button onClick={this.handleTabType} data-type="text">Text</Button>
        </Container>

        <Container>
          <Button onClick={this.handleTabType} data-type="icon">Icon</Button>
        </Container>

        <Container>
          <Button onClick={this.handleTabType} data-type="icon-text">Icon + Text</Button>
        </Container>

        <Container>
          <Button onClick={this.handleTabType} data-type="icon-text-right">Icon + Text (Right)</Button>
        </Container>

        <Tabs type={this.state.tabsType}>
          {tabContents[this.state.tabsType]}
        </Tabs>
      </div>
    );
  }
});