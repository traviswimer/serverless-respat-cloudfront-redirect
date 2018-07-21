const redirectBucket = require('./resources/redirectBucket');

module.exports = function serverlessRespatCloudfrontRedirect({config, serverless}) {
	let {
		prefix,
		pattern_name = "CloudfrontRedirect",
	} = config;

	let resources = {
		[`${pattern_name}RedirectBucket`]: redirectBucket({prefix, pattern_name, bucket_name})
	};

	return {
		resources
	};
};
