import gulp from 'gulp';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import pug from 'gulp-pug';
// import rename from 'gulp-rename';
import svgstore from 'gulp-svgstore';
import svgo from 'gulp-svgo';
import plumber from 'gulp-plumber';
import browser from 'browser-sync';
import terser from 'gulp-terser';
import connect from "gulp-connect";
import autoprefixer from 'autoprefixer';

gulp.task("connect", function() {
  connect.server({
    root: "app",
    livereload: true
  });
});

const gulpPug = () => {
return gulp.src(['src/*.pug', '!src/_*.pug'])
  .pipe(pug({
    pretty:true
  }))
  .pipe(gulp.dest('public'));
}

const styles = () => {
  return gulp.src('src/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
      ]))
    .pipe(gulp.dest('public/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

const copy = (done) => {
  gulp.src([
  'src/fonts/*.ttf',
  'src/video/*.mp4',
  'src/js/*.js',
  ], {
  base: 'src'
  })
  .pipe(gulp.dest('public'))
  done();
  }

const copyImages = () => {
  return gulp.src('src/img/**/*.{jpg,svg,png}')
  .pipe(gulp.dest('public/img'))
}

const sprite = () => {
  return gulp.src('src/img/icons/*.svg')
  .pipe(svgo())
  .pipe(svgstore())
  // .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('src/img'));
  }

const scripts = () => {
  return gulp.src('src/js/*.js')
  .pipe(terser())
  .pipe(gulp.dest('public/js'));
}


const server = (done) => {
  return browser.init({
  server: {
  baseDir: 'public'
  },
  cors: true,
  notify: false,
  ui: false,
  }),
  done();
}

export const build = gulp.series(
  // clean,
  copy,
  copyImages,
  gulp.parallel(
  sprite,
  styles,
  gulpPug,
  ),
);

const watcher = () => {
  gulp.watch('src/sass/**/*.scss', gulp.series(styles));
  gulp.watch('src/js/*.js', gulp.series(scripts));
  gulp.watch('src/*.pug', gulp.series(gulpPug));
}

export default gulp.series(
  // clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    scripts,
    sprite),
    gulp.series(
      server,
      watcher));