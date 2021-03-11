const {src, dest, parallel, series, watch} = require('gulp');
const bSync                                = require('browser-sync').create();
const concat                               = require('gulp-concat');
const uglify                               = require('gulp-uglify-es').default;
const sass                                 = require('gulp-sass');
const autoprefixer                         = require('gulp-autoprefixer');
const cleanCss                             = require('gulp-clean-css');
const imagemin                             = require('gulp-imagemin');
const newer                                = require('gulp-newer');
const del                                  = require('del');

function browsersync() {
    bSync.init({
        server: { baseDir: 'app/'},
        notify: false,
    });
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/slick-carousel/slick/slick.min.js',
        'app/js/src/**/*.js'
    ])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(bSync.stream());
}

function styles() {
    return src('app/sass/main.sass')
    .pipe(sass())
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
    .pipe(cleanCss(( { level: {1: { specialComments: 0 } } } )))
    .pipe(dest('app/styles/'))
    .pipe(bSync.stream());
}

function images() {
    return src('app/img/src/**/*')
    .pipe(newer('app/img'))
    .pipe(imagemin())
    .pipe(dest('app/img'));
}

function copy() {
    return src([
        'app/styles/**/*.css',
        'app/styles/fonts/**/*',
        'app/js/**/*.min.js',
        'app/img/*',
        'app/*.html',
        'app/src/**/*'
    ], { base: 'app' })
    .pipe(dest('dist'));
}

function cleardist() {
    return del('dist/**/*', { force: true });
}

function startwatch() {
    watch('app/sass/**/*.sass', styles);
    watch('app/js/src/**/*.js', scripts);
    watch('app/*.html').on('change', bSync.reload);
    watch('app/img/src/**/*', images);
}

exports.browsersync = browsersync;
exports.scripts     = scripts;
exports.styles      = styles;
exports.images      = images;
exports.build       = series(cleardist, styles, scripts, images, copy)
exports.default     = parallel(styles, scripts, browsersync, startwatch);