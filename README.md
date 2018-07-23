# serverless-respat-cloudfront-redirect
> Resource pattern to redirect requests at a certain domain

## Usage

This package is intended for use with the **serverless-respat plugin**. ([install/usage info](https://github.com/traviswimer/serverless-respat)).

Install:

`npm install --save-dev serverless-respat-cloudfront-redirect`

Add patterns to the "custom" object in your serverless config file:

```javascript
"custom": {
	"serverless-respat": {
		prefix: "${self:service}-${opt:stage}",
		patterns: [
			{
				pattern_function: require("serverless-respat-cloudfront-redirect"),
				config: {
					redirect_from: 'www.YOUR_DOMAIN',
					redirect_to: 'YOUR_DOMAIN',
					region: '${self:provider.region}',
					acm_certificate_arn: 'CERTIFICATE_ARN'
				}
			}
		]
	}
}
```

**You will need to setup Route53 (or other DNS service) to point to the Cloudfront resources created**

## Config options
**pattern_name** - (string) A pattern name included in resource names. *DEFAULT: "CloudfrontRedirect"*

redirect_from: 'www.YOUR_DOMAIN',
redirect_to: 'YOUR_DOMAIN',
region: '${self:provider.region}',
acm_certificate_arn: 'CERTIFICATE_ARN'

**redirect_from** - (string) The domain that you want to redirect to another domain.

**redirect_to** - (string) The domain that you want to redirect to.

**region** - (string) The AWS region.

**acm_certificate_arn** - (string) The ARN of the ACM certificate to use for HTTPS.
