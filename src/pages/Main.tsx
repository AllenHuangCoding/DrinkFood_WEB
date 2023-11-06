import FooterSmall from "../navigation/components/FooterSmall";
import Sidebar from "../navigation/components/Sidebar";
import FlowBiteSideBar from "../navigation/components/FlowBiteSideBar";
import { Routes, Route } from "react-router-dom";
import Account from "./Admin/Account";
import Office from "./Admin/Office";
import Store from "./Admin/Store";
import Menu from "./Admin/Menu";
import List from "./Order/List";
import Calendar from "./Order/Calendar";
import Score from "./Other/Score";
import Reports from "./Other/Reports";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import { Permission } from "../models/PermissionModel";
import loginInfo from "../datas/Login";

export default function Main() {
  return (
    <>
      <Sidebar />
      {/* <FlowBiteSideBar /> */}
      <div className="relative md:ml-64 bg-blueGray-100">
        <div className="px-4 md:px-10 mx-auto w-full">
          <Routes>
            <Route
              element={
                <ProtectedRoutes Info={loginInfo} Access={[Permission.Admin]} />
              }
            >
              <Route index path="/admin/account" element={<Account />} />
              <Route path="/admin/office" element={<Office />} />
              <Route path="/admin/store" element={<Store />} />
              <Route path="/admin/menu" element={<Menu />} />
            </Route>

            <Route index path="/order/list" element={<List />} />
            <Route path="/order/calendar" element={<Calendar />} />

            <Route index path="/other/score" element={<Score />} />
            <Route path="/other/report" element={<Reports />} />
          </Routes>
          {/* <FooterSmall /> */}

          {/* <Footer container className="absolute bottom-0">
            <div className="w-full text-center">
              <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            </div>
          </Footer> */}
        </div>
      </div>
    </>
  );
}
