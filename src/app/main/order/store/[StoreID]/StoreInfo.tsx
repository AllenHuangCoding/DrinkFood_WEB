"use client";

import { useStoreData } from "@/src/services/admin/StoreService";
import { RadioButton } from "primereact/radiobutton";
import { classNames } from "primereact/utils";
import { useState } from "react";
import Image from "next/image";

const StoreInfo = (params: { StoreID: string }) => {
  const { data, isLoading, isError } = useStoreData(params.StoreID);

  const [totalCount, setTotalCount] = useState("All");
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  if (data == null || data?.Code != 200) {
    return <></>;
  }

  return (
    <>
      <div className="bg-white p-2">
        <div className="grid grid-nogutter">
          <div className="col-12 md:col-6">
            <div className="flex flex-row align-items-center gap-2">
              {data?.Data.BrandLogoUrl && (
                <img
                  src={data?.Data.BrandLogoUrl}
                  className={classNames({
                    "cursor-pointer": data?.Data.BrandOfficialUrl,
                  })}
                  width={100}
                  height={100}
                  alt="Logo圖片"
                  onClick={() => {
                    const url = data?.Data.BrandOfficialUrl;
                    if (url) {
                      window.open(url);
                    }
                  }}
                />
              )}

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
              {/* <div className="flex">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreInfo;
