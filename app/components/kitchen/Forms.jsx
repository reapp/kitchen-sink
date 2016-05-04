import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import BackButton from 'components/shared/BackButton';
import Title from 'reapp-ui/components/Title';
import List from 'reapp-ui/components/List';
import { Container, Block } from 'reapp-ui/components/Grid';
import Form from 'reapp-ui/components/Form';
import DemoViewMixin from 'mixins/DemoViewMixin';

export default StaticView({
  mixins: [
    DemoViewMixin
  ],

  statics: {
    title: [BackButton, "Forms"]
  },

  render() {
    return (
      <div>
        <form>
          <Title>Checkboxes</Title>
          <List wrap>
            <Form.Input type="checkbox" label="Work" />
          </List>

          <Title>Radio Group</Title>
          <List wrap>
            <Form.Input type="radio" label="Generic" />
            <Form.Input type="radio" label="Radio" />
            <Form.Input type="radio" label="Select" />
            <Form.Input type="radio" label="Group" />
          </List>
        </form>

        <form>
          <Title>Inputs</Title>
          <List wrap>
            <Form.Input name="name" placeholder="Your Name" />
            <Form.Input name="email" type="email" placeholder="Your Email" />
            <Form.Input name="url" type="url" placeholder="URL" />
            <Form.Input name="password" type="password" placeholder="password" />
            <Form.Input name="phone" type="phone" placeholder="(555)-555-5555" />
          </List>
        </form>
      </div>
    );
  }
});