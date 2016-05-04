import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import Bar from 'reapp-ui/components/Bar';
import Button from 'reapp-ui/components/Button';
import BackButton from 'components/shared/BackButton';
import { Container, Block } from 'reapp-ui/components/Grid';
import Title from 'reapp-ui/components/Title';
import DemoViewMixin from 'mixins/DemoViewMixin';

var mailbox = require('reapp-ui/assets/icons/mailbox.svg');
var stopwatch = require('reapp-ui/assets/icons/stopwatch.svg');
var star = require('reapp-ui/assets/icons/star.svg');

export default StaticView({
  mixins: [
    DemoViewMixin
  ],

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
      { icon: mailbox },
      { icon: stopwatch },
      { icon: star }
    ],
    'icon-text': [
      { icon: mailbox },
      { icon: stopwatch },
      { icon: star }
    ],
    'icon-text-right': [
      { icon: mailbox },
      { icon: stopwatch },
      { icon: star }
    ]
  },

  render() {
    var activeBarProps = this.barProps[this.state.barType];

    var bar = (
      <Bar display={this.state.barType} activeIndex={this.state.activeBar}>
        <Bar.Item {...activeBarProps[0]} onTap={this.handleBarActive.bind(null, 0)}>
          Feed
        </Bar.Item>
        <Bar.Item {...activeBarProps[1]} onTap={this.handleBarActive.bind(null, 1)}>
          Stream
        </Bar.Item>
        <Bar.Item {...activeBarProps[2]} onTap={this.handleBarActive.bind(null, 2)}>
          Board
        </Bar.Item>
      </Bar>
    );

    var contents = [
      (
        <div>
          <Title>Bars</Title>
          <p>View different styles of bar displays:</p>

          <Container wrap pad>
            <Button onTap={this.handleBarType} data-type="text">
              Text
            </Button>
          </Container>

          <Container wrap pad>
            <Button onTap={this.handleBarType} data-type="icon">
              Icon
            </Button>
          </Container>

          <Container wrap pad>
            <Button onTap={this.handleBarType} data-type="icon-text">
              Icon + Text
            </Button>
          </Container>

          <Container wrap pad>
            <Button onTap={this.handleBarType} data-type="icon-text-right">
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
      <div className="fullscreen">
        <div style={{flex:1, padding:10}}>
          {contents[this.state.activeBar]}
        </div>
        {bar}
      </div>
    );
  }
});
