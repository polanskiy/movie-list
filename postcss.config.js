module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-preset-env')({ //eslint-disable-line
            stage: 1,
        }),
        require('postcss-nested'),
        require('autoprefixer'),
    ],
};
