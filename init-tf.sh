#!/bin/bash

terraform init -backend-config="address=https://gitlab.com/api/v4/projects/39597583/terraform/state/prod" -backend-config="lock_address=https://gitlab.com/api/v4/projects/39597583/terraform/state/prod/lock" -backend-config="unlock_address=https://gitlab.com/api/v4/projects/39597583/terraform/state/prod/lock" -backend-config="username=<GITLAB_USERNAME>" -backend-config="password=<GITLAB_API_TOKEN>" -backend-config="lock_method=POST" -backend-config="unlock_method=DELETE" -backend-config="retry_wait_min=5"
