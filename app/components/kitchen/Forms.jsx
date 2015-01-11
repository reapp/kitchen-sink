import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import BackButton from 'components/shared/BackButton';
import Title from 'reapp-ui/components/Title';
import List from 'reapp-ui/components/List';
import { Container, Block } from 'reapp-ui/components/Grid';
import Form from 'reapp-ui/components/Form';
import Label from 'reapp-ui/components/Label';
import Input from 'reapp-ui/components/Input';

export default StaticView({
  statics: {
    title: [BackButton, "Forms"]
  },

  render() {
    return (
      <div>
        <Container>
          <Title>Checkboxes &amp; Radios</Title>
        </Container>
        <Container>
          <Form>
            <List>
              <Input type="checkbox" label="Work" />
            </List>

            <Title>Radio Group</Title>
            <List>
              <Input type="radio" label="Generic" />
              <Input type="radio" label="Radio" />
              <Input type="radio" label="Select" />
              <Input type="radio" label="Group" />
            </List>
          </Form>
        </Container>

        <Container>
          <Title>Elements</Title>
        </Container>
        <Container>
          <form>
            <List>
              <Input name="name" placeholder="Your Name" />
              <Input name="email" type="email" placeholder="Your Email" />
              <Input name="url" type="url" placeholder="URL" />
              <Input name="password" type="password" placeholder="password" />
              <Input name="phone" type="phone" placeholder="(555)-555-5555" />
            </List>
          </form>
        </Container>
      </div>
    );
  }
});