import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import NoteList from "./features/notes/NoteList";
import UserList from "./features/users/UserList";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Public></Public>}></Route>
          <Route path="login" element={<Login> </Login>}></Route>
          <Route path="/dash" element={<DashLayout></DashLayout>}>
            <Route index element={<Welcome></Welcome>}></Route>
            <Route path="notes">
              <Route index element={<NoteList></NoteList>}></Route>
            </Route>
            <Route path="users">
              <Route index element={<UserList></UserList>}></Route>
            </Route>
          </Route>
          {/* end of dash route */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
