var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

gulp.task('styles',function(){
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'));
});

gulp.task('assets',function(){
  //Para especificar los archivos se usan globs que so como expresiones regulares para apuntar archivos
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'));
})

/*
gulp.task('scripts',function(){
  browserify('./src/index.js')
    .transform(babel)
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'));
});
*/

function compile(watch){
  var bundle = watchify(browserify('./src/index.js',{debug:true}));

  function rebundle(){
    bundle
      .transform(babel)
      .bundle()
      .on('error',function(e){
        console.log(e);
        this.emit('end');
      })
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'));
  }

  if(watch){
    //Recibe el nombre del evento (update-> cada que cambien los archivos de nuestro bundle)
    bundle.on('update' , function(){
      console.log('--> Bundling ...');
      rebundle();
    })
  }

  rebundle();
}

gulp.task('build',function(){
  return compile();
});

gulp.task('watch',function(){
  return compile(true);
});

gulp.task('default',['styles','assets','build']);