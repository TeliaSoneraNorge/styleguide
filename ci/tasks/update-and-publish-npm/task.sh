set -ueo pipefail

DIR="${PWD}"
export GREEN='\033[1;32m'
export NC='\033[0m'
export CHECK="√"

mv cache/node_modules styleguide/component-lib

echo "Installing git"
apk add --update --no-cache git
git config --global user.email "concourse-ci@localhost"
git config --global user.name "concourse-ci"

echo "Update styleguide version:"

cd styleguide
npm version ${update_type} --no-git-tag

echo "Update component lib version:"

cd component-lib
npm version ${update_type} --no-git-tag

npm run build:icons
npm run build

export NPM_TOKEN=${npm_token}
touch ~/.profile
source ~/.profile
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> .npmrc
echo -e "${GREEN}${CHECK} Registered npm token ${NC}"

ls dist
npm publish dist

echo -e "${GREEN}${CHECK} Latest version deployed to npm${NC}"

cd ..
git commit -a -m ":airplane: Updating styleguide version type: ${update_type}"
git clone "${DIR}/styleguide" "${DIR}/updated-version"
