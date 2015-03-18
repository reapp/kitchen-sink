import 'reapp-ui';
import 'reapp-platform';

// demo
import 'reapp-ui/lib/desktopTouch';

import Router from 'reapp-routes/react-router';
import Routes from './routes';
import theme from 'reapp-ui/themes/ios/theme';

Router(Routes, {
  context: { theme }
});