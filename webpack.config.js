const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


// Configuration pour le CSS normal
const normalConfig = {
    watch: true,
    entry: './jolimardi.css',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                sourceMap: false,
                                plugins: [
                                    require('postcss-import')(),
                                    require('postcss-custom-properties')(),
                                    require('postcss-nesting')(),
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'jolimardi.css',
        }),
    ],
};

// Configuration pour le CSS scopé
const scopedConfig = {
    watch: true,
    entry: './jolimardi.css',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                sourceMap: false,
                                plugins: [
                                    require('postcss-import')(),
                                    require('postcss-scopify')('.html-preview'),
                                    require('postcss-custom-properties')(),
                                    require('postcss-nesting')(),
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'jolimardi-scoped.css',
        }),
    ],
};

// Exportez les deux configurations
module.exports = [normalConfig, scopedConfig];
