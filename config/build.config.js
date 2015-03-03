module.exports = {
  entry: './app/app.js',
  devtool: 'none',
  target: 'web',
  env: 'production',
  platform: 'web',
  linkModules: true,
  debug: true,
  minify: true,
  separateStylesheet: true
};