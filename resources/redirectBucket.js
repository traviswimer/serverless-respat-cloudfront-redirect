module.exports = function redirectBucket({pattern_name, bucket_name}) {
	return {
		"Type": "AWS::S3::Bucket",
		"Properties": {
			"BucketName": bucket_name,
			AccessControl: "Private"
		}
	};
}
