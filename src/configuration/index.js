import ApolloClient, { HttpLink } from 'apollo-client-preset'

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://api.graph.cool/simple/v1/cj9bh8cb343kx01631oiraj3o'
    }),
});

export {
    client,
}