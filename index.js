const redirectBucket = require('./resources/redirectBucket');
const redirectCloudfront = require('./resources/redirectCloudfront');

module.exports = function serverlessRespatCloudfrontRedirect({config, serverless}) {
	config.pattern_name = config.pattern_name || "CloudfrontRedirect";

	let resources = {
		[`${config.pattern_name}RedirectBucket`]: redirectBucket(config),
		[`${config.pattern_name}RedirectCloudfront`]: redirectCloudfront(config)
	};

	return {
		resources
	};
};
