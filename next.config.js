module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.mainFields = ['module', 'main'];
    }

    return config;
  },
};
