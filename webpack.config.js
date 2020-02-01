{
    "mode": "development",
    "output": {
        "path": __dirname+'/static',
        "filename": "[name].[chunkhash:8].js"
    },
    "module": {
        "rules": [
            {
                "test": /\.vue$/,
                "exclude": /node_modules/,
                "use": "vue-loader"
            },
            {
                "test": /\.pem$/,
                "use": "file-loader"
            }
        ]
    },
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {
        extension: ['*', '.pem']
    },
    devServer: {
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        https: true,
        https: {
          key: fs.readFileSync('/etc/ssl/private/domain.key');
          ca: fs.readFileSync('/etc/ssl/certs/chained.pem');
        }
    }
}
