var { Navigation } = require('react-router');

module.exports = {
  mixins: [Navigation],

  componentDidMount() {
    setTimeout(() => {
      if (!this.hasInteracted)
        this.goBack();
    }, 2000);
  }
}