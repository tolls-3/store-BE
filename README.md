## Project Overview


## API doucmentation

**Link to API deployed to Heroku**
https://devshop-be.herokuapp.com/


## Getting started

To get this project up and running locally:

1. Clone this repo
2. Run `npm install` to install all of the required dependencies.
3. Install **MongoDB Community Edition** on you local machine. Instructions can be found [here](https://docs.mongodb.com/manual/installation/).
4. or use mongo atlas db details by creating one on mongodb then create an instance of mongodb URI

5. Create a `.env` file in the root of the project with the following environment variables:

```
DB_CONNECTION_TEST="mongodb://localhost/shopping-cart-test"
DB_CONNECTION="mongodb://localhost/shopping-cart"
PORT=4000  
JWT_SECRET="<put in your jwt_secret here>"
STRIPE_SECRET=<put your stripe secret key here>
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

