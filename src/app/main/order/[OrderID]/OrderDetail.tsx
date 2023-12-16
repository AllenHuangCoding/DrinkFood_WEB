"use client";

import {
  DeleteOrderDetail,
  PutPaymentDateTime,
  useOrder,
} from "@/src/services/order/OrderService";
import { GroupOrderDetailModel, OrderDetailListModel } from "@/src/models";
import { AddItemButton } from "./AddItemDialog";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { confirmDialog } from "primereact/confirmdialog";
import { useState } from "react";
import { UpdateLunchPaymentDialog } from "./UpdatePaymentDialog";
import { showSuccess } from "@/src/components/form/CustomToast";
import { useRouter } from "next/navigation";

const OrderDetail = ({ OrderID }: { OrderID: string }) => {
  const router = useRouter();
  const [paymentVisible, setPaymentVisible] = useState<boolean>(false);
  const [selectedDetailID, setSelectedDetailID] = useState<string>("");

  const { data, isError, isLoading, refetch } = useOrder(OrderID);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;
  return (
    <>
      <UpdateLunchPaymentDialog
        detailID={selectedDetailID}
        visible={paymentVisible}
        closeDialog={() => {
          setPaymentVisible(false);
        }}
        submitCallback={() => {
          refetch();
        }}
      />
      <div className={classNames({ hidden: !data?.Data.ShowAdd })}>
        <AddItemButton
          showDialog={() => {
            router.push(`../store/${data?.Data.StoreID}/${data?.Data.OrderID}`);
          }}
        />
      </div>
      {data?.Data.Detail?.map((x: GroupOrderDetailModel) => {
        return (
          <>
            <div>
              <div className="flex justify-content-between">
                <div>{x.Name}</div>
                <div>{`總計：${x.TotalPrice}元 / ${x.TotalQuantity}份`}</div>
              </div>

              <div className="flex flex-column gap-2">
                {x.OrderDetailList?.map((y: OrderDetailListModel) => {
                  return (
                    <div
                      key={y.OrderDetailID}
                      className="p-3 bg-gray-100 flex flex-row justify-content-between align-items-center"
                    >
                      <div className="flex flex-column gap-2">
                        <div>
                          {y.DrinkFoodName != null
                            ? `${y.DrinkFoodName} / ${y.IceDesc} / ${y.SugarDesc} / ${y.DrinkFoodPrice}元 / ${y.Quantity}份 / 備註:${y.DetailRemark}`
                            : "尚未點餐"}
                        </div>
                        <div className="flex flex-row gap-2 align-items-center">
                          <div>{`付款資訊：${
                            y.PaymentDesc ?? "選擇方式"
                          }`}</div>
                          <i
                            className="pi pi-pencil cursor-pointer"
                            onClick={() => {
                              setSelectedDetailID(y.OrderDetailID);
                              setPaymentVisible(true);
                            }}
                          />
                          <div>/</div>
                          <div>{y.PaymentDatetime ? "已付款" : "尚未付款"}</div>
                          <div>
                            {y.PaymentDatetime ? (
                              <i
                                className="pi pi-bookmark-fill cursor-pointer"
                                onClick={() => {
                                  PutPaymentDateTime(y.OrderDetailID, {
                                    PaymentDateTime: null,
                                  }).then((response) => {
                                    showSuccess(response.Message);
                                    refetch();
                                  });
                                }}
                              />
                            ) : (
                              <i
                                className="pi pi-bookmark cursor-pointer"
                                onClick={() => {
                                  PutPaymentDateTime(y.OrderDetailID, {
                                    PaymentDateTime: new Date(),
                                  }).then((response) => {
                                    showSuccess(response.Message);
                                    refetch();
                                  });
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div>
                        <i
                          className="pi pi-trash cursor-pointer"
                          onClick={() => {
                            confirmDialog({
                              header: "刪除品項",
                              message: `確認要刪除 [${
                                y.DrinkFoodName ?? "尚未點餐"
                              }] ?`,
                              icon: "pi pi-info-circle",
                              acceptClassName: "p-button-danger",
                              accept() {
                                DeleteOrderDetail(y.OrderDetailID!).then(
                                  (response) => {
                                    showSuccess(response.Message);
                                    refetch();
                                  }
                                );
                              },
                              reject() {},
                            });
                          }}
                        />
                      </div>
                      {/* <Button
                        label="刪除"
                        severity="danger"
                        className={classNames({ hidden: !y.ShowDelete })}
                        text
                        outlined
                        raised
                        
                      /> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default OrderDetail;
