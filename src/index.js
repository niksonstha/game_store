import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProvider } from "./components/Context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
