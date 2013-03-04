Package.describe({
  summary: "Bootstrap for Meteor Belt"
});

Package.on_use(function (api, where) {
  api.use('deps', 'client');
  api.use('jquery', 'client');

  api.add_files([
    'bootstrap/fonts/glyphiconshalflings-regular.eot',
    'bootstrap/fonts/glyphiconshalflings-regular.otf',
    'bootstrap/fonts/glyphiconshalflings-regular.svg',
    'bootstrap/fonts/glyphiconshalflings-regular.ttf',
    'bootstrap/fonts/glyphiconshalflings-regular.woff',

    'bootstrap/js/bootstrap-transition.js',
    'bootstrap/js/bootstrap-alert.js',
    'bootstrap/js/bootstrap-modal.js',
    'bootstrap/js/bootstrap-dropdown.js',
    'bootstrap/js/bootstrap-scrollspy.js',
    'bootstrap/js/bootstrap-tab.js',
    'bootstrap/js/bootstrap-tooltip.js',
    'bootstrap/js/bootstrap-popover.js',
    'bootstrap/js/bootstrap-button.js',
    'bootstrap/js/bootstrap-collapse.js',
    'bootstrap/js/bootstrap-carousel.js',
    'bootstrap/js/bootstrap-typeahead.js',
    'bootstrap/js/bootstrap-affix.js'], 'client');
});
