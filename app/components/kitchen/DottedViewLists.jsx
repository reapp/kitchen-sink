import React from 'react';
import BackButtonStatic from '../shared/BackButton';
import BackButton from 'reapp-ui/components/buttons/BackButton';
import Button from 'reapp-ui/components/Button';
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
  getInitialState() {
    return {
      step: 0
    };
  },

  setViewStep(index) {
    this.setState({ step: index });
  },

  viewButton(name, index) {
    return (
      <BackButton
        onClick={this.setViewStep.bind(this, 0)}>
        {name}
      </BackButton>
    );
  },

  render() {
    return (
      <DottedViewList onViewEntered={this.setViewStep} scrollToStep={this.state.step}>
        <View id="one" title={[BackButtonStatic,'One']}>
          <Container>
            First
            <Button onClick={this.setViewStep.bind(this, 2)}>Go to third step</Button>
          </Container>
        </View>

        <View id="two" title={[this.viewButton('One', 0),'Two']}>
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