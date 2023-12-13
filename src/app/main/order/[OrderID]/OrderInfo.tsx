"use client";

import {
  CloseOrder,
  DelayArrivalNotify,
  DelayNotify,
  FinishOrder,
  useOrder,
} from "@/src/services/order/OrderService";
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
import { formatCurrency } from "@/src/utils/IntExtension";
import { confirmDialog } from "primereact/confirmdialog";

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
      Content: data?.Data.OwnerName
        ? data?.Data.OwnerName
        : data?.Data.OwnerName,
    },
    {
      Title: "應付金額",
      Content: formatCurrency(data?.Data.OrderPrice!),
    },
    {
      Title: "總份數",
      Content: `${data?.Data.OrderQuantity} 份`,
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
            confirmDialog({
              header: "遲到通知",
              message: "確認要發送遲到通知?\r\n(只會通知已點餐的使用者)",
              icon: "pi pi-exclamation-triangle",
              accept() {
                DelayNotify(data?.Data.OrderID!);
              },
              reject() {},
            });
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
            confirmDialog({
              header: "遲到抵達",
              message: "確認要發送取餐通知?\r\n(只會通知已點餐的使用者)",
              icon: "pi pi-exclamation-triangle",
              accept() {
                DelayArrivalNotify(data?.Data.OrderID!);
              },
              reject() {},
            });
          }}
        />

        <Button
          label="完成訂單"
          severity="info"
          className={classNames({ hidden: !data?.Data.ShowFinish }, "w-full")}
          onClick={() => {
            confirmDialog({
              header: "完成訂單",
              message: "完成訂單後將無法再進行後續流程操作",
              icon: "pi pi-exclamation-triangle",
              accept() {
                FinishOrder(data?.Data.OrderID!);
              },
              reject() {},
            });
          }}
        />

        <Button
          label="關閉訂單"
          severity="danger"
          className={classNames({ hidden: !data?.Data.ShowClose }, "w-full")}
          onClick={() => {
            confirmDialog({
              header: "關閉訂單",
              message: "關閉訂單後將無法再進行後續流程操作",
              icon: "pi pi-info-circle",
              acceptClassName: "p-button-danger",
              accept() {
                CloseOrder(data?.Data.OrderID!);
              },
              reject() {},
            });
          }}
        />
      </div>
    </>
  );
};
export default OrderInfo;
