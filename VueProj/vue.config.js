const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    chainWebpack: config => {
      config
      .plugin('html')
      .tap(args => {
        args[0].title = 'EdLink Ops - Home'
        return args
      })
    },
        // The URL where the .NET Core app will be listening.
    // Specific port depends on whether IISExpress/Kestrel and HTTP/HTTPS are used
    devServer: {
      proxy: 'https://localhost:44364/'
    },
    pwa: {
      iconPaths: {
      favicon32: "public/favicon-32x32.png"
    }
  }
}