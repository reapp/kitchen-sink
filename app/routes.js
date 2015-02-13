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
        route('view-lists'),
        route('dotted-view-lists'),
        route('view-frosted'),
        route('grids'),
        route('forms'),
        route('mailbox'),
        route('photos')
      )
    )
  );