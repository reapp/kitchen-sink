import React from 'react';
import Gallery from 'reapp-ui/components/Gallery';
import View from 'reapp-ui/views/View';
import TitleBar from 'reapp-ui/components/TitleBar';

function imageRequire(name) {
  return require('../../../assets/photos/' + name + '.jpg');
}

var Images = ['river', 'sunrise', 'winter', 'yosemite'].map(imageRequire);

module.exports = React.createClass({
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
        <Gallery
          width={this.state.width}
          height={this.state.height}
          images={Images}
        />
      </View>
    );
  }
});