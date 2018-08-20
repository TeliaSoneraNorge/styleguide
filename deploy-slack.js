import fs from 'fs';
import gitUsername from 'git-user-name';
import { postMessageToSlack } from './src/server/slack';

function postWebsiteDeployMessageToSlack() {
    return Promise.resolve(gitUsername()).then((gitUsername) => {
        const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
        const slackMessage = `Styleguide website: *${gitUsername}* triggered a deploy of *v${packageJson.version}* to *prod*. Should be live in 1 minute.`;
        postMessageToSlack('#styleguide', slackMessage);
    });
}

function postComponentLibDeployMessageToSlack() {
    return Promise.resolve(gitUsername()).then((gitUsername) => {
        const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
        const slackMessage = `Styleguide component-lib: *${gitUsername}* triggered a deploy of *v${packageJson.version}* to *NPM*.`;
        postMessageToSlack('#styleguide', slackMessage);
    });
}

const componentBeingDeployed = process.argv[2] || 'website'; // Should be 'component-lib' or 'website';

if (componentBeingDeployed === 'website') {
    postWebsiteDeployMessageToSlack();
} else if (componentBeingDeployed === 'component-lib') {
    postComponentLibDeployMessageToSlack();
}