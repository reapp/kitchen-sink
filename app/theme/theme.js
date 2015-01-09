import UI from 'reapp-ui';
import iOS from 'reapp-ui/themes/ios';

import 'reapp-ui/themes/ios/stylesheets';

UI.addConstants(
  require('./constants'),
  iOS.constants.components
);

UI.addStyles(
  iOS.styles,
  require('./styles')
);

UI.addAnimations(
  iOS.animations
);