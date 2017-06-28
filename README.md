# Deploy

## Heroku

- Install the heroku CLI as a global dependency: `npm install -g heroku-cli`
- Make sure your heroku account has access to the styleguide heroku app
- Add a remote for the heroku app: `heroku git:remote -a telia-styleguide -r heroku`
- Now just push to the new remote: `git push heroku master`
