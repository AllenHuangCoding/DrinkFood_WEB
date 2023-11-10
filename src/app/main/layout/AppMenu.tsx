/* eslint-disable @next/next/no-img-element */

import React, { useContext } from "react";
import AppMenuitem from "./AppMenuitem";
import { LayoutContext } from "./context/layoutContext";
import { MenuProvider } from "./context/menuContext";
import Link from "next/link";
import { AppMenuItem } from "../../../types/types";

const AppMenu = () => {
  const { layoutConfig } = useContext(LayoutContext);

  const model: AppMenuItem[] = [
    {
      label: "首頁",
      items: [{ label: "儀錶板", icon: "pi pi-fw pi-home", to: "/main" }],
    },
    {
      label: "管理者功能",
      items: [
        {
          label: "人員",
          icon: "pi pi-fw pi-user",
          to: "/main/admin/account",
        },
        // {
        //   label: "辦公室",
        //   icon: "pi pi-fw pi-building",
        //   to: "/main/admin/office",
        // },
        {
          label: "店家",
          icon: "pi pi-fw pi-building",
          to: "/main/admin/store",
        },
      ],
    },
    {
      label: "訂餐功能",
      items: [
        {
          label: "開團紀錄",
          icon: "pi pi-fw pi-shopping-cart",
          to: "/main/order/list",
        },
        {
          label: "歷史紀錄",
          icon: "pi pi-fw pi-list",
          to: "/main/order/history",
        },
        {
          label: "扣款統計",
          icon: "pi pi-fw pi-file-export",
          to: "/main/order/export",
        },
      ],
    },
    {
      label: "頁面",
      items: [
        {
          label: "登出",
          icon: "pi pi-fw pi-sign-in",
          to: "/",
        },
        {
          label: "Error",
          icon: "pi pi-fw pi-times-circle",
          to: "/auth/error",
        },
        {
          label: "Access Denied",
          icon: "pi pi-fw pi-lock",
          to: "/auth/access",
        },
        {
          label: "Not Found",
          icon: "pi pi-fw pi-exclamation-circle",
          to: "/pages/notfound",
        },
      ],
    },
  ];

  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) => {
          return !item?.seperator ? (
            <AppMenuitem item={item} root={true} index={i} key={item.label} />
          ) : (
            <li className="menu-separator"></li>
          );
        })}
      </ul>
    </MenuProvider>
  );
};

export default AppMenu;
