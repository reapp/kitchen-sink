var { Navigation } = require('react-router');

module.exports = {
  mixins: [Navigation],

  componentDidMount() {
    setTimeout(() => {
      if (this.props.isDemoing && !this.props.hasInteracted)
        this.goBack();
    }, 1600);
  }
}