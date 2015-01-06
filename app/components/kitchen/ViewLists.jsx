var React = require('react');
var StaticView = require('reapp-ui/helpers/StaticView');
var NestedViewList = require('reapp-ui/views/NestedViewList');
var View = require('reapp-ui/views/View');
var Button = require('reapp-ui/components/Button');
var BackButton = require('reapp-ui/components/buttons/BackButton');
var { Container } = require('reapp-ui/components/Grid');

module.exports = StaticView({
  render() {
    return (
      <div>
        <NestedViewList>
          <View title={[<BackButton />, 'One', <a href="#two">Two</a>]}>
            <Container>
              Example of a deeply nested thing
              <Button href="#two">Button</Button>
            </Container>
          </View>

          <View title={[<a href="#one">One</a>, 'Two', <a href="#three">Three</a>]}>
            <Container>
              This is the first nested View
            </Container>
          </View>
        </NestedViewList>
      </div>
    );
  }
});