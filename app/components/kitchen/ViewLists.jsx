import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import NestedViewList from 'reapp-ui/views/NestedViewList';
import View from 'reapp-ui/views/View';
import Button from 'reapp-ui/components/Button';
import BackButton from 'components/shared/BackButton';
import { Container } from 'reapp-ui/components/Grid';

export default StaticView({
  render() {
    return (
      <div>
        <NestedViewList>
          <View title={[BackButton, 'One', <a href="#two">Two</a>]}>
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