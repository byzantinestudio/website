////////////
// Config //
////////////

import browserSync from 'browser-sync';

const config = {
  files: {
    js: [
      './js/functions.js',
      './js/app.js'
    ],
    jsEntry: './js/app.js',
    css: './css/**/*.scss',
    cssEntry: './css/app.scss',
    html: './**/*.html',
    all: './**/*',
    filtered: [
      './fonts/**',
      './img/**',
      './meta/**',
      './js/slick.min.js',
      './js/bootstrap.min.js',
      './js/jquery-1.9.1.min.js',
      './js/html5shiv.js',
      './js/app.min.js',
      './js/jquery.browser.min.js',
      './js/modernizr.min.js',
      './js/xmlToJSON.min.js',
      './js/es6-promise.auto.min.js',
      './js/moment.min.js',
      './js/moment-timezone.min.js',
      './js/jquery.countdown.min.js',
      './css/slick.min.css',
      './css/bootstrap.min.css',
      './css/animate.min.css',
      './css/css.min.css',
      './index.html'
    ],
    meta: './meta/template.json'
  },
  folders: {
    css: './dist',
    js: './dist',
    build: './build',
    meta: './meta'
  },
  names: {
    jsVendor: 'vendor.min.js',
    js: 'app.min.js',
    css: 'css.min.css'
  },
  libs: [],
  bs: browserSync.create(),
  serverName: "byzantine-site.dev"
};

export default config;
