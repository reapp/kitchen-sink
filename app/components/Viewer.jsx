var React = require('react');
// var Images = require('../../assets/data/images');
var Viewer = require('../components/viewer/Viewer');
var View = require('reapp-ui/views/View');
var TitleBar = require('reapp-ui/components/TitleBar');

var ViewerPage = React.createClass({
  getInitialState() {
    return { width: 0, height: 0 };
  },

  componentWillMount() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  },

  render() {
    if (!this.state.width || !this.state.height) {
      return <div>Loading...</div>;
    }

    return (
      <View id="ViewerPage">
        <TitleBar>{this.title}</TitleBar>
        <Viewer
          width={this.state.width}
          height={this.state.height}
          images={[]} />
      </View>
    );
  }
});

module.exports = ViewerPage;