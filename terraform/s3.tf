data "aws_s3_bucket" "logging" {
  bucket = "appgineering-prod-logging"
}

resource "aws_s3_bucket" "docs" {
  bucket = "docs.appgineering.com"
}

resource "aws_s3_bucket_website_configuration" "docs" {
  bucket = aws_s3_bucket.docs.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

resource "aws_s3_bucket_policy" "docs" {
  bucket = aws_s3_bucket.docs.bucket
  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::docs.appgineering.com/*",
      "Principal": {
        "AWS": ["${aws_cloudfront_origin_access_identity.docs-s3-access.iam_arn}"]
      }
    }
  ]
}
POLICY
}

resource "aws_s3_bucket_logging" "docs" {
  bucket = aws_s3_bucket.docs.bucket
  target_bucket = data.aws_s3_bucket.logging.id
  target_prefix = "docs/"
}

module "build_files" {
  source = "hashicorp/dir/template"
  base_dir = "../build"
}

resource "aws_s3_bucket_object" "files" {
  for_each = module.build_files.files

  bucket = aws_s3_bucket.docs.bucket
  key = each.key
  source = each.value.source_path
  content = each.value.content
  content_type = each.value.content_type
  etag = each.value.digests.md5
}
