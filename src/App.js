import React from "react";

import UserList from "./components/UserList";

function App() {
  let users = [
    { name: "Jon Doe", email: "jon@test.com", phone: "(99)9999-9999" },
    { name: "Jon Doe", email: "jon@test.com", phone: "(99)9999-9999" },
    { name: "Jon Doe", email: "jon@test.com", phone: "(99)9999-9999" }
  ];

  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default App;
