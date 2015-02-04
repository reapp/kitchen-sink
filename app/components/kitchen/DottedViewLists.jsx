import React from 'react';
import BackButtonStatic from '../shared/BackButton';
import BackButton from 'reapp-ui/components/buttons/BackButton';
import DottedViewList from 'reapp-ui/views/DottedViewList';
import View from 'reapp-ui/views/View';
import { Container } from 'reapp-ui/components/Grid';

var OuterView = React.createClass({
  render() {
    return (
      <View {...this.props}>
        <InnerView />
      </View>
    );
  }
});

var InnerView = React.createClass({
  render() {
    return (
      <DottedViewList>
        <View id="one" title={[BackButtonStatic,'One']}>
          <Container>
            First
            <a className="button" href="#two">Button</a>
          </Container>
        </View>

        <View id="two" title={[<BackButton onClick={this.prevView}>One</BackButton>,'Two']}>
          <Container>
            Second
          </Container>
        </View>

        <View id="three" title={[<BackButton onClick={this.prevView}>Two</BackButton>,'Three']}>
          <Container>
            Third
          </Container>
        </View>

        <View id="four" title={[<BackButton onClick={this.prevView}>Three</BackButton>,'Four']}>
          <Container>
            Fourth
          </Container>
        </View>
      </DottedViewList>
    );
  }
});

export default OuterView;