"use client";

import {
  useStoreData,
  useDrinkFoodList,
} from "@/src/services/admin/StoreService";
import { UseQueryResult } from "@tanstack/react-query";
import { Button } from "primereact/button";
import { TabPanel, TabView } from "primereact/tabview";
import { formatCurrency } from "@/src/utils/IntExtension";
import { Carousel } from "primereact/carousel";
import { RadioButton } from "primereact/radiobutton";
import { useState } from "react";
import { classNames } from "primereact/utils";

const MenuTemplate = (product: any) => {
  return (
    <>
      <div className="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3">
        <div
          className="flex flex-column p-2 border-bottom-1 cursor-pointer"
          onClick={() => console.log(product)}
        >
          {/* <img
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            src={product.image}
            alt={product.name}
          /> */}
          <div className="flex gap-2">
            <div className="text-lg font-bold text-900">
              {product.DrinkFoodName}
            </div>
            <div className="gap-2">
              <span className="text-xl font-semibold">
                {formatCurrency(product.DrinkFoodPrice)}
              </span>
            </div>
          </div>
          <div className="gap-2">
            <span className="text-sm font-semibold text-gray-500">
              {product.DrinkFoodRemark}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const ScoreTemplate = (score: any) => {
  return (
    <>
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div>
          <h4 className="mb-1">{score.message}</h4>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button icon="pi pi-search" className="p-button p-button-rounded" />
            <Button
              icon="pi pi-star-fill"
              className="p-button-success p-button-rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const MenuTabView = (query: UseQueryResult<BaseResponse<any[]>, Error>) => {
  const { data, isLoading, isError } = query;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  return (
    <>
      <TabView>
        {data?.Data.map((x) => {
          return (
            <TabPanel key={x.DrinkFoodTypeID} header={x.DrinkFoodTypeDesc}>
              <div className="grid">
                {x.DrinkFoodList.map((y: any) => {
                  return <>{MenuTemplate(y)}</>;
                })}
              </div>
            </TabPanel>
          );
        })}
      </TabView>
    </>
  );
};

const StoreInfo = (query: UseQueryResult<BaseResponse<any>, Error>) => {
  const { data, isLoading, isError } = query;
  const [totalCount, setTotalCount] = useState("All");
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;
  return (
    <>
      <div className="bg-white p-2">
        <div className="grid grid-nogutter">
          <div className="col-12 md:col-6">
            <div className="flex flex-row align-items-center gap-2">
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
                <div>
                  {data?.Data.BrandName} {data?.Data.StoreName}
                </div>
                <div>{data?.Data.StorePhone}</div>
                <div>{data?.Data.StoreAddress}</div>
              </div>
            </div>
          </div>
          <div className="col-12 md:col-6">
            <div className="flex flex-column gap-2">
              <div>
                菜單原圖：
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    alert("尚未設定菜單圖片");
                  }}
                >
                  點我看菜單
                </span>
              </div>
              <div>店家備註：{data?.Data.StoreRemark}</div>
              <div className="flex">
                <div>訂購統計：</div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex align-items-center">
                    <RadioButton
                      inputId="ingredient1"
                      name="pizza"
                      value="All"
                      onChange={(e) => setTotalCount(e.value)}
                      checked={totalCount === "All"}
                    />
                    <label htmlFor="ingredient1" className="ml-2">
                      顯示全部
                    </label>
                  </div>
                  <div className="flex align-items-center">
                    <RadioButton
                      inputId="ingredient2"
                      name="pizza"
                      value="Self"
                      onChange={(e) => setTotalCount(e.value)}
                      checked={totalCount === "Self"}
                    />
                    <label htmlFor="ingredient2" className="ml-2">
                      顯示自己
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ScoreCarusel = () => {
  const scores = [
    {
      message: "留言系統尚未開放1",
    },
    {
      message: "留言系統尚未開放2",
    },
    {
      message: "留言系統尚未開放3",
    },
    {
      message: "留言系統尚未開放4",
    },
    {
      message: "留言系統尚未開放5",
    },
    {
      message: "留言系統尚未開放6",
    },
  ];
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "576px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  return (
    <>
      <Carousel
        value={scores}
        numScroll={1}
        numVisible={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={ScoreTemplate}
        circular
        autoplayInterval={10000}
      />
    </>
  );
};

export default function StoreDetailPage({
  params,
  searchParams,
}: {
  params: { StoreID: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <div className="flex flex-column gap-4">
        {StoreInfo(useStoreData(params.StoreID))}
        {MenuTabView(useDrinkFoodList(params.StoreID))}
        {ScoreCarusel()}
      </div>
    </>
  );
}
