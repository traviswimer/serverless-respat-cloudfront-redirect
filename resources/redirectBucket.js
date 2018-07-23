module.exports = function redirectBucket({pattern_name, redirect_from, redirect_to}) {
	return {
		Type: "AWS::S3::Bucket",
		Properties: {
			BucketName: redirect_from,
			WebsiteConfiguration: {
				RedirectAllRequestsTo: {
					HostName: redirect_to,
					Protocol: 'https'
				}
			}
		}
	};
};
