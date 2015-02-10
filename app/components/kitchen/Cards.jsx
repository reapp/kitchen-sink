import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import CardList from 'reapp-ui/components/CardList';
import Card from 'reapp-ui/components/Card';
import BackButton from 'components/shared/BackButton';
import Title from 'reapp-ui/components/Title';
import DemoViewMixin from 'mixins/DemoViewMixin';

export default StaticView({
  mixins: [
    DemoViewMixin
  ],

  statics: {
    title: [BackButton, 'Cards']
  },

  render() {
    return (
      <div {...this.props}>
        <Title>Card List</Title>
        <CardList>
          <Card title="What">Lorem ipsum dolor sit amet</Card>
          <Card title="Third">Lorem ipsum dolor sit amet</Card>
          <Card title="Fourth Card">Lorem ipsum dolor sit amet</Card>
        </CardList>

        <Title>No Title</Title>
        <CardList>
          <Card>Lorem ipsum dolor sit amet</Card>
          <Card>Lorem ipsum dolor sit amet</Card>
          <Card>Lorem ipsum dolor sit amet</Card>
        </CardList>
      </div>
    );
  }
});