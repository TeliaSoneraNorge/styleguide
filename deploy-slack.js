import gitUsername from 'git-user-name';
import { postMessageToSlack } from './src/server/slack';

function getGitUsername() {
    return Promise.resolve(gitUsername());
}

function postDeployMessageToSlack(slackChannel, options = {}) {
    return getGitUsername()
        .then((gitUsername) => {
            const slackMessage = `Telia Styleguide: *${gitUsername}* triggered a deploy to *${options.environment}*. Should be live in 1 minute.`;
            postMessageToSlack(slackChannel, slackMessage);
        });
}

postDeployMessageToSlack('#albatross-dev', { environment: 'prod' });