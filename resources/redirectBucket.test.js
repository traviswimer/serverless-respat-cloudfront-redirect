const redirectBucket = require('./redirectBucket');

describe('redirectBucket()', () => {
	test('generates bucket', () => {
		expect(redirectBucket({
			prefix: "ThePrefix",
			pattern_name: "ThePatternName",
			redirect_from: "TheRedirectFrom",
			redirect_to: "TheRedirectTo"
		})).toMatchSnapshot();
	});
});
