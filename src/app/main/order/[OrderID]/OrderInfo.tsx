"use client";

import { useOrder } from "@/src/services/order/OrderService";
import { classNames } from "primereact/utils";
import { DataView } from "primereact/dataview";

const OrderInfo = (params: { OrderID: string }) => {
  const { data, isError, isLoading } = useOrder(params.OrderID);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  const orderInfo: any[] = [];
  orderInfo.push(
    {
      Title: "訂單編號",
      Content: data?.Data.OrderNo,
    },
    {
      Title: "訂單狀態",
      Content: data?.Data.OrderStatusDesc,
    },
    {
      Title: "用餐時間",
      Content: data?.Data.ArrivalTime,
    },
    {
      Title: "團長",
      Content: data?.Data.OwnerName,
    },
    {
      Title: "地點",
      Content: data?.Data.OfficeName,
    },
    {
      Title: "結單時間",
      Content: data?.Data.CloseTime,
    },
    {
      Title: "建立時間",
      Content: data?.Data.CreateTime,
    }
  );

  const orderInfoTemplate = (orderInfo: any) => {
    return (
      <div className="col-6 sm:col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-3 gap-4">
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-2">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-md font-bold text-900">
                {orderInfo.Title}
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-md font-semibold">{orderInfo.Content}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-row align-items-center gap-2 border-bottom-3 border-300">
        <img
          src={data?.Data.BrandLogoUrl}
          className={classNames(
            {
              "cursor-pointer": data?.Data.BrandOfficialUrl,
            },
            "h-6rem w-6rem"
          )}
          alt="Logo圖片"
          onClick={() => {
            const url = data?.Data.BrandOfficialUrl;
            if (url) {
              window.open(url);
            }
          }}
        />

        <div className="flex flex-column gap-2">
          <div>{data?.Data.BrandStoreName}</div>
          <div>{data?.Data.StorePhone}</div>
          <div>{data?.Data.StoreAddress}</div>
        </div>
      </div>

      <DataView value={orderInfo} itemTemplate={orderInfoTemplate} />
    </>
  );
};
export default OrderInfo;
