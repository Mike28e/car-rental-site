const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: "/"
  // publicPath: process.env.NODE_ENV === "production" ? "/car-rental-site/" : "/",
})