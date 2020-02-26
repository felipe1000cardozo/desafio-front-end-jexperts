import React, { useState } from "react";

import UserList from "./components/UserList";
import NewUser from "./components/NewUser";
import { Provider } from "react-redux";

import store from "./store";

function App() {
  let users = [
    { name: "Jon Doe", email: "jon@test.com", phone: "(99)9999-9999" },
    { name: "Jon Doe", email: "jon@test.com", phone: "(99)9999-9999" },
    { name: "Jon Doe", email: "jon@test.com", phone: "(99)9999-9999" }
  ];

  return (
    <Provider store={store}>
      <main className="container-fluid">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Usuarios</span>
          <NewUser />
        </nav>
        <UserList users={users} />
      </main>
    </Provider>
  );
}

export default App;
