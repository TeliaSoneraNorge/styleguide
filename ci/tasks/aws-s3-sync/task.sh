#!/bin/sh

set -o errexit
set -o pipefail
set -o nounset
#set -o xtrace

export GREEN='\033[1;32m'
export NC='\033[0m'
export CHECK="√"

cd styleguide
echo "BUCKET: ${destination}"

aws s3 rm ${destination} --recursive
aws s3 sync ${source} ${destination}
echo -e "${GREEN}${CHECK} Packages deployed from ${soruce} to ${destination} ${NC}"