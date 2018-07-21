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

				}
			}
		]
	}
}
```

## Config options
**pattern_name** - (string) A pattern name included in resource names. *DEFAULT: "CloudfrontRedirect"*
