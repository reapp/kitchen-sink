var React = require('react');

var ImageCard = React.createClass({
  styles: {
    card: function(props) {
      return {
        backgroundImage: `url(${ props.url })`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: props.height,
        width: '100%',
        position: 'absolute',
        left: 0,
        top: 0
      };
    },

    img: function(props) {
      return {
        position: 'relative',
        height: props.height,
        width: '100%'
      };
    }
  },

  render() {
    return (
      <div style={this.styles.card(this.props)}>
        <div style={this.styles.img(this.props)}></div>
      </div>
    );
  }
});

module.exports = ImageCard;