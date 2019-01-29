## How to install and run the project

This project uses npm. To install and start the GraphQL server run following commands.

```
npm install
npm start
```

Visit [http://localhost:4000/graphql](http://localhost:4000/graphql) and try out following mutation and query.

```graphql
mutation {
  login(email: "jen@barber.com", password: "qwerty") {
    firstName
    lastName
  }
}
```

and

```graphql
query{
  currentUser{
    firstName
    lastName
  }
}
```