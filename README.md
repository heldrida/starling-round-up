
Starling: Round-up
==================

A "round-up" feature for Starling customers using the public developer api.

For a customer, take all the transactions in a given week and round them up to the
nearest pound. For example with spending of £4.35, £5.20 and £0.87, the round-up
would be £1.58. This amount should then be transferred into a savings goal, helping the
customer save for future adventures.

Public API endpoints to use:
1. Accounts - To retrieve accounts for the customer
2. Transaction feed - To retrieve transactions for the customer
3. Savings Goals - Create a savings goals and transfer money to savings goals

Solution provided by Helder @ www.punkbit.com

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so
the following common scripts are available,

Assuming you have node and your favourite package manager installed, run your package manager install:

### `yarn install`

Before proceeding you'll need to create a `.env` file in the root directory and set your ACCESS_TOKEN
as follows:

### ACCESS_TOKEN='xxxxxxxxxxxxx'

Start by running the local proxy server:

### `yarn api`

The application:

### `yarn start`

To run tests:

### `yarn test`

To Build:

### `yarn build`
