var React = require('react');
var View = require('reapp-ui/views/View');
var BackButton = require('reapp-ui/components/buttons/BackButton');
var { Container, Block } = require('reapp-ui/components/Grid');

require('./Grids.styl');

module.exports = React.createClass({
  styles: {
    textAlign: 'center',
  },

  render() {
    var containerProps = {
      pad: true,
      styles: {
        self: {
          textAlign: 'center',
          marginTop: 0,
          marginBottom: 0
        }
      }
    };

    return (
      <View {...this.props}
        id="GridsPage"
        styles={this.styles}
        title={[<BackButton />, "Grid System"]}>

        <Container {...containerProps}>
          <Block>1</Block>
        </Container>

        <Container {...containerProps}>
          <Block>1</Block>
          <Block>2</Block>
        </Container>

        <Container {...containerProps}>
          <Block>1</Block>
          <Block>2</Block>
          <Block>3</Block>
        </Container>

        <Container {...containerProps}>
          <Block>1</Block>
          <Block>2</Block>
          <Block>3</Block>
          <Block>4</Block>
        </Container>

        <Container {...containerProps}>
          <Block>1</Block>
          <Block>2</Block>
          <Block>3</Block>
          <Block>4</Block>
          <Block>5</Block>
        </Container>

        <Container {...containerProps}>
          <Block>1</Block>
          <Block>2</Block>
          <Block>3</Block>
          <Block>4</Block>
          <Block>5</Block>
          <Block>6</Block>
        </Container>
      </View>
    );
  }
});