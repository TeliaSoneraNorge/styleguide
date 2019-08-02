set -ueo pipefail

DIR="${PWD}"
export GREEN='\033[1;32m'
export NC='\033[0m'
export CHECK="√"

cd styleguide/component-lib
export NPM_TOKEN=${npm_token}
ls /root/
touch ~/.profile
source ~/.profile
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> .npmrc
echo -e "${GREEN}${CHECK} Registered npm token ${NC}"

npm run build && npm publish dist

echo -e "${GREEN}${CHECK} Latest version deployed to npm${NC}"