"use client";

import { useOrder } from "@/src/services/order/OrderService";
import { GroupOrderDetailModel, OrderDetailListModel } from "@/src/models";
import { AddItemButton } from "./AddItemDialog";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";

const OrderDetail = ({ OrderID }: { OrderID: string }) => {
  const { data, isError, isLoading } = useOrder(OrderID);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  return (
    <>
      <div className={classNames({ hidden: !data?.Data.ShowAdd })}>
        <AddItemButton
          showDialog={() => {
            alert("新增項目");
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
                    <div className="p-3 bg-gray-100 flex flex-column gap-2">
                      <div>{`${y.DrinkFoodName} / ${y.IceDesc} / ${y.SugarDesc} / ${y.DrinkFoodPrice}元 / ${y.Quantity}份 / 備註:${y.DetailRemark}`}</div>
                      <div className="flex flex-row gap-2">
                        <div>{`付款資訊：${y.PaymentDesc}`}</div>
                        {/* <Button icon="pi pi-dollar" text onClick={() => {}} /> */}
                        {/* 
                        <Button
                          label={y.PaymentDesc ?? "尚未付款"}
                          text
                          outlined
                          onClick={() => {}}
                        />
                        */}
                      </div>
                      <div className="flex flex-row gap-2">
                        <div>{`取餐狀態：${y.PickUpDesc}`}</div>
                        {/* <Button icon="pi pi-bookmark" text onClick={() => {}} /> */}
                      </div>
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
