module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8089', // this configuration needs to correspond to the Spring Boot backends' application.properties server.port
        ws: true,
        changeOrigin: true
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
