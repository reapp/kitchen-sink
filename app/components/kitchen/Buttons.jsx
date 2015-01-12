import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import BackButton from 'components/shared/BackButton';
import Title from 'reapp-ui/components/Title';
import { Container, Block } from 'reapp-ui/components/Grid';
import Button from 'reapp-ui/components/Button';
import ButtonRow from 'reapp-ui/components/ButtonRow';

export default StaticView({
  statics: {
    title: [BackButton, 'Buttons']
  },

  themedButtonStyles: {
    self: {
      background: '#3dd253',
      color: '#fff'
    }
  },

  render() {
    return (
      <div>
        <Title>Default Buttons</Title>
        <Container>
          <Title>Buttons</Title>
        </Container>
        <Container>
          <Button active>Active</Button>
          <Button>Button</Button>
          <Button rounded>Round</Button>
        </Container>
        <Container>
          <ButtonRow>
            <Button>Button</Button>
            <Button>Button</Button>
          </ButtonRow>
        </Container>
        <Container>
          <ButtonRow rounded>
            <Button>Button</Button>
            <Button active>Button</Button>
            <Button>Button</Button>
          </ButtonRow>
        </Container>

        <Title>Styled Buttons</Title>
        <Container>
          <ButtonRow buttonProps={{styles: this.themedButtonStyles}} rounded>
            <Button>Button</Button>
            <Button active>Button</Button>
            <Button>Button</Button>
          </ButtonRow>
        </Container>
      </div>
    );
  }
});