import { useQuery } from "@tanstack/react-query";
import { GET, POST, PUT } from "../httpClient";
import { ViewAccount } from "@/src/models/models/ViewAccount";
import { RequestLoginModel } from "@/src/models/models/RequestLoginModel";
import {
  RequestBindLineModel,
  RequestCreateAccountModel,
  RequestUpdateProfileModel,
  ResponseLoginModel,
  ResponseModel,
  ResponseProfileDialogOptions,
} from "@/src/models";

// 成員API
const useAccountList = () => {
  return useQuery({
    queryKey: ["GetAccountList"],
    queryFn: async () => GET<ViewAccount[]>("/Account/GetAccountList"),
  });
};

const useProfile = () => {
  return useQuery({
    queryKey: ["GetProfile"],
    queryFn: async () => GET<any>("/Account/GetProfile"),
  });
};

const Login = (Param: RequestLoginModel) => {
  return POST<ResponseLoginModel>("/Login/Login", Param).then(
    (respone) => respone.Data
  );
};

const useProfileDialogOptions = () => {
  return useQuery({
    queryKey: ["GetProfileDialogOptions"],
    queryFn: async () =>
      GET<ResponseProfileDialogOptions>("/Account/GetProfileDialogOptions"),
  });
};

const UpdateProfile = (ID: string, Param: RequestUpdateProfileModel) => {
  return PUT<ResponseModel>(`/Account/UpdateProfile/${ID}`, Param).then(
    (respone) => respone.Data
  );
};

const CreateAccount = (Param: RequestCreateAccountModel) => {
  return POST<ResponseModel>("/Account/CreateAccount", Param).then(
    (respone) => respone.Data
  );
};

const BindLine = (ID: string, Param: RequestBindLineModel) => {
  return PUT<ResponseModel>(`/Account/BindLine/${ID}`, Param).then(
    (respone) => respone.Data
  );
};

export {
  useAccountList,
  Login,
  useProfileDialogOptions,
  CreateAccount,
  UpdateProfile,
  useProfile,
  BindLine,
};
