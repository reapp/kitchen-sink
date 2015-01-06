var React = require('react');
var StaticView = require('reapp-ui/helpers/StaticView');
var DottedViewList = require('reapp-ui/views/DottedViewList');
var View = require('reapp-ui/views/View');
var BackButton = require('reapp-ui/components/buttons/BackButton');
var { Container } = require('reapp-ui/components/Grid');

module.exports = StaticView({
  statics: {
    title: [<BackButton />, 'Dotted View List']
  },

  render() {
    return (
      <DottedViewList>
        <View id="one" title={[,'One']}>
          <Container>
            First
            <a className="button" href="#two">Button</a>
          </Container>
        </View>

        <View id="two" title={[,'Two']}>
          <Container>
            Second
          </Container>
        </View>

        <View id="three" title={[,'Three']}>
          <Container>
            Third
          </Container>
        </View>

        <View id="four" title={[,'Four']}>
          <Container>
            Fourth
          </Container>
        </View>
      </DottedViewList>
    );
  }
});