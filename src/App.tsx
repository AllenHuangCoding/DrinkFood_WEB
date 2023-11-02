import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./views/Main";
import Login from "./views/Auth/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path={"/login"}></Route>
          <Route index element={<Main />} path={"main/*"}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
