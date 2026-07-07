import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NextUIProvider } from "@nextui-org/system";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // web routes
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </Provider>
    </ApolloProvider>
  </BrowserRouter>,
);
