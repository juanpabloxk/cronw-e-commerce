# CROWN Clothes e-commerce app made with ReactJS

## Heroku configuration

Add the heroku remote: 

```bash
heroku git:remote -a crown-e-commerce
```

Remove the mars builpack:

```bash
heroku buildpacks:remove https://github.com/mars/create-react-app-buildpack.git
```

Set the Stripe key to heroku environment variables

```bash
heroku config:set STRIPE_SECRET_KEY=your_stripe_key_without_quotes
```
