const path = require('path')
const apiMocker = require('webpack-api-mocker')

module.exports = {
    devServer: {
        before(app) {
            // path.resolve 引入mock
            apiMocker(app, path.resolve('./mocker/index.js'), {
                proxy: {
                    '/repos/*': 'https://api.github.com/',
                },
                changeHost: true
            })
        }
    }
}
