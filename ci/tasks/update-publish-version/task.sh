set -ueo pipefail

DIR="${PWD}"
export GREEN='\033[1;32m'
export NC='\033[0m'
export CHECK="√"

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

cd ..
git commit -a -m ":airplane: Updating styleguide version type: ${update_type}"

git clone "${DIR}/styleguide" "${DIR}/updated-version"

echo -e "${GREEN}${CHECK} Package version updated${NC}"

# Authenticate npm styleguide
export NPM_TOKEN=${npm_token}
source ~/.profile
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> .npmrc

cd component-lib && npm run build && npm publish dist

echo -e "${GREEN}${CHECK} Latest version deployed${NC}"