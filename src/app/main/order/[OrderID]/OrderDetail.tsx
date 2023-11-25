"use client";

import { useOrder } from "@/src/services/order/OrderService";
import { GroupOrderDetailModel, ViewOrderDetail } from "@/src/models";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";

const OrderDetail = ({
  OrderID,
  addItem,
}: {
  OrderID: string;
  addItem: boolean;
}) => {
  const { data, isError, isLoading } = useOrder(OrderID);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  if (data?.Data.Detail?.length == 0) {
    return (
      <>
        <Button
          className={classNames({
            hidden: !addItem,
          })}
          label="新增項目"
          severity="secondary"
          onClick={() => {
            alert("新增項目");
          }}
        />
        <div className="w-full h-full bg-red-100">尚無明細</div>
      </>
    );
  }

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
