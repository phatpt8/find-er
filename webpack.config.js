const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const env = process.env.NODE_ENV || 'development';
const publicPath = process.env.PUBLIC_PATH || "/";
const isDev = env !== 'production';
const distPath = path.resolve(__dirname, 'dist');
const sourcePath = path.resolve(__dirname, 'src');
const indexPath = sourcePath + '/index';

function getEntries(entries) {
    return env === 'production' ? entries : entries.concat([
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server'
    ]);
}

function prodPlugins(commonPlugins) {
    return isDev ? commonPlugins : commonPlugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            comments: false,
            beautify: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ])
}

module.exports = {
    stats: {
        colors: true,
        reasons: true
    },
    entry: isDev ? getEntries([indexPath]) : indexPath,
    output: {
        path: distPath,
        filename: '[name].[hash].js',
        publicPath: publicPath
    },
    resolve: {
        modules: [
            './src',
            'node_modules',
        ],
        alias: {
            main: 'src',
            components: sourcePath + '/components',
            actions: sourcePath + '/actions'
        },
        extensions: ['.js', '.jsx', '.css', '.less', '.svg', '.html', '.ico']
    },
    devtool: isDev ? 'eval-source-map' : 'source-map',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: ['transform-runtime', 'transform-decorators-legacy']
                }
            }]
        }, {
            test: /\.(less|css)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [ require('autoprefixer')({
                                browsers: [ 'last 4 version' ]
                            }) ]
                        }
                    }
                ]
            })
        }, {
            test: /\.svg$/,
            use: 'svg-url-loader'
        }, {
            test: /\.(jpeg|jpg|png|gif)$/,
            loader: 'file-loader',
            options: {
                // hash: 'sha512',
                // digest: 'hex',
                name: 'images/[name].[ext]'
            },
        },{
            test: /\.(mp4)$/,
            loader: 'file-loader',
            options: {
                name: 'videos/[name].[ext]'
            },
        },
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: prodPlugins([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env)
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.ejs',
            filename: './index.html'
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new ProgressBarPlugin()
        // ,
        // new BundleAnalyzerPlugin()
    ])
};
