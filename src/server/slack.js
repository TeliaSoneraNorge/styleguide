import https from 'https';

export function postMessageToSlack(message) {
    const slackWebhookUrl = process.env.SLACK_STYLEGUIDE;
    
    return new Promise((resolve, reject) => {
        const req = https.request({
            host: 'hooks.slack.com',
            path: `/services/${slackWebhookUrl}`,
            method: 'POST',
            headers: { 'content-type': 'application/json' }
        },
        (res) => {
            let responseBody = '';
            res.on('data', (chunk) => {
                responseBody = responseBody + chunk;
            });
            res.on('end', () => {
                if (res.statusCode >= 300) {
                    console.log('FAILED to post to Slack.');
                    reject(new Error('Unexpected status code ' + res.statusCode + '; body: ' + responseBody));
                } else {
                    console.log('Message posted to Slack!');
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