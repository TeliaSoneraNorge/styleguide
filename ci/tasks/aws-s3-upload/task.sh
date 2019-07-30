
#!/bin/sh

set -o errexit
set -o pipefail
set -o nounset
#set -o xtrace

export GREEN='\033[1;32m'
export NC='\033[0m'
export CHECK="√"

cd styleguide
PACKAGE_VERSION=$(cat package.json \
| grep version \
| head -1 \
| awk -F: '{ print $2 }' \
| sed 's/[",]//g' \
| tr -d '[[:space:]]')
echo -e "Version detected:${PACKAGE_VERSION}"

aws s3 sync dist/ s3://${BUCKET_NAME}
echo -e "${GREEN}${CHECK} Packages deployed to s3://${BUCKET_NAME} ${NC}"