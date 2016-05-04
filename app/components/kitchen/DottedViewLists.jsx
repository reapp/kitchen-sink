import React from 'react';
import BackButtonStatic from '../shared/BackButton';
import BackButton from 'reapp-ui/components/buttons/BackButton';
import Button from 'reapp-ui/components/Button';
import DottedViewList from 'reapp-ui/views/DottedViewList';
import View from 'reapp-ui/views/View';

var OuterView = React.createClass({
  render() {
    var { disableParentViewList, ...props } = this.props;

    return (
      <View {...props}>
        <InnerView disableParentViewList={disableParentViewList} />
      </View>
    );
  }
});

var InnerView = React.createClass({
  getInitialState() {
    return { step: 0 };
  },

  render() {
    return (
      <DottedViewList
        scrollToStep={this.state.step}
        onViewEntered={i => this.props.disableParentViewList(i > 0)}>
        <View title={[BackButtonStatic,'One']}>
          <p>
            First
          </p>

          <Button onTap={() => this.setState({ step: 2 })}>
            Go to third step
          </Button>
        </View>

        <View title={[
          <Button chromeless onTap={() => this.setState({ step: 0 })}>One</Button>,
          'Two'
        ]}>
          <p>
            Second
          </p>
        </View>

        <View title={[
          <Button chromeless onTap={() => this.setState({ step: 1 })}>Two</Button>,
          'Three'
        ]}>
          <p>
            Third
          </p>
        </View>

        <View title={[
          <Button chromeless onTap={() => this.setState({ step: 2 })}>Three</Button>,
          'Four'
        ]}>
          <p>
            Fourth
          </p>
        </View>
      </DottedViewList>
    );
  }
});

export default OuterView;