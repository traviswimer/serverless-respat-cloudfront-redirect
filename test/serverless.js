'use strict';
module.exports = {
	"service": "TEST_" + require('../package.json').name,
	"provider": {
		"name": "aws",
		"runtime": "nodejs8.10"
	},
	"plugins": ["serverless-respat"],
	"custom": {
		"serverless-respat": {
			prefix: "${self:service}",
			patterns: [
				{
					pattern: require("../index"),
					config: {
						"redirect_from": 'redirect-from.domain',
						"redirect_to": 'redirect-to.domain',
						"region": 'us-east-1',
						"acm_certificate_arn": 'not:a:real:arn'
					}
				}
			]
		}
	}
}
