
const withPlugins = require("next-compose-plugins");

const commonConfig = {
  poweredByHeader: false,
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig: {},
  webpack: config => {
    return config;
  },
  distDir: ".next"
};
const plugins = [];

module.exports = withPlugins(plugins, commonConfig);
