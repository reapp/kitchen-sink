var React = require('react');
var StaticView = require('reapp-ui/helpers/StaticView');
var ShowModal = require('reapp-ui/actions/ShowModal');
var Button = require('reapp-ui/components/Button');
var BackButton = require('reapp-ui/components/buttons/BackButton');
var { Container, Block } = require('reapp-ui/components/Grid');

module.exports = StaticView({
  statics: {
    title: [<BackButton />, 'Modals']
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
    this.setState({modal: 'prompt'});
  },

  handleConfirm() {
    this.setState({modal: 'confirm'});
  },

  render() {
    return (
      <div>
        <Container>
          <p>These are replicas of the native Alert, Prompt and Confirm modals.</p>
        </Container>
        <Container>
          <Button onClick={this.toggleAlert}>Alert</Button>
          <Button onClick={this.handlePrompt}>Prompt</Button>
          <Button onClick={this.handleConfirm}>Confirm</Button>
        </Container>
      </div>
    );
  }
});