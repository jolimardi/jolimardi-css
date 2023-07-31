const path = require('path');

// Configuration pour le CSS normal
const normalConfig = {
    entry: './jolimardi.css',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'jolimardi.css',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
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
};

// Configuration pour le CSS scopé
const scopedConfig = {
    entry: './jolimardi.css',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'jolimardi-scoped.css',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
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
};

// Exportez les deux configurations
module.exports = [normalConfig, scopedConfig];
