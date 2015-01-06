var Run = require('reapp-routes/react-router/run');
var Reapp = require('reapp-platform');
var Routes = require('./routes');

// import our theme
require('./theme/theme');

// setup some stuff
Reapp.initTouch();

// run the app
if (Reapp.Env.CLIENT)
  Run.renderAsync(Routes);
else
  Run.renderSync(Routes);