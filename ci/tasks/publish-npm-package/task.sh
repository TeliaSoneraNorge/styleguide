#!/bin/sh

set -o errexit
set -o pipefail
set -o nounset
#set -o xtrace

export GREEN='\033[1;32m'
export NC='\033[0m'
export CHECK="√"

cd styleguide

aws s3 sync ${BUCKET_NAME} s3://${directory}
echo -e "${GREEN}${CHECK} Packages deployed to s3://${BUCKET_NAME} ${NC}"