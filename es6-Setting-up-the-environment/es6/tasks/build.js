import gulp from 'gulp';
import gulpSequence from 'gulp-sequence'; ////任务之间的关联顺序关系

gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']));