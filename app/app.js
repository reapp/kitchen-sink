import 'reapp-ui';
import 'reapp-platform';

import React from 'react';
import Router from 'reapp-routes/react-router';
import Routes from './routes';

// demo purposes
import 'reapp-ui/lib/desktopTouch';

// import our theme
let theme = require('reapp-ui/themes/ios/theme');

// run the app
React.withContext({ theme, test: '123' }, () => {
  Router(Routes)
});