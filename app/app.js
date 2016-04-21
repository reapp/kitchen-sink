import 'reapp-ui';
import 'reapp-ui/lib/desktopTouch'; // demo
import './theme';
import { router, route } from 'reapp-kit';

router(require,
  route('app', '/', { dir: '' },
    route('kitchen', '/',
      route('modals'),
      route('popovers'),
      route('bars'),
      route('buttons'),
      route('cards'),
      route('drawers'),
      route('lists'),
      route('grids'),
      route('forms'),
      route('gallery'),

      // views
      route('view-lists'),
      route('dotted-view-lists'),

      // demos
      route('mailbox'),
      route('twitter',
        route('tweetView')
      )
    )
  )
);
