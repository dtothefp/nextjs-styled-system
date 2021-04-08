module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // eslint-disable-next-line no-param-reassign
      config.resolve.mainFields = ['module', 'main'];
    }

    return config;
  },
};
