module.exports = {
	name: "CloudfrontRedirect",
	resources: {
		RedirectBucket: require('./resources/redirectBucket'),
		RedirectCloudfront: require('./resources/redirectCloudfront')
	},
	default_config: {},
	required_props: [
		"redirect_from",
		"redirect_to",
		"region",
		"acm_certificate_arn"
	]
};
