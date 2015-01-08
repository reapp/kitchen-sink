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
    return {
      tabsType: 'text',
      activeTab: 0
    };
  },

  handleTabActive(index) {
    this.setState({
      activeTab: index
    });
  },

  handleTabType(e) {
    this.setState({
      tabsType: e.currentTarget.getAttribute('data-type')
    });
  },

  tabProps: {
    text: [{}, {}, {}],
    icon: [
      { icon: 'mailbox' },
      { icon: 'stopwatch' },
      { icon: 'star' }
    ],
    'icon-text': [
      { icon: 'mailbox', text: 'Mailbox' },
      { icon: 'stopwatch', text: 'Stopwatch' },
      { icon: 'star', text: 'Star' }
    ],
    'icon-text-right': [
      { icon: 'mailbox', text: 'Mailbox' },
      { icon: 'stopwatch', text: 'Stopwatch' },
      { icon: 'star', text: 'Star' }
    ]
  },

  render() {
    var activeTabProps = this.tabProps[this.state.tabsType];

    var tabs = (
      <Tabs type={this.state.tabsType} active={this.state.activeTab}>
        <TabItem {...activeTabProps[0]} onClick={this.handleTabActive.bind(null, 0)}>Feed</TabItem>,
        <TabItem{...activeTabProps[1]} onClick={this.handleTabActive.bind(null, 1)}>Stream</TabItem>,
        <TabItem {...activeTabProps[2]} onClick={this.handleTabActive.bind(null, 2)}>Board</TabItem>
      </Tabs>
    );

    var contents = [
      (
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
        </div>
      ),
      (
        <div>
          <p>Stream tab.</p>
        </div>
      ),
      (
        <div>
          <p>Board tab.</p>
        </div>
      )
    ];

    return (
      <div>
        {contents[this.state.activeTab]}
        {tabs}
      </div>
    );
  }
});