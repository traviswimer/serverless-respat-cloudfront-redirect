const redirectCloudfront = require('./redirectCloudfront');

describe('redirectCloudfront()', () => {
	test('generates distribution', () => {
		expect(redirectCloudfront({
			prefix: "ThePrefix",
			pattern_name: "ThePatternName",
			redirect_from: "TheRedirectFrom",
			region: "TheRegion",
			acm_certificate_arn: "TheCertArn"
		})).toMatchSnapshot();
	});
});
