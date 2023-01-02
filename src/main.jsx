import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/app.css";
import { Provider } from "react-redux";
import { store } from "./app/Store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { propertiesApiCalls } from "./features/properties/PropertySlice";
// import { usersApiCalls } from "./features/users/UserApiSlice";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
