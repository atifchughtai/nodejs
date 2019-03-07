import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import "./App.css";
import config from '../../config';


const client = new ApolloClient({
  uri: config.graphQlUrl
});
// let customers = [];

client
  .query({
    query: gql`
      {
        customers {
          id
          firstName
          lastName
          dateOfBirth
        }
      }
    `
  })
  .then(data => customers = data.data.customers)
  .catch(e => console.log(e));

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Customers />
    </div>
  </ApolloProvider>
);


const Customers = () => (
  <Query
    query={gql`
      {
        customers {
          id
          firstName
          lastName
          dateOfBirth
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.customers.map(({ id, lastName, firstName }) => (
        <div key={id}>
          <p>{`${lastName}: ${firstName}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default App;
