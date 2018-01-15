////////////
// Server //
////////////

import gulp from 'gulp';
import config from '../config';

gulp.task('server', () => {

  config.bs.init({
    server: true
  });

  gulp.watch(config.files.css, { interval: 2000 }, gulp.series('css'));
  gulp.watch(config.files.js, { interval: 2000 }, gulp.series('js'));
  gulp.watch(config.files.html, { interval: 2000 }).on('change', config.bs.reload);

});
