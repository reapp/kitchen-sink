import { route, routes } from 'reapp-routes/react-router/generator';

module.exports = routes(require,
  route('app', '/', { dir: '' },
    route('kitchen', '/',
      route('modals'),
      route('popovers'),
      route('tabs'),
      route('buttons'),
      route('cards'),
      route('panels'),
      route('lists'),
      route('view-lists'),
      route('dotted-view-lists'),
      route('view-frosted'),
      route('grids'),
      route('forms')
    ),
    route('viewer')
  )
);