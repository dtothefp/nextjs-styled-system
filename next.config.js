/* eslint-disable no-param-reassign */
module.exports = {
  assetPrefix: process.env.ASSET_PREFIX ?? '',
  future: {
    webpack5: true,
  },
  webpack: (config, { isServer, dev }) => {
    if (isServer) {
      config.resolve.mainFields = ['module', 'main'];
    }

    if (dev) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@dfp/components': '@dfp/components/src',
      };
    }

    return config;
  },
};
