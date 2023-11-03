import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiPhotograph,
  HiOfficeBuilding,
  HiCalendar,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";
import { AiFillLike, AiFillEdit, AiFillFolderOpen } from "react-icons/ai";

import { FaFileCsv, FaUserLock } from "react-icons/fa6";

export default function FlowBiteSideBar() {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/main" icon={HiChartPie}>
            首頁
          </Sidebar.Item>
          <Sidebar.Collapse icon={FaUserLock} label="管理者功能">
            <Sidebar.Item href="/main/admin/account" icon={HiUser}>
              人員
            </Sidebar.Item>
            <Sidebar.Item href="/main/admin/office" icon={HiOfficeBuilding}>
              辦公室
            </Sidebar.Item>
            <Sidebar.Item href="/main/admin/store" icon={HiShoppingBag}>
              店家
            </Sidebar.Item>
            <Sidebar.Item href="/main/admin/menu" icon={HiPhotograph}>
              菜單
            </Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse icon={AiFillEdit} label="訂餐功能">
            <Sidebar.Item href="/main/order/list" icon={HiTable}>
              列表
            </Sidebar.Item>
            <Sidebar.Item href="/main/order/calendar" icon={HiCalendar}>
              行事曆
            </Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse icon={AiFillFolderOpen} label="其他功能">
            <Sidebar.Item href="/main/other/score" icon={AiFillLike}>
              評分
            </Sidebar.Item>
            <Sidebar.Item href="/main/other/report" icon={FaFileCsv}>
              報表
            </Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
