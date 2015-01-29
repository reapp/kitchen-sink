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

  toggleAlert() {
    // todo: show modal
  },

  buttonStyles: {
    red: {
      self: {
        background: '#d24420',
        color: '#fff',
        borderColor: '#d24420'
      }
    },

    green: {
      self: {
        background: '#3dd253',
        color: '#fff',
        borderColor: '#3dd253'
      }
    },

    blue: {
      self: {
        background: '#2f4cd2',
        color: '#fff',
        borderColor: '#2f4cd2'
      }
    }
  },

  render() {
    return (
      <div>
        <Title>Buttons</Title>

        <Container>
          <Button onClick={this.toggleAlert} active>Active</Button>
          <Button onClick={this.toggleAlert}>Button</Button>
          <Button onClick={this.toggleAlert} rounded>Round</Button>
        </Container>

        <Title>ButtonGroup</Title>

        <Container>
          <ButtonGroup>
            <Button onClick={this.toggleAlert}>Button</Button>
            <Button onClick={this.toggleAlert}>Button</Button>
          </ButtonGroup>
        </Container>

        <Title>ButtonGroup Rounded</Title>

        <Container>
          <ButtonGroup buttonProps={{rounded: true}}>
            <Button onClick={this.toggleAlert}>Button</Button>
            <Button onClick={this.toggleAlert} active>Button</Button>
            <Button onClick={this.toggleAlert}>Button</Button>
          </ButtonGroup>
        </Container>

        <Title>Styled Buttons</Title>

        <Container>
          <ButtonGroup buttonProps={{styles: this.buttonStyles.green}}>
            <Button onClick={this.toggleAlert}>Button</Button>
            <Button onClick={this.toggleAlert} active>Button</Button>
            <Button onClick={this.toggleAlert}>Button</Button>
          </ButtonGroup>
        </Container>

        <Container>
          <Button onClick={this.toggleAlert} styles={this.buttonStyles.red}>Active</Button>
          <Button onClick={this.toggleAlert} styles={this.buttonStyles.green}>Button</Button>
          <Button onClick={this.toggleAlert} styles={this.buttonStyles.blue} rounded>Round</Button>
        </Container>
      </div>
    );
  }
});