import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import pug from 'gulp-pug';
// import postcss from 'gulp-postcss';
// import csso from 'postcss-csso';
// import rename from 'gulp-rename';
// import autoprefixer from 'autoprefixer';
// import squoosh from 'gulp-libsquoosh';
// import svgo from 'svgo';
// import svgstore from 'svgstore';
import browser from 'browser-sync';
// import htmlmin from 'gulp-htmlmin';
// import { deleteAsync } from 'del';
// import terser from 'gulp-terser';



export const gulpPug = () => {
  return gulp.src('src/*.pug')
    .pipe(pug({
      pretty:true
    }))
    .pipe(gulp.dest('build'));
}

const styles = () => {
  return gulp.src('src/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}


 const watcher = () => {
  gulp.watch('src/sass/**/*.scss', gulp.series(styles));
  gulp.watch('src/*.pug', gulp.series(gulpPug));
  }

export default gulp.series(
  watcher);