import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Login from "./pages/Auth/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { Permission } from "./models/PermissionModel";
import loginInfo from "./datas/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path={"/login"} element={<Login />} />

          <Route
            element={
              <ProtectedRoutes
                Info={loginInfo}
                Access={[Permission.Admin, Permission.User]}
              />
            }
          >
            <Route path={"main/*"} element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
