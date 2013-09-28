Package.describe({
  summary: "Provides Bootstrap 3.0 complete with LESS files. For use with Meteor Belt applications"
});

Package.on_use(function (api, where) {
  api.use('deps', 'client');
  api.use('jquery', 'client');

  api.add_files([
    // 'fonts/glyphiconshalflings-regular.eot',
    // 'fonts/glyphiconshalflings-regular.otf',
    // 'fonts/glyphiconshalflings-regular.svg',
    // 'fonts/glyphiconshalflings-regular.ttf',
    // 'fonts/glyphiconshalflings-regular.woff',

    'js/affix.js',
    'js/alert.js',
    'js/button.js',
    'js/carousel.js',
    'js/collapse.js',
    'js/dropdown.js',
    'js/modal.js',
    'js/scrollspy.js',
    'js/tab.js',
    'js/tooltip.js',
    'js/popover.js',
    'js/transition.js'
  ], 'client');
});
