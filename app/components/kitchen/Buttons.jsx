import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import BackButton from 'components/shared/BackButton';
import Title from 'reapp-ui/components/Title';
import { Container, Block } from 'reapp-ui/components/Grid';
import Button from 'reapp-ui/components/Button';
import ButtonGroup from 'reapp-ui/components/ButtonGroup';

export default StaticView({
  statics: {
    title: [BackButton, 'Buttons']
  },

  themedButtonStyles: {
    self: {
      background: '#3dd253',
      color: '#fff',
      borderColor: '#3dd253'
    }
  },

  render() {
    return (
      <div>
        <Title>Buttons</Title>
        <Container>
          <Button active>Active</Button>
          <Button>Button</Button>
          <Button rounded>Round</Button>
        </Container>

        <Title>ButtonGroup</Title>
        <Container>
          <ButtonGroup>
            <Button>Button</Button>
            <Button>Button</Button>
          </ButtonGroup>
        </Container>

        <Title>ButtonGroup Rounded</Title>
        <Container>
          <ButtonGroup buttonProps={{rounded: true}}>
            <Button>Button</Button>
            <Button active>Button</Button>
            <Button>Button</Button>
          </ButtonGroup>
        </Container>

        <Title>Styled Buttons</Title>
        <Container>
          <ButtonGroup buttonProps={{styles: this.themedButtonStyles}}>
            <Button>Button</Button>
            <Button active>Button</Button>
            <Button>Button</Button>
          </ButtonGroup>
        </Container>
      </div>
    );
  }
});