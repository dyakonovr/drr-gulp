import fileinclude from "gulp-file-include";
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import typograf from "gulp-typograf";
import htmlmin from "gulp-htmlmin";

export const html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(fileinclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(typograf({ locale: ['ru', 'en-US'] }))
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(app.plugins.replace(/@svg\//g, 'img/svg/'))
    .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
    .pipe(
      app.plugins.if(app.isBuild, versionNumber({
        'value': '%DT%',
        'append': {
          'key': '_v',
          'cover': 0,
          'to': ['css', 'js']
        },
        'output': {
          'file': 'gulp/version.json'
        }
      }))
    )
    .pipe(app.plugins.if(app.isBuild, htmlmin({
      collapseWhitespace: true
    })))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}