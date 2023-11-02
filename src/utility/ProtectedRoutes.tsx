import { Navigate, Outlet } from "react-router-dom";
import { FunctionComponent, PropsWithChildren } from "react";
import { ProtectedRoutesProps } from "../models/PermissionModel";

const ProtectedRoutes: FunctionComponent<
  PropsWithChildren<ProtectedRoutesProps>
> = ({ Info, Permission }) => {
  return Info.login &&
    Info.permission.find((per) => Permission.includes(per)) ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} />
  );
};

export default ProtectedRoutes;
