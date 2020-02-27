import React from "react";

import UserList from "./components/UserList";
import NewUser from "./components/NewUser";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main className="container-fluid">
          <NewUser />
          <UserList />
        </main>
      </PersistGate>
    </Provider>
  );
}

export default App;
