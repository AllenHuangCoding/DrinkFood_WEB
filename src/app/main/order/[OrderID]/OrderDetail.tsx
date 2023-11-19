"use client";

import { useOrder } from "@/src/services/order/OrderService";
import { classNames } from "primereact/utils";
import { DataView } from "primereact/dataview";
import { GroupOrderDetailModel, ViewOrderDetail } from "@/src/models";

const OrderDetail = (params: { OrderID: string }) => {
  const { data, isError, isLoading } = useOrder(params.OrderID);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  return (
    <>
      {data?.Data.Detail?.map((x: GroupOrderDetailModel) => {
        return (
          <>
            <div className="p-3 bg-gray-100" key={x.Name}>
              <div>{`${x.Name} / N元 / N份`}</div>
              {x.OrderDetailList?.map((y: ViewOrderDetail) => {
                return (
                  <>
                    <div
                      key={y.OrderDetailID}
                    >{`${y.DrinkFoodName} / ${y.IceDesc} / ${y.SugarDesc} / ${y.DrinkFoodPrice} / N份 / 這裡是訂單備註`}</div>
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
