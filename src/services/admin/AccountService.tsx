import { useQuery } from "@tanstack/react-query";
import { GET, POST } from "../httpClient";
import { ViewAccount } from "@/src/models/models/ViewAccount";
import { RequestLoginModel } from "@/src/models/models/RequestLoginModel";
import { ResponseLoginModel } from "@/src/models";

// 成員API
const useAccountList = () => {
  return useQuery({
    queryKey: ["GetAccountList"],
    queryFn: async () => GET<ViewAccount[]>("/Account/GetAccountList"),
  });
};

const Login = (Param: RequestLoginModel) => {
  return POST<ResponseLoginModel>("/Account/Login", Param).then(
    (respone) => respone.Data
  );
};

export { useAccountList, Login };
