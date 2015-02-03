import 'reapp-ui';
import 'reapp-platform';

import Router from 'reapp-routes/react-router';
import Routes from './routes';

// demo purposes
import 'reapp-ui/lib/desktopTouch';

// import our theme
require('./theme/theme');

// run the app
export default Router(Routes);