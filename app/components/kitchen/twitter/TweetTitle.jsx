import React from 'react';

export default React.createClass({
  render() {
    return (
      <div style={styles.title}>
        <div style={styles.name}>{this.props.name}</div>
        &nbsp;
        <div style={styles.handle}>{this.props.handle}</div>
      </div>
    );
  }
});

const styles = {
  title: {
    flexFlow: 'row',
    WebkitFlexFlow: 'row'
  },

  name: {
    fontWeight: 'bold'
  },

  handle: {
    color: '#999',
    fontWeight: 300,
    fontSize: '14px'
  }
}