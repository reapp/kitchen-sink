import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import BackButton from 'components/shared/BackButton';
import Title from 'reapp-ui/components/Title';
import List from 'reapp-ui/components/List';
import { Container, Block } from 'reapp-ui/components/Grid';
import Label from 'reapp-ui/components/Label';
import Input from 'reapp-ui/components/Input';
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
            <Input type="checkbox" label="Work" />
          </List>

          <Title>Radio Group</Title>
          <List wrap>
            <Input type="radio" label="Generic" />
            <Input type="radio" label="Radio" />
            <Input type="radio" label="Select" />
            <Input type="radio" label="Group" />
          </List>
        </form>

        <form>
          <Title>Inputs</Title>
          <List wrap>
            <Input name="name" placeholder="Your Name" />
            <Input name="email" type="email" placeholder="Your Email" />
            <Input name="url" type="url" placeholder="URL" />
            <Input name="password" type="password" placeholder="password" />
            <Input name="phone" type="phone" placeholder="(555)-555-5555" />
          </List>
        </form>
      </div>
    );
  }
});