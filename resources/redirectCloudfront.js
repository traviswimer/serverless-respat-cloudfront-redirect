module.exports = function redirectCloudfront({pattern_name, redirect_from, region, acm_certificate_arn}) {
	let origin_id = `${pattern_name}CloudfrontRedirectBucketOrigin`;

	return {
		"Type": "AWS::CloudFront::Distribution",
		DependsOn: [`${pattern_name}RedirectBucket`],
		"Properties": {
			"DistributionConfig": {
				"Aliases": [redirect_from],
				"Comment": `Cloudfront Distribution pointing to '${redirect_from}' S3 redirect bucket`,
				"DefaultCacheBehavior": {
					"AllowedMethods": [
						"GET", "HEAD"
					],
					"Compress": true,
					"TargetOriginId": origin_id,
					"ForwardedValues": {
						"QueryString": true,
						"Cookies": {
							"Forward": "all"
						}
					},
					"ViewerProtocolPolicy": "redirect-to-https"
				},
				"Enabled": true,
				"HttpVersion": "http2",
				"IPV6Enabled": true,
				"Origins": [
					{
						"DomainName": {
							"Fn::Join": [
								"",
								[
									redirect_from,
									`.s3-website-${region}.amazonaws.com`
								]
							]
						},
						"Id": origin_id,
						"CustomOriginConfig": {
							"HTTPPort": "80",
							"HTTPSPort": "443",
							"OriginProtocolPolicy": "http-only"
						}
					}
				],
				"PriceClass": "PriceClass_100",
				"ViewerCertificate": {
					"AcmCertificateArn": acm_certificate_arn,
					"SslSupportMethod": "sni-only"
				}
			}
		}
	};
};
