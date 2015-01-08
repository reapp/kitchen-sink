import UI from 'reapp-ui';
import iOSTheme from 'reapp-ui/themes/ios/all';

UI.addConstants(
  iOSTheme.constants,
  require('./constants')
);

UI.addStyles(
  iOSTheme.styles,
  require('./styles')
);

UI.addAnimations(iOSTheme.animations);