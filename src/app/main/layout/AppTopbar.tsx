/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { classNames } from "primereact/utils";
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { AppTopbarRef } from "../../../types/types";
import { LayoutContext } from "./context/layoutContext";
import Image from "next/image";
import ProfileDialog, {
  ProfileDialogFullModel,
} from "@/src/components/dialog/ProfileDialog";
import { useProfile } from "@/src/services/admin/AccountService";

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
  const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } =
    useContext(LayoutContext);

  const menubuttonRef = useRef(null);
  const topbarmenuRef = useRef(null);
  const topbarmenubuttonRef = useRef(null);

  useImperativeHandle(ref, () => ({
    menubutton: menubuttonRef.current,
    topbarmenu: topbarmenuRef.current,
    topbarmenubutton: topbarmenubuttonRef.current,
  }));

  const [selectedOffice, setSelectedOffice] = useState(null);
  const offices = [
    { name: "台北建國辦公室", code: "taipei_jianguo" },
    { name: "台北仁愛辦公室", code: "taipei_renai" },
    { name: "高雄總部", code: "cleanaway" },
  ];

  const [visible, setVisible] = useState<boolean>(false);
  const [userData, setUserData] = useState<ProfileDialogFullModel | null>(null);
  const [action, setAction] = useState<"View" | "Create" | "Update">("View");

  // const { data } = useProfile();

  return (
    <div className="layout-topbar">
      <Link href="/" className="layout-topbar-logo">
        <img
          src={`/layout/images/logo-${
            layoutConfig.colorScheme !== "light" ? "white" : "dark"
          }.svg`}
          alt="logo"
          width="80"
          height="32"
        />
        <span>SAKAI</span>
      </Link>

      <button
        ref={menubuttonRef}
        type="button"
        className="p-link layout-menu-button layout-topbar-button"
        onClick={onMenuToggle}
      >
        <i className="pi pi-bars" />
      </button>

      <button
        ref={topbarmenubuttonRef}
        type="button"
        className="p-link layout-topbar-menu-button layout-topbar-button"
        onClick={showProfileSidebar}
      >
        <i className="pi pi-ellipsis-v" />
      </button>

      <div
        ref={topbarmenuRef}
        className={classNames("layout-topbar-menu", {
          "layout-topbar-menu-mobile-active": layoutState.profileSidebarVisible,
        })}
      >
        {/* <Dropdown
          value={selectedOffice}
          onChange={(e) => setSelectedOffice(e.value)}
          options={offices}
          optionLabel="name"
          placeholder="選擇辦公室"
          className="w-full md:w-14rem"
        /> */}
        <button
          type="button"
          className="p-link layout-topbar-button"
          onClick={() => {
            // setUserData(data?.Data);
            // setAction("View");
            // setVisible(true);
          }}
        >
          <i className="pi pi-user"></i>
          <span>個人資料</span>
        </button>
        <ProfileDialog
          visible={visible}
          action={action}
          userData={userData}
          closeDialog={() => {
            setVisible(false);
          }}
        />
      </div>
    </div>
  );
});

AppTopbar.displayName = "AppTopbar";

export default AppTopbar;
