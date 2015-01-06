var React = require('react');
var StaticView = require('reapp-ui/helpers/StaticView');
var { Container, Block } = require('reapp-ui/components/Grid');
var BackButton = require('reapp-ui/components/buttons/BackButton');
var Button = require('reapp-ui/components/Button');
var Title = require('reapp-ui/components/Title');

module.exports = StaticView({
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