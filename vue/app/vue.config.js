const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  outputDir: 'dist',
  assetsDir: './',
  publicPath: './',
  transpileDependencies: true,
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
  lintOnSave: false,
});
