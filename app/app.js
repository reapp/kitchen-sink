import 'reapp-ui';
import 'reapp-ui/lib/desktopTouch'; // demo
import React from 'react';

import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App.jsx';
import Kitchen from './components/Kitchen.jsx';
import Bars from './components/kitchen/Bars.jsx';
import Buttons from './components/kitchen/Buttons.jsx';
import Cards from './components/kitchen/Cards.jsx';
import DottedViewLists from './components/kitchen/DottedViewLists.jsx';
import Drawers from './components/kitchen/Drawers.jsx';
import Forms from './components/kitchen/Forms.jsx';
import Gallery from './components/kitchen/Gallery.jsx';
import Grids from './components/kitchen/Grids.jsx';
import Lists from './components/kitchen/Lists.jsx';
import Mailbox from './components/kitchen/Mailbox.jsx';
import Modals from './components/kitchen/Modals.jsx';
import Popovers from './components/kitchen/Popovers.jsx';
import Twitter from './components/kitchen/Twitter.jsx';
import TweetView from './components/kitchen/twitter/TweetView.jsx';
import ViewLists from './components/kitchen/ViewLists.jsx';

import Router from 'reapp-routes/react-router';
import Routes from './routes';

const appRoutes = (
  <Route component={App} path="/">
    <IndexRoute component={Kitchen} />
      <Route component={Kitchen} path="/">
        <Route component={Modals} path="/modals" />
        <Route component={Popovers} path="/popovers" />
        <Route component={Bars} path="/bars" />
        <Route component={Buttons} path="/buttons" />
        <Route component={Cards} path="/cards" />
        <Route component={Drawers} path="/drawers" />
        <Route component={Lists} path="/lists" />
        <Route component={Grids} path="/grids" />
        <Route component={Forms} path="/forms" />
        <Route component={Gallery} path="/gallery" />
        <Route component={ViewLists} path="/view-lists" />
        <Route component={DottedViewLists} path="/dotted-view-lists" />
        <Route component={Mailbox} path="/mailbox" />
        <Route component={Twitter} path="/twitter">
          <Route component={TweetView} path="/tweetView" />
        </Route>
      </Route>
    </Route>
);


Router(appRoutes);
