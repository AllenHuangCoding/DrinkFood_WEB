"use client";

import { CloseOrder, useOrder } from "@/src/services/order/OrderService";
import { classNames } from "primereact/utils";
import { DataView } from "primereact/dataview";
import Image from "next/image";
import { Button } from "primereact/button";
import {
  UpdateArrivalButton,
  UpdateArrivalDialog,
} from "@/src/app/main/order/[OrderID]/UpdateArrivalDialog";
import { useState } from "react";
import {
  UpdateCloseButton,
  UpdateCloseDialog,
} from "@/src/app/main/order/[OrderID]/UpdateCloseDialog";

interface TitleContentCell {
  Title: string;
  Content: string | null | undefined;
}

const OrderInfo = (params: { OrderID: string }) => {
  const [arrivalVisible, setArrivalVisible] = useState<boolean>(false);
  const [closeVisible, setCloseVisible] = useState<boolean>(false);

  const { data, isError, isLoading } = useOrder(params.OrderID);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  const orderInfo: TitleContentCell[] = [];
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
      Title: "結單時間",
      Content: data?.Data.CloseTime,
    },
    {
      Title: "用餐時間",
      Content: data?.Data.ArrivalTime,
    },
    {
      Title: "地點",
      Content: data?.Data.OfficeName,
    },
    {
      Title: "團長",
      Content: data?.Data.OwnerName,
    },
    {
      Title: "應付金額",
      Content: "N 元",
    },
    {
      Title: "總份數",
      Content: "N 份",
    },
    {
      Title: "建立時間",
      Content: data?.Data.CreateTime,
    }
  );

  const orderInfoTemplate = (orderInfo: TitleContentCell) => {
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
        {data?.Data.BrandLogoUrl && (
          <img
            src={data?.Data.BrandLogoUrl}
            className={classNames({
              "cursor-pointer": data?.Data.BrandOfficialUrl,
            })}
            alt="Logo圖片"
            width={100}
            height={100}
            onClick={() => {
              const url = data?.Data.BrandOfficialUrl;
              if (url) {
                window.open(url);
              }
            }}
          />
        )}

        <div className="flex flex-column gap-2">
          <div>{data?.Data.BrandStoreName}</div>
          <div>{data?.Data.StorePhone}</div>
          <div>{data?.Data.StoreAddress}</div>
        </div>
      </div>
      <div className="flex flex-column gap-3">
        <DataView value={orderInfo} itemTemplate={orderInfoTemplate} />

        <div className={classNames({ hidden: !data?.Data.ShowDelayClose })}>
          <UpdateCloseButton
            showDialog={() => {
              setCloseVisible(true);
            }}
          />
          <UpdateCloseDialog
            orderID={data?.Data.OrderID!}
            visible={closeVisible}
            closeDialog={() => {
              setCloseVisible(false);
            }}
          />
        </div>

        <div className={classNames({ hidden: !data?.Data.ShowDelayArrival })}>
          <UpdateArrivalButton
            showDialog={() => {
              setArrivalVisible(true);
            }}
          />
          <UpdateArrivalDialog
            orderID={data?.Data.OrderID!}
            visible={arrivalVisible}
            closeDialog={() => {
              setArrivalVisible(false);
            }}
          />
        </div>

        <Button
          label="遲到通知"
          severity="info"
          className={classNames(
            { hidden: !data?.Data.ShowDelayNotify },
            "w-full"
          )}
          onClick={() => {
            if (confirm("確認要發送遲到通知?")) {
            }
          }}
        />

        <Button
          label="遲到抵達"
          severity="info"
          className={classNames(
            { hidden: !data?.Data.ShowDelayArrivalNotify },
            "w-full"
          )}
          onClick={() => {
            if (confirm("確認要發送取餐通知?")) {
            }
          }}
        />

        <Button
          label="完成訂單"
          severity="info"
          className={classNames({ hidden: !data?.Data.ShowFinish }, "w-full")}
          onClick={() => {
            if (confirm("確認要完成訂單?")) {
            }
          }}
        />

        <Button
          label="關閉訂單"
          severity="danger"
          className={classNames({ hidden: !data?.Data.ShowClose }, "w-full")}
          onClick={() => {
            if (confirm("確認要關閉訂單?")) {
              CloseOrder(data?.Data.OrderID!);
              // TODO: 訂單資料重整
            }
          }}
        />
      </div>
    </>
  );
};
export default OrderInfo;
