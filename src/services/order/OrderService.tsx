import { useQuery } from "@tanstack/react-query";
import { DELETE, GET, POST, PUT } from "../httpClient";
import { OrderListModel } from "@/src/models/models/OrderListModel";
import { ViewDetailHistory } from "@/src/models/models/ViewDetailHistory";
import { ViewOrderAndDetail } from "@/src/models/models/ViewOrderAndDetail";
import { RequestPostOrderModel } from "@/src/models/models/RequestPostOrderModel";
import {
  RequestPostOrderDetailModel,
  RequestPutArrivalTimeModel,
  RequestPutCloseTimeModel,
  RequestPutPaymentDateTimeModel,
  RequestPutPaymentModel,
  ResponseModel,
} from "@/src/models";

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
  return POST<ResponseModel>("/Order/PostOrder", Param);
};

const CloseOrder = (OrderID: string) => {
  return PUT<ResponseModel>(`/Order/CloseOrder/${OrderID}`, []);
};

const FinishOrder = (OrderID: string) => {
  return PUT<ResponseModel>(`/Order/FinishOrder/${OrderID}`, []);
};

const UpdateArrivalTime = (
  OrderID: string,
  Param: RequestPutArrivalTimeModel
) => {
  return PUT<ResponseModel>(`/Order/PutArrivalTime/${OrderID}`, Param);
};

const UpdateCloseTime = (OrderID: string, Param: RequestPutCloseTimeModel) => {
  return PUT<ResponseModel>(`/Order/PutCloseTime/${OrderID}`, Param);
};

const DelayNotify = (OrderID: string) => {
  return PUT<ResponseModel>(`/Order/DelayNotify/${OrderID}`, null);
};

const DelayArrivalNotify = (OrderID: string) => {
  return PUT<ResponseModel>(`/Order/DelayArrivalNotify/${OrderID}`, null);
};

const JoinOrder = (OrderID: string) => {
  return POST<ResponseModel>(`/Order/JoinOrder/${OrderID}`, null);
};

const DeleteOrderDetail = (OrderDetailID: string) => {
  return DELETE<ResponseModel>(
    `/Order/DeleteOrderDetail/${OrderDetailID}`,
    null
  );
};

const PutPayment = (OrderDetailID: string, Param: RequestPutPaymentModel) => {
  return PUT<ResponseModel>(`/Order/PutPayment/${OrderDetailID}`, Param);
};

const PutPaymentDateTime = (
  OrderDetailID: string,
  Param: RequestPutPaymentDateTimeModel
) => {
  return PUT<ResponseModel>(
    `/Order/PutPaymentDateTime/${OrderDetailID}`,
    Param
  );
};

const PostOrderDetail = (param: RequestPostOrderDetailModel) => {
  return POST<ResponseModel>("/Order/PostOrderDetail/", param);
};

export {
  useOrder,
  useOrderList,
  useOrderDetailHistory,
  useCreateOrderDialogOptions,
  CreateOrder,
  CloseOrder,
  FinishOrder,
  UpdateArrivalTime,
  UpdateCloseTime,
  DelayNotify,
  DelayArrivalNotify,
  JoinOrder,
  DeleteOrderDetail,
  PutPayment,
  PutPaymentDateTime,
  PostOrderDetail,
};
