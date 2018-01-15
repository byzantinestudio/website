//////////////////////////
// Updating Template ID //
//////////////////////////

import gulp from 'gulp';
import config from '../config';
import replace from "gulp-replace-task";

gulp.task('update-template-id', () => {
  return gulp.src(config.files.meta)
    .pipe(replace({
      patterns: [
        {
          match: /(LP-TSK-[0-9]{2})/g,
          replacement: function(match) {

            var id  = match.slice(-2);
            var matchWithoutId = match.slice(0, -2);

            id = parseInt(id);
            id = ++id;

            if(id < 10) {
              id = "0" + id;
              id = matchWithoutId + id;

            } else {
              id = matchWithoutId + id;
            }

            return id;
          }
        }
      ],
      usePrefix: false
    }))
    .pipe(gulp.dest(config.folders.meta));
});
