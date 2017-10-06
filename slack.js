var gitUsername = require('git-user-name');
var https = require('https');
var path = require('path');

var repositoryPath = path.resolve('./');

function getGitUsername() {
    return Promise.resolve(gitUsername());
}

function postMessageToSlack(slackChannel, options = {}) {
    var slackChannelLookup = {
        '#albatross-dev': 'T03PATMPV/B75FPT806/CfO1QpLDhLXup5JG0t2LcSc4'
    };

    return getGitUsername()
        .then((gitUsername) => {
            return new Promise((resolve, reject) => {
                var req = https.request({
                    host: 'hooks.slack.com',
                    path: `/services/${slackChannelLookup[slackChannel]}`,
                    method: 'POST',
                    headers: { 'content-type': 'application/json' }
                },
                (res) => {
                    var responseBody = '';
                    res.on('data', (chunk) => {
                        responseBody = responseBody + chunk;
                    });
                    res.on('end', () => {
                        if (res.statusCode >= 300) {
                            console.log(`FAILED to post to Slack channel '${slackChannel}'.`);
                            reject(new Error('Unexpected status code ' + res.statusCode + '; body: ' + responseBody));
                        } else {
                            console.log(`Message posted to Slack channel '${slackChannel}'!`);
                            resolve();
                        }
                    });
                });

                req.on('error', () => {
                    console.log('Deploy report to Slack failed');
                    reject();
                });

                req.write(JSON.stringify({
                    username: 'AlbaDeployBot',
                    icon_emoji: ':albatross:',
                    text: `Telia Styleguide: *${gitUsername}* triggered a deploy to *${options.environment}*. Should be live in 1 minute.`
                }));

                req.end();
            });
        });
}

postMessageToSlack('#albatross-dev', { environment: 'prod' });