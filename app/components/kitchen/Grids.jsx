import React from 'react';
import View from 'reapp-ui/views/View';
import BackButton from 'reapp-ui/components/buttons/BackButton';
import { Container, Block } from 'reapp-ui/components/Grid';

var BlueBlock = React.createClass({
  styles: {
    self: {
      background: 'rgba(0,0,255,0.2)',
      border: '5px solid rgba(0,0,255,0.1)'
    }
  },

  render() {
    return <Block {...this.props} styles={this.styles} />;
  }
});

export default React.createClass({
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

        <p>
          Included is a simple grid system, based on flexbox.
        </p>

        <Container {...containerProps}>
          <BlueBlock>1</BlueBlock>
        </Container>

        <Container {...containerProps}>
          <BlueBlock>1</BlueBlock>
          <BlueBlock>2</BlueBlock>
        </Container>

        <Container {...containerProps}>
          <BlueBlock>1</BlueBlock>
          <BlueBlock>2</BlueBlock>
          <BlueBlock>3</BlueBlock>
        </Container>

        <Container {...containerProps}>
          <BlueBlock>1</BlueBlock>
          <BlueBlock>2</BlueBlock>
          <BlueBlock>3</BlueBlock>
          <BlueBlock>4</BlueBlock>
        </Container>

        <Container {...containerProps}>
          <BlueBlock>1</BlueBlock>
          <BlueBlock>2</BlueBlock>
          <BlueBlock>3</BlueBlock>
          <BlueBlock>4</BlueBlock>
          <BlueBlock>5</BlueBlock>
        </Container>

        <Container {...containerProps}>
          <BlueBlock>1</BlueBlock>
          <BlueBlock>2</BlueBlock>
          <BlueBlock>3</BlueBlock>
          <BlueBlock>4</BlueBlock>
          <BlueBlock>5</BlueBlock>
          <BlueBlock>6</BlueBlock>
        </Container>
      </View>
    );
  }
});