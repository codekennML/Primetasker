import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/app.css";
import { Provider } from "react-redux";
import { store } from "./app/Store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { persistStore } from "redux-persist";
// import ModalProvider from "./features/modal/ModalProvide";
let persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<p>Loading Store... </p>}>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
