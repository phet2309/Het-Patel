module.exports = {
    module:
    {
        rules:
        [
            {
                test: /\.(|glb|gltf)$/,
                type: 'asset',
                loader: 'file-loader',
                options: {
                    esModule: false
                }
            },
        ]
    }

}
