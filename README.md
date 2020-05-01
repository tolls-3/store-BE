## Project Overview


## API doucmentation

**Link to API deployed to Heroku**



## Getting started

To get this project up and running locally:

1. Clone this repo
1. Run `npm install` to install all of the required dependencies.
1. Install **MongoDB Community Edition** on you local machine. Instructions can be found [here](https://docs.mongodb.com/manual/installation/).
1. Create a db called `shopping_cart`

5. Create a `.env` file in the root of the project with the following environment variables:

```
DB_CONNECTION_TEST="mongodb://localhost/shopping-cart-test"
DB_CONNECTION="mongodb://localhost/shopping-cart"
PORT=4000
JWT_SECRET="<put in your jwt_secret here>"
TWILIO_ACCOUNT_SID=<put in your account_sid here>
TWILIO_AUTH_TOKEN=<put in your auth_token here>
TWILIO_NUMBER="<put in your twilio number here>"
STRIPE_SECRET=<put your stripe secret key here>
SENDGRID_API_KEY=<put api key here>
FROM_EMAIL= testemail@gmail.com
STRIPE_CLIENT_ID=<put your stripe secret client here>
STRIPE_HOLDER=123456789000
```

**To start server locally** 
```bash
npm run server
```

**To apply linting**
```bash
npm run lint
```

