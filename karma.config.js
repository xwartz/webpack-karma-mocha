import webpackConfig from './webpack.config'

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      'test/**/*.js'
    ],

    preprocessors: {
      'test/**/*.js': ['webpack', 'sourcemap']
    },

    reporters: ['mocha', 'coverage'],

    webpackServer: {
      noInfo: true
    },

    plugins: [
      'karma-coverage',
      'karma-webpack',
      'karma-mocha',
      // 'karma-chai',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader',
      'karma-mocha-reporter'
    ],

    webpack: webpackConfig,

    port: 9876,

    colors: true,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: true,

    coverageReporter: {
      reporters: [
        { type: 'lcov', dir: 'coverage', subdir: '.' },
        { type: 'text-summary', dir: 'coverage', subdir: '.' }
      ]
    }
  })
}
