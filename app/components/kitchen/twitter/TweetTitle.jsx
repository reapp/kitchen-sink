import React from 'react';

export default React.createClass({
  styles: {
    title: {
      flexFlow: 'row'
    },

    name: {
      fontWeight: 'bold'
    },

    handle: {
      color: '#999',
      fontWeight: 300,
      fontSize: '14px'
    }
  },

  render() {
    return (
      <div style={this.styles.title}>
        <span style={this.styles.name}>{this.props.name}</span>
        &nbsp;
        <span style={this.styles.handle}>{this.props.handle}</span>
      </div>
    );
  }
});