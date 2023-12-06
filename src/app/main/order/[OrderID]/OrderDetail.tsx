"use client";

import { useOrder } from "@/src/services/order/OrderService";
import { GroupOrderDetailModel, ViewOrderDetail } from "@/src/models";
import { AddItemButton } from "./AddItemDialog";

const OrderDetail = ({ OrderID }: { OrderID: string }) => {
  const { data, isError, isLoading } = useOrder(OrderID);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  if (data?.Data.CanAdd) {
    return (
      <>
        <AddItemButton
          showDialog={() => {
            alert("新增項目");
          }}
        />
      </>
    );
  }

  return (
    <>
      {data?.Data.Detail?.map((x: GroupOrderDetailModel) => {
        return (
          <>
            <div className="p-3 bg-gray-100" key={x.Name}>
              <div>{`${x.Name} / ${x.TotalPrice}元 / ${x.TotalQuantity}份`}</div>
              {x.OrderDetailList?.map((y: ViewOrderDetail) => {
                return (
                  <>
                    <div>{`${y.DrinkFoodName} / ${y.IceDesc} / ${y.SugarDesc} / ${y.DrinkFoodPrice}元 / ${y.Quantity}份 / 備註:${y.DetailRemark}`}</div>
                    <div>付款資訊: {`${y.PaymentDesc}`}</div>
                    <div>取餐狀態: {`${y.IsPickup}`}</div>
                  </>
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
};
export default OrderDetail;
