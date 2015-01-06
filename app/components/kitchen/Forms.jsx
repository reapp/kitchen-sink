var React = require('react');
var StaticView = require('reapp-ui/helpers/StaticView');
var BackButton = require('reapp-ui/components/buttons/BackButton');
var Button = require('reapp-ui/components/Button');
var ButtonRow = require('reapp-ui/components/ButtonRow');
var Title = require('reapp-ui/components/Title');
var List = require('reapp-ui/components/List');
var { Container, Block } = require('reapp-ui/components/Grid');
var Form = require('reapp-ui/components/Form');
var Label = require('reapp-ui/components/Label');
var Input = require('reapp-ui/components/Input');

module.exports = StaticView({
  statics: {
    title: [<BackButton />, "Forms"]
  },

  render() {
    return (
      <div>
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