var React = require('react');
var StaticView = require('reapp-ui/helpers/StaticView');
var CardList = require('reapp-ui/components/CardList');
var Card = require('reapp-ui/components/Card');
var { Container, Block } = require('reapp-ui/components/Grid');
var BackButton = require('reapp-ui/components/buttons/BackButton');
var Title = require('reapp-ui/components/Title');

module.exports = StaticView({
  statics: {
    title: [<BackButton />, 'Cards']
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