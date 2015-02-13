import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import Gallery from 'reapp-ui/components/Gallery';
import TitleBar from 'reapp-ui/components/TitleBar';
import BackButton from 'components/shared/BackButton';

function imageRequire(name) {
  return require('../../../assets/photos/' + name + '.jpg');
}

var Images = ['river', 'sunrise', 'winter', 'yosemite'].map(imageRequire);

module.exports = StaticView({
  statics: {
    title: [BackButton, 'Photos']
  },

  getInitialState() {
    return { width: 0, height: 0 };
  },

  componentWillMount() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight - 44
    });
  },

  render() {
    if (!this.state.width || !this.state.height) {
      return <div>Loading...</div>;
    }

    return (
      <Gallery
        width={this.state.width}
        height={this.state.height}
        images={Images}
        touchStartBoundsX={{from:30, to:window.innerWidth}}
      />
    );
  }
});