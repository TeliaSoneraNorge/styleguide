# Deploy

## Heroku

- Install the heroku CLI. See the [Heroku Website](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) for details
- Make sure your heroku account has access to the styleguide heroku app
- Add a remote for the heroku app: `heroku git:remote -a telia-styleguide -r heroku`
- Now just push to the new remote: `git push heroku master`
