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

ls compontent-lib/dist
cd component-lib/dist
npm version ${update_type} --no-git-tag
#npm publish

cd ..
git commit -a -m ":airplane: Updating styleguide version type: ${update_type}"

git clone "${DIR}/styleguide" "${DIR}/updated-version"

echo -e "${GREEN}${CHECK} Package version updated"