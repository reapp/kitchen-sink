import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import CardList from 'reapp-ui/components/CardList';
import Card from 'reapp-ui/components/Card';
import { Container, Block } from 'reapp-ui/components/Grid';
import BackButton from 'components/shared/BackButton';
import Title from 'reapp-ui/components/Title';

export default StaticView({
  statics: {
    title: [BackButton, 'Cards']
  },

  render() {
    return (
      <div {...this.props}>
        <CardList>
          <Card title="What">Lorem ipsum dolor sit amet</Card>
          <Card title="What">Lorem ipsum dolor sit amet</Card>
          <Card title="What">Lorem ipsum dolor sit amet</Card>
          <Card title="What">Lorem ipsum dolor sit amet</Card>
        </CardList>
      </div>
    );
  }
});