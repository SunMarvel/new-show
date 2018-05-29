import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css', () => {
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('server/public')) //把文件原封不动的copy到server/public目录下

})