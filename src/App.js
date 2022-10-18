import logo from "./logo.svg";
import "./App.css";
import Users from "./components/Users";
import { useState } from "react";
import { Users } from "../users";
import UsersTable from "./components/UsersTable";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      {/* <Users name={query} /> */}
      <UsersTable data={Users} />
    </div>
  );
}

export default App;
