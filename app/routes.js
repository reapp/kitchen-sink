module.exports = ({ routes, route }) =>
  routes(require,
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
        route('photos'),

        // views
        route('view-lists'),
        route('dotted-view-lists'),
        route('view-frosted'),

        // demos
        route('mailbox'),
        route('twitter')
      )
    )
  );