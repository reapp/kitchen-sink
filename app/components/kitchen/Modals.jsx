import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import Modal from 'reapp-ui/components/Modal';
import Button from 'reapp-ui/components/Button';
import BackButton from 'components/shared/BackButton';
import { Container, Block } from 'reapp-ui/components/Grid';

export default StaticView({
  statics: {
    title: [BackButton, 'Modals']
  },

  getInitialState() {
    return { modal: false };
  },

  toggleModal(type) {
    this.setState({
      modal: this.state.modal === type ? false : type
    });
  },

  render() {
    return (
      <div>
        {this.state.modal && (
          <Modal
            title="Hello"
            children="Something"
            type={this.state.modal}
            onClose={this.toggleModal} />
        )}
        <Container>
          <p>These are replacements for the Alert and Prompt modals.</p>
        </Container>
        <Container>
          <Button onClick={this.toggleModal.bind(this, 'alert')}>Alert</Button>
          <Button onClick={this.toggleModal.bind(this, 'prompt')}>Prompt</Button>
        </Container>
      </div>
    );
  }
});