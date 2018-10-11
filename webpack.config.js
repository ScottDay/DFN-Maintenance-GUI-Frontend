const webpackConfigs = require('./config');

/* eslint-disable no-param-reassign */
module.exports = (env) => {
	// If there was no configuration given, assume default.
	if (env == null) {
		env = {};
	}

	const defaultConfig = 'dev';

	env.config = (env.config != null) ? env.config : defaultConfig;

	// Return a new instance of the webpack config
	// or the default one if it cannot be found.
	let LoadedConfig = defaultConfig;

	if (webpackConfigs[env.config] !== undefined) {
		LoadedConfig = webpackConfigs[env.config];
	} else {
		// eslint-disable-next-line no-console
		console.warn(`
	  		Provided environment "${env.config}" was not found.
	  		Please use one of the following ones: ${Object.keys(webpackConfigs).join(' ')}
		`);

		LoadedConfig = webpackConfigs[defaultConfig];
	}

	const loadedInstance = new LoadedConfig(env);

	// Set the global environment
	process.env.NODE_ENV = loadedInstance.env;

	return loadedInstance.config;
};
/* eslint-enable no-param-reassign */
