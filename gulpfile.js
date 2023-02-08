import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import pug from 'gulp-pug';
import browser from 'browser-sync';


 const gulpPug = () => {
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

const copy = (done) => {
  gulp.src([
  'src/fonts/*.{ttf}',
  ], {
  base: 'src'
  })
  .pipe(gulp.dest('build'))
  done();
  }

  const copyImages = () => {
    return gulp.src('src/img/**/*.{jpg,svg}')
    .pipe(gulp.dest('build/img'))
    }

const server = (done) => {
  return browser.init({
  server: {
  baseDir: 'build'
  },
  cors: true,
  notify: false,
  ui: false,
  }),
  done();
}

export const build = gulp.series(
  copy,
  gulp.parallel(
  styles,
  gulpPug,
  ),
  );

 const watcher = () => {
  gulp.watch('src/sass/**/*.scss', gulp.series(styles));
  gulp.watch('src/*.pug', gulp.series(gulpPug));
  }

export default gulp.series(
  copy,
  copyImages,
  server,
  watcher);