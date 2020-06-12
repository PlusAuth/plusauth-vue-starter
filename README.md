# Plusauth Vue Starter Project

This is a very simple Vue project demonstrating basic authentication flows such as register, login and logout. To keep things simple we bootstrapped the project with `vue-cli` and used `oidc-client` for authentication.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [License](#license)

## Prerequisites

Before running the project, you must first follow these steps:

1. Create a Plusauth account and a tenant at https://dashboard.plusauth.com
2. Navigate to `Clients` tab and create a client of type `Single Page Application`.
3. Go to details page of the client that you've just created and set the following fields as:

- Redirect Uris: http://localhost:8080/signin-callback.html, http://localhost:8080/silent-renew.html
- Post Logout Redirect Uris: http://localhost:8080/

Finally write down your Client Id for server configuration

## Getting Started

First we need to configure the server. Rename `.env.example` file as just`.env`.

Then configure the `.env` file using your Client Id and your Plusauth tenant name.

Finally start the server:

        npm start

The example is hosted at http://localhost:3000/

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.

This project was bootstrapped with [Vue CLI](https://cli.vuejs.org/).