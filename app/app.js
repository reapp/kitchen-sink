import Run from 'reapp-routes/react-router/run';
import Reapp from 'reapp-platform';
import Routes from './routes';

// import our theme
require('./theme/theme');

// setup some stuff
Reapp.initTouch();

// run the app
if (Reapp.Env.CLIENT)
  Run.renderAsync(Routes);
else
  Run.renderSync(Routes);