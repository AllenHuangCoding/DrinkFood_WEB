"use client";
import { Column } from "primereact/column";
import React from "react";
import { formatCurrency } from "@/src/utils/IntExtension";
import { BasicTable } from "@/src/components/table/BasicTable";
import { useOrderDetailHistory } from "@/src/services/order/OrderService";
import TodayOrderItem from "./TodayOrderItem";
import useLoginStore from "@/src/store/LoginStore";
import { useInfoCard, useTodayOrder } from "@/src/services/home/HomeService";
import InfoCard from "./InfoCard";

export default function Dashboard() {
  const { loginData } = useLoginStore();

  const { data: todayOrderData } = useTodayOrder();

  const { data: infoCardData } = useInfoCard();

  return (
    <>
      <div className="grid">
        {/* 區塊1  */}
        <InfoCard
          item={infoCardData?.Data?.Lunch!}
          color="bg-blue-100"
          icon="pi pi-shopping-cart text-blue-500"
        />

        {/* 區塊2  */}
        <InfoCard
          item={infoCardData?.Data?.Drink!}
          color="bg-orange-100"
          icon="pi pi-map-marker text-orange-500"
        />

        {/* 區塊3 */}
        <InfoCard
          item={infoCardData?.Data?.Teatime!}
          color="bg-cyan-100"
          icon="pi pi-inbox text-cyan-500"
        />

        {/* 區塊4 */}
        <InfoCard
          item={infoCardData?.Data?.Other!}
          color="bg-purple-100"
          icon="pi pi-comment text-purple-500"
        />

        {/* 區塊5 */}
        <div className="col-12 xl:col-3">
          <div className="card xl:h-20rem">
            <div className="flex align-items-center justify-content-between">
              <h5>今日點餐</h5>
            </div>
            {todayOrderData?.Data.length == 0
              ? "無今日點餐紀錄"
              : todayOrderData?.Data.map((x) => {
                  return <TodayOrderItem key={x.OrderDetailID} item={x} />;
                })}
          </div>
        </div>

        {/* 區塊6 */}
        <div className="col-12 xl:col-9">
          <div className="card xl:h-20rem">
            <div className="flex justify-content-between align-items-center">
              <h5>歷史紀錄</h5>
            </div>
            {
              <BasicTable
                dataKey="OrderDetailID"
                query={useOrderDetailHistory(loginData?.AccountID!)}
              >
                <Column
                  field="ArrivalTime"
                  header="用餐時間"
                  style={{ width: "20%" }}
                  sortable
                />
                <Column
                  field="BrandName"
                  header="品牌"
                  style={{ width: "20%" }}
                  sortable
                />
                <Column
                  field="DrinkFoodName"
                  header="品項"
                  style={{ width: "30%" }}
                  sortable
                />
                <Column
                  field="Quantity"
                  header="數量"
                  style={{ width: "15%" }}
                  sortable
                />
                <Column
                  field="DrinkFoodPrice"
                  header="單價"
                  style={{ width: "15%" }}
                  body={(data) => formatCurrency(data.DrinkFoodPrice)}
                  sortable
                />
              </BasicTable>
            }
          </div>
        </div>
      </div>
    </>
  );
}
