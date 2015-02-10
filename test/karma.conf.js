module.exports = function(config) {
  config.set({
    basepath : '../',

    files : [
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autowatch : true,

    frameworks : ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

    junitReporter : {
      outputFile : 'test_out/unit.xml',
      suite : 'unit'
    }
  });
};
