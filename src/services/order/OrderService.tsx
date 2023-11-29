import { useQuery } from "@tanstack/react-query";
import { GET, POST, PUT } from "../httpClient";
import Account from "@/src/app/main/admin/account/page";
import { OrderListModel } from "@/src/models/models/OrderListModel";
import { ViewDetailHistory } from "@/src/models/models/ViewDetailHistory";
import { ViewOrderAndDetail } from "@/src/models/models/ViewOrderAndDetail";
import { RequestPostOrderModel } from "@/src/models/models/RequestPostOrderModel";
import { RequestPutOrderTimeModel } from "@/src/models";

// 成員API
const useOrderList = () => {
  return useQuery({
    queryKey: ["GetOrderList"],
    queryFn: async () => GET<OrderListModel[]>("/Order/GetOrderList"),
  });
};

const useOrderDetailHistory = (AccountID: string) => {
  return useQuery({
    queryKey: ["GetOrderDetailHistory", AccountID],
    queryFn: async () =>
      GET<ViewDetailHistory[]>(`/Order/GetOrderDetailHistory/${AccountID}`),
  });
};

const useOrder = (OrderID: string) => {
  return useQuery({
    queryKey: ["GetOrder", OrderID],
    queryFn: async () => GET<ViewOrderAndDetail>(`/Order/GetOrder/${OrderID}`),
  });
};

const useCreateOrderDialogOptions = () => {
  return useQuery({
    queryKey: ["GetCreateOrderDialogOptions"],
    queryFn: async () => GET<any>("/Order/GetCreateOrderDialogOptions"),
  });
};

const CreateOrder = (Param: RequestPostOrderModel) => {
  return POST<any>("/Order/PostOrder", Param);
};

const CloseOrder = (OrderID: string) => {
  return PUT<any>(`/Order/CloseOrder/${OrderID}`, []);
};

const UpdateOrderTime = (OrderID: string, Param: RequestPutOrderTimeModel) => {
  return PUT<any>(`/Order/PutOrderTime/${OrderID}`, Param);
};

export {
  useOrder,
  useOrderList,
  useOrderDetailHistory,
  useCreateOrderDialogOptions,
  CreateOrder,
  CloseOrder,
  UpdateOrderTime,
};
