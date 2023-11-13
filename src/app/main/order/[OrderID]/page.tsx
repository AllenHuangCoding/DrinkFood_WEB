"use client";

import { useOrder } from "@/src/services/order/OrderService";
import { DataView } from "primereact/dataview";
import { classNames } from "primereact/utils";

export default function OrderDetailPage({
  params,
  searchParams,
}: {
  params: { OrderID: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
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

  const orderDetail: any = [];
  orderDetail.push({
    Name: "123",
  });
  return (
    <>
      <div className="bg-white p-3">
        <div className="grid grid-nogutter">
          <div className="col-12 sm:col-5 md:col-5 lg:col-5 xl:col-4">
            <div className="mr-0 mb-3 sm:mr-3 sm:mb-0">
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
            </div>
          </div>
          <div className="col-12 sm:col-7 md:col-7 lg:col-7 xl:col-8">
            <div
              className="border-gray-300 border-top-3 border-right-none border-left-none border-bottom-none sm:border-left-3 sm:border-top-none
            "
            >
              <div className="mt-3 ml-0 sm:mt-0 sm:ml-3">
                <div className="flex flex-column gap-3">
                  {data?.Data.Detail.map((x: any) => {
                    return (
                      <>
                        <div className="p-3 bg-gray-100">
                          <div>{`${x.Name} / N元 / N份`}</div>
                          {x.OrderDetailList.map((y: any) => {
                            return (
                              <>
                                <div>{`${y.DrinkFoodName} / ${y.IceDesc} / ${y.SugarDesc} / ${y.DrinkFoodPrice} / N份 / 這裡是訂單備註`}</div>
                              </>
                            );
                          })}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
