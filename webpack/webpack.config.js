const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    plugins: [
        new miniCssExtractPlugin({
            //nome do arquivo que sera gerado a partir dos arquivos css
            filename: "estilo.css"
        })
    ],
    optimization: {
        minimizer: [
            new uglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new optimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                miniCssExtractPlugin.loader, //extrai pra um arquivo externo
                // 'style-loader', //adicionar dentro da dom a tag style
                'css-loader', //intrepetar os imports e urls
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['url-loader']
        }]
    }
}