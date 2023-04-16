# BigCommerce Embedded Checkout example with Nuxt 3

This is an example of how to use the BigCommerce Embedded Checkout with Nuxt 3.
It uses the Netlify serverless functions to handle the BigCommerce API calls.

## Demo

The demo app is available at https://effortless-pastelito-df6116.netlify.app/

## Pre-requisites

To run it, you will need:

- Node.js v16+,
- [BigCommerce store](https://www.bigcommerce.com/),
- [Netlify](https://www.netlify.com/) account,
- [Netlify CLI](https://docs.netlify.com/cli/get-started/).

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Configuration

Environment variables are used to configure the application:

- STORE_HASH - BigCommerce store hash
- AUTH_TOKEN - BigCommerce API token
- CHANNEL_ID - BigCommerce channel ID

## Development Server

Netlify CLI is used to run the development server.

```bash
netlify dev
```

## Production

Thanks to the Netlify serverless functions, the application can be deployed to Netlify and run without any additional configuration.

The command to generate the `dist` folder is:

```bash
yarn generate
```
