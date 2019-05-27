const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(withSass({
  distDir: '../../dist/functions/next',
  webpack(config, options) {
    return config
  }
}))