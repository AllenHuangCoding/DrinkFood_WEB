import { Navigate, Outlet } from "react-router-dom";
import { FunctionComponent, PropsWithChildren } from "react";
import { ProtectedRoutesProps } from "../models/PermissionModel";

const ProtectedRoutes: FunctionComponent<
  PropsWithChildren<ProtectedRoutesProps>
> = ({ Info, Access: Permission }) => {
  return Info.login &&
    Info.permission.find((access) => Permission.includes(access)) ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} />
  );
};

export default ProtectedRoutes;
