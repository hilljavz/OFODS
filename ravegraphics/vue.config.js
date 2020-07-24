module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.ravegraphics.co.zw/public',
            },
        },
    },
};
