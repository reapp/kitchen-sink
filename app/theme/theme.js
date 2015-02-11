import UI from 'reapp-ui';
import iOS from 'reapp-ui/themes/ios';

import 'reapp-ui/themes/ios/stylesheets';

// we use but override the constants from iOS
UI.addConstants(
  iOS.constants.base,
  require('./constants/base'),
  iOS.constants.components,
  require('./constants/components')
);

UI.addStyles(
  iOS.styles,
  require('./styles')
);

UI.addAnimations(
  iOS.animations
);

module.exports = UI;