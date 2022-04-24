import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import cookie from "cookie";
const httpLink = createHttpLink({
  uri: "http://localhost:2500/graphql",
});

const authLink = setContext((_, { headers }) => {
  let cookies;
  //Client Side
  if (typeof window !== "undefined") {
    cookies = cookie.parse(document.cookie || "");
  }
  const token = (cookies && cookies.token) || "";
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
