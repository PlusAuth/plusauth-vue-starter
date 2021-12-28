# PlusAuth Vue Starter Project

This is a very simple Vue project demonstrating basic authentication flows such as register, login and logout. To keep things simple we bootstrapped the project with `vue-cli` and used `oidc-client` for authentication.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [License](#license)

## Prerequisites

Before running the project, you must first follow these steps:

1. Create a PlusAuth account and a tenant at https://dashboard.plusauth.com
2. Navigate to [Clients](https://dashboard.plusauth.com/~clients) tab and create a client of type `Single Page Application`.
3. Go to details page of the client that you've just created and set the following fields as:

- Redirect Uris: http://localhost:8080/callback, http://localhost:8080/silent-renew.html
- Post Logout Redirect Uris: http://localhost:8080/

Write down your Client Id, it will be required in application's configuration.

## Getting Started

First we need to supply required configuration values for the application. Rename `.env.example` file as `.env`.

Then modify the values inside `.env` file using your Client ID and your PlusAuth tenant name.

Finally, start the application with:

```shell
npm start
# or with yarn
yarn start
```

The application is hosted at http://localhost:8080/

> If you are serving your application in a different port from the default one which is `8080`, 
> make sure you have updated your Client's configuration mentioned in the [Prerequisites](#prerequisites) section accordingly.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.

This project was bootstrapped with [Vue CLI](https://cli.vuejs.org/).
