import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import Bar from 'reapp-ui/components/Bar';
import BarItem from 'reapp-ui/components/BarItem';
import Button from 'reapp-ui/components/Button';
import BackButton from 'components/shared/BackButton';
import { Container, Block } from 'reapp-ui/components/Grid';
import Title from 'reapp-ui/components/Title';

export default StaticView({
  statics: {
    title: [BackButton, 'Bar']
  },

  getInitialState() {
    return {
      barType: 'text',
      activeBar: 0
    };
  },

  handleBarActive(index) {
    this.setState({
      activeBar: index
    });
  },

  handleBarType(e) {
    this.setState({
      barType: e.currentTarget.getAttribute('data-type')
    });
  },

  barProps: {
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
    var activeBarProps = this.barProps[this.state.barType];

    var bar = (
      <Bar display={this.state.barType} activeIndex={this.state.activeBar}>
        <BarItem {...activeBarProps[0]} onClick={this.handleBarActive.bind(null, 0)}>Feed</BarItem>
        <BarItem{...activeBarProps[1]} onClick={this.handleBarActive.bind(null, 1)}>Stream</BarItem>
        <BarItem {...activeBarProps[2]} onClick={this.handleBarActive.bind(null, 2)}>Board</BarItem>
      </Bar>
    );

    var contents = [
      (
        <div>
          <Title>Bars</Title>
          <p>View different styles of bar displays:</p>

          <Container>
            <Button onClick={this.handleBarType} data-type="text">
              Text
            </Button>
          </Container>

          <Container>
            <Button onClick={this.handleBarType} data-type="icon">
              Icon
            </Button>
          </Container>

          <Container>
            <Button onClick={this.handleBarType} data-type="icon-text">
              Icon + Text
            </Button>
          </Container>

          <Container>
            <Button onClick={this.handleBarType} data-type="icon-text-right">
              Icon + Text (Right)
            </Button>
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
        {contents[this.state.activeBar]}
        {bar}
      </div>
    );
  }
});