var { Navigation } = require('react-router');
var hasInteracted = require('lib/hasInteracted');

module.exports = {
  mixins: [Navigation],

  componentDidMount() {
    setTimeout(() => {
      if (!hasInteracted())
        this.goBack();
    }, 2000);
  }
}