import React from 'react';
// import Images from '../../assets/data/images';
import Viewer from '../components/viewer/Viewer';
import View from 'reapp-ui/views/View';
import TitleBar from 'reapp-ui/components/TitleBar';

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