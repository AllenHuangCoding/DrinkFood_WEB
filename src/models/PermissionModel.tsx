// 列舉各類權限字串 (用來判斷進入頁面權限)
const Permission = {
  User: "User",
  Admin: "Admin",
};
export { Permission };

export interface LoginInfoModel {
  login: boolean;
  permission: string[];
}

export interface ProtectedRoutesProps {
  Info: LoginInfoModel;
  Permission: string[];
}
