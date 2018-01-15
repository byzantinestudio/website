//////////////////////////
// Updating Template ID //
//////////////////////////

import gulp from 'gulp';
import config from '../config';
import rename from "gulp-rename";
import zip from "gulp-zip";

gulp.task('move-files', () => {
  return gulp.src(config.files.filtered, {base: './'})
    .pipe(zip('leadpages-template.zip'))
    .pipe(gulp.dest(config.folders.build));
});
