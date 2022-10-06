resource "aws_cloudfront_origin_access_identity" "docs-s3-access" {
  comment = "Only allow CloudFront to access the S3 Bucket directly"
}

resource "aws_cloudfront_distribution" "docs" {
  enabled = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id = "docs"
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  origin {
    domain_name = aws_s3_bucket.docs.bucket_regional_domain_name
    origin_id = "docs"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.docs-s3-access.cloudfront_access_identity_path
    }
  }

  aliases = ["docs.appgineering.com"]
  price_class = "PriceClass_100" // only NA/EU locations (cheaper)

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = false
    acm_certificate_arn = "arn:aws:acm:us-east-1:396159309775:certificate/52c763e8-0ede-41c7-bcea-aec98f015a4c"
    ssl_support_method = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  ordered_cache_behavior {
    allowed_methods = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods = ["GET", "HEAD"]
    path_pattern = "*"
    target_origin_id = "docs"
    viewer_protocol_policy = "redirect-to-https"

    function_association {
      event_type = "viewer-request"
      function_arn = aws_cloudfront_function.rewrite-default-handler.arn
    }
  }
}

resource "aws_cloudfront_function" "rewrite-default-handler" {
  name = "rewrite-default-handler"
  runtime = "cloudfront-js-1.0"
  publish = true
  code = file("${path.module}/resources/rewrite-default-handler.js")
}
