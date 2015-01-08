import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import { Container, Block } from 'reapp-ui/components/Grid';
import BackButton from 'reapp-ui/components/buttons/BackButton';
import Button from 'reapp-ui/components/Button';
import Title from 'reapp-ui/components/Title';

export default StaticView({
  statics: {
    title: [<BackButton />, 'Controls']
  },

  render() {
    return (
      <div {...this.props}>
        <Title>Buttons</Title>
        <Container>
          <Button>Hello</Button>
          <Button>Hello</Button>
          <Button>Hello</Button>
        </Container>
      </div>
    );
  }
});