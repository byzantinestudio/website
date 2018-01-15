/////////////
// Compile //
/////////////

import gulp from 'gulp';

gulp.task('build',
  gulp.series('update-template-id', 'move-files')
);
