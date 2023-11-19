/* eslint-disable @next/next/no-img-element */

import React, { useContext } from "react";
import { LayoutContext } from "./context/layoutContext";
import Image from "next/image";

const AppFooter = () => {
  const { layoutConfig } = useContext(LayoutContext);

  return (
    <div className="layout-footer">
      <Image
        src={`/layout/images/logo-${
          layoutConfig.colorScheme === "light" ? "dark" : "white"
        }.svg`}
        alt="Logo"
        height="20"
        width="40"
        className="mr-2"
      />
      by
      <span className="font-medium ml-2">PrimeReact</span>
    </div>
  );
};

export default AppFooter;
