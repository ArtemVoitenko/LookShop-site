var gulp = require('gulp'),//Подключаем Gulp
    sass = require('gulp-sass');//Подключаем Сасс пакеты

gulp.task('sass', function(){
    return gulp.src(['sass/**/*.sass','sass/**/*.scss'])
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))//Преобразуем Sass B Css
    .pipe(gulp.dest('css'))//Выгружаем результат в папку css
});

gulp.task('watch',function(){
    gulp.watch(['sass/**/*.sass','sass/**/*.scss'],['sass']);//Наблюдение за фалами
});
gulp.task('default',['watch']);