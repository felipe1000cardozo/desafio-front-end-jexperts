import React from "react";

import UserList from "./components/UserList";
import NewUser from "./components/NewUser";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import GlobalStyle from "./styles/global";
import { Main } from "./styles/appStyle";

import { store, persistor } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Main className="container-fluid">
          <NewUser />
          <UserList />
        </Main>
      </PersistGate>
    </Provider>
  );
}

export default App;
