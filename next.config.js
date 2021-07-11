const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log('Iam In Dev Mode');
    return defaultConfig;
  }
  console.log('Iam all phases except development Mode');
  return {
    /* config options for all phases except development here */
    defaultConfig,
  };
};
