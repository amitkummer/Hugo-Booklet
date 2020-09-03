const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = (env) => {
  const isProduction = env && env.prod;
  const isHotReload = env && env.hot && !isProduction;
  return {
    mode: isProduction ? 'production' : 'development',
    output: {
      filename: 'theme/static/[name].js'
    },
    module: {
      rules: [
        {
          // Process SCSS and extract a CSS file.
          test: /\.(?:css|scss|sass)$/iu,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          // Load fonts.
          test: /\.woff2?$/u,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'theme/static/fonts',
            publicPath: './fonts/'
          }
        }
      ]
    },
    plugins: [
      // Copies files to the dist/theme folder.
      new CopyPlugin({
        patterns: [
          !isHotReload && { from: 'layouts', to: 'theme/layouts' },
          { from: 'public', to: 'theme' }
        ].filter(Boolean)
      }),
      // Extracts a CSS file.
      new MiniCssExtractPlugin({
        filename: 'theme/static/[name].css'
      }),
      // Lint during build.
      new ESLintPlugin({
        files: ['src/*.js', '*.js']
      }),
      new StylelintPlugin({
        syntax: 'scss'
      })
    ]
  };
};
