import https from 'https';
import { path } from 'path';

export function postMessageToSlack(channel, message) {
    var slackChannelLookup = {
        '#albatross-dev': 'T03PATMPV/B75FPT806/CfO1QpLDhLXup5JG0t2LcSc4',
        '#styleguide': 'T03PATMPV/B85RMMS58/2mSdleivsadp0WRlQiSn64Xf'
    };
    return new Promise((resolve, reject) => {
        var req = https.request({
                host: 'hooks.slack.com',
                path: `/services/${slackChannelLookup[channel]}`,
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
                        console.log(`FAILED to post to Slack channel '${channel}'.`);
                        reject(new Error('Unexpected status code ' + res.statusCode + '; body: ' + responseBody));
                    } else {
                        console.log(`Message posted to Slack channel '${channel}'!`);
                        resolve();
                    }
                });
            });

        req.on('error', () => {
            console.log('Failed to post message to slack.');
            reject();
        });

        req.write(JSON.stringify({
            text: message
        }));

        req.end();
    });
}