const path = require('path');

const config = {
    entry:  ['babel-polyfill','./src/index.js'],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: 'build',
    },

    devtool: 'inline-source-map',

    devServer: {
        inline: true,
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: true,
        disableHostCheck: true,
        contentBase: 'public',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                  test: /\.less$/,
                  loaders: ["style-loader", "css-loader", "less-loader"]
                }, {
                  test: /\.css$/,
                  loaders: ["style-loader", "css-loader"]
            }
        ],
    },
};

module.exports = config;
