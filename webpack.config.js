const path = require('path')
const webpack = require('webpack')
const glob = require('glob')
const merge = require('webpack-merge')

const parts = require('./webpack.parts')

const root = process.cwd()
const PATHS = {
  app: path.join(root, 'src'),
  build: path.join(root, 'docs', 'demo')
}

const commonConfig = merge([
  {
    entry: {
      app: PATHS.app,
    },
    output: {
      filename: '[name].js',
      path: PATHS.build,
    },
    resolve: {
      mainFields: ['main'],
      extensions: ['.js', '.jsx', '.json'],
      modules: ['node_modules'],
      alias: {
        'react': path.resolve('node_modules', 'react'),
        'redux-form': path.resolve('node_modules', 'redux-form'),
        'brace': path.resolve('node_modules', 'brace'),
        '@material-ui/core': path.resolve('node_modules', '@material-ui/core'),
        '@material-ui/icons': path.resolve('node_modules', '@material-ui/icons'),
      }
    },
  },
  parts.htmlPlugin({
    links: [
      {
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
        rel: 'stylesheet'
      }
    ]
  }),
  parts.loadFonts({
    options: {
      name: '[name].[hash:8].[ext]'
    }
  }),
  parts.loadJavascript({ exclude: /node_modules/ }),
  parts.extractCSSPlugin('development'),
])

const productionConfig = merge([
  {
    mode: 'production',
    performance: {
      hints: 'warning',
      maxEntrypointSize: 1200000,
      maxAssetSize: 1200000
    },
    entry: {
      vendor: ['brace', 'react']
    },

    context: PATHS.app,
    output: {
      chunkFilename: '[name]_[chunkhash:8].bundle.js',
      filename: '[name]_[chunkhash:8].bundle.js',
      path: PATHS.build
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
    ],
  },
  parts.clean(PATHS.build),
  parts.minifyJavascript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true
      },
      safe: true
    }
  }),
  parts.extractCSS({
    rules: [{
      test: /\.css$/,
      use: [
        parts.extractLoader,
        parts.cssLoaderUse({ mode: 'production' }),
      ]
    }],
  }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: '[name].[hash:8].[ext]'
    }
  }),
  parts.optimization(),
  parts.setFreeVariable(
    'process.env.NODE_ENV',
    'production'
  ),
])

const developmentConfig = merge([
  {
    mode: 'development',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
    output: {
      devtoolModuleFilenameTemplate: 'webpack'
    }
  },
  parts.loadSourceMaps(),
  parts.generateSourceMaps({ type: 'inline-module-source-map' }),
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT
  }),
  parts.loadCSS({
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        parts.cssLoaderUse({ mode: 'development' }),
      ]
    }]
  }),
  parts.loadImages()
])

module.exports = (env = {}) => {
  process.env.BABEL_ENV = env

  if (env == 'production')
    return merge(commonConfig, productionConfig)
  else
    return merge(commonConfig, developmentConfig)
}
