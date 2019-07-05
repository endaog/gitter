const gulp = require('gulp');
const sonarqubeScanner = require('sonarqube-scanner');
 
gulp.task('sonar', function(callback) {
  sonarqubeScanner({
    serverUrl : "https://sonar.merck.com",
    token : "fc19fff50c8cc3efba332689e4ed79ca352a278a"
  }, callback);
});
