set -ueo pipefail

echo "Installing git"
apk add --update --no-cache git
git config --global user.email "concourse-ci@localhost"
git config --global user.name "concourse-ci"

echo "Update styleguide version:"

cd styleguide
npm version ${update_type}

echo "Update component lib version:"

cd component-lib
npm version ${update_type}
#npm publish

cd ..
git status
git commit -a -m ":airplane: Updating styleguide version type: ${update_type}"
git status
ls

export GREEN='\033[1;32m'
export NC='\033[0m'
export CHECK="√"

echo -e "${GREEN}${CHECK} Package version updated"