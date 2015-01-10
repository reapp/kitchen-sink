import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import DottedViewList from 'reapp-ui/views/DottedViewList';
import View from 'reapp-ui/views/View';
import BackButton from 'reapp-ui/components/buttons/BackButton';
import { Container } from 'reapp-ui/components/Grid';

export default StaticView({
  statics: {
    title: [BackButton, 'Dotted View List']
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