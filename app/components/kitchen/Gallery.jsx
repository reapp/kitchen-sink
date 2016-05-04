import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import Gallery from 'reapp-ui/components/Gallery';
import TitleBar from 'reapp-ui/components/TitleBar';
import Button from 'reapp-ui/components/Button';
import Title from 'reapp-ui/components/Title';
import BackButton from 'components/shared/BackButton';

function imageRequire(name) {
  return require('../../../assets/photos/' + name + '.jpg');
}

var Images = ['river', 'sunrise', 'winter', 'yosemite'].map(imageRequire);

module.exports = StaticView({
  statics: {
    title: [BackButton, 'Gallery']
  },

  getInitialState() {
    return { width: 0, height: 0, show: false };
  },

  componentWillMount() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight - 44
    });
  },

  showGallery() {
    this.setState({ show: true });
    this.props.disableParentViewList(true);
  },

  hideGallery() {
    this.setState({ show: false });
    this.props.disableParentViewList(false);
  },

  render() {
    var { width, height, show } = this.state;

    if (!width || !height) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Title>Photos Demo</Title>
        <Button onTap={this.showGallery}>
          Show Gallery
        </Button>

        {show &&
          <Gallery
            onClose={this.hideGallery}
            width={width}
            height={height}
            images={Images}
            touchStartBoundsX={{from:30, to:window.innerWidth}}
          />
        }
      </div>
    );
  }
});