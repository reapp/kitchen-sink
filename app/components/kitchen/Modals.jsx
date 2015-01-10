import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import ShowModal from 'reapp-ui/actions/ShowModal';
import Button from 'reapp-ui/components/Button';
import BackButton from 'components/shared/BackButton';
import { Container, Block } from 'reapp-ui/components/Grid';

export default StaticView({
  statics: {
    title: [BackButton, 'Modals']
  },

  toggleAlert() {
    ShowModal({
      type: 'alert',
      title: 'React',
      onAccept: this.toggleAlert,
      children: 'Hello'
    });
  },

  handlePrompt() {
    ShowModal({
      type: 'prompt',
      title: 'React',
      onAccept: this.toggleAlert,
      children: 'Hello'
    });
  },

  render() {
    return (
      <div>
        <Container>
          <p>These are replacements for the Alert and Prompt modals.</p>
        </Container>
        <Container>
          <Button onClick={this.toggleAlert}>Alert</Button>
          <Button onClick={this.handlePrompt}>Prompt</Button>
        </Container>
      </div>
    );
  }
});