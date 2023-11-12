"use client";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Menu } from "primereact/menu";
import { Tooltip } from "primereact/tooltip";
import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { formatCurrency } from "@/src/utils/IntExtension";
import { BasicTable } from "@/src/components/BasicTable";
import { useHomeOrderDetailHistory } from "@/src/services/home/HomeService";

export default () => {
  const todayOrder = [
    {
      OrderDetailID: "1",
      StoreName: "池上木片便當",
      DrinkFoodName: "招牌飯 (特餐)",
      OrderDetailRemark: "餐點備註",
      Price: 140,
    },
    {
      OrderDetailID: "2",
      StoreName: "五桐號",
      DrinkFoodName: "清香烏龍奶霜(L) 微糖/微冰",
      OrderDetailRemark: "餐點備註",
      Price: 55,
    },
  ];

  function TodayOrderItem(todayOrder: any) {
    return (
      <>
        {/* Tooltip 範例
        <Tooltip target=".custom-target-icon" />
        <i className="custom-target-icon pi pi-envelope p-text-secondary p-overlay-badge"
            data-pr-tooltip="No notifications"
            data-pr-position="right"
            data-pr-at="right+5 top"
            data-pr-my="left center-2"
            style={{ fontSize: '2rem', cursor: 'pointer' }}>
        </i> 
        */}

        <span
          key={todayOrder.OrderDetailID}
          className="block text-600 font-medium mb-1"
        >
          {todayOrder.StoreName}
        </span>
        <ul className="p-0 mx-0 mt-0 mb-4 list-none">
          <li className="flex align-items-center py-2 border-bottom-1 surface-border">
            <span
              className="text-900 line-height-3"
              ata-pr-tooltip="No notifications"
              data-pr-position="right"
              data-pr-at="right+5 top"
              data-pr-my="left center-2"
            >
              {todayOrder.DrinkFoodName}
              <span className="text-blue-500">
                {" "}
                {formatCurrency(todayOrder.Price)}元
              </span>
            </span>
          </li>
        </ul>
      </>
    );
  }

  const recentOrder = [
    {
      OrderID: "1",
      OrderDate: "2023-11-03",
      StoreName: "三分春色",
      DrinkFoodName: "山茶花鮮檸葡萄凍",
      Price: "60",
    },
  ];

  return (
    <>
      <div className="grid">
        {/* 區塊1 */}
        <div className="col-12 lg:col-6 xl:col-3">
          <div className="card mb-0">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  今日午餐
                </span>
                <div className="text-900 font-medium text-xl">池上木片便當</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-blue-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-shopping-cart text-blue-500 text-xl" />
              </div>
            </div>
            <span className="text-green-500 font-medium">預計 12:00 抵達 </span>
          </div>
        </div>

        {/* 區塊2 */}
        <div className="col-12 lg:col-6 xl:col-3">
          <div className="card mb-0">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  今日飲料
                </span>
                <div className="text-900 font-medium text-xl">五桐號</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-orange-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-map-marker text-orange-500 text-xl" />
              </div>
            </div>
            <span className="text-green-500 font-medium">預計 12:00 抵達 </span>
          </div>
        </div>

        {/* 區塊3 */}
        <div className="col-12 lg:col-6 xl:col-3">
          <div className="card mb-0">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  公司下午茶
                </span>
                <div className="text-900 font-medium text-xl">無</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-inbox text-cyan-500 text-xl" />
              </div>
            </div>
            <span className="text-green-500 font-medium">預計 12:00 抵達 </span>
          </div>
        </div>

        {/* 區塊4 */}
        <div className="col-12 lg:col-6 xl:col-3">
          <div className="card mb-0">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">訊息</span>
                <div className="text-900 font-medium text-xl">152則</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-purple-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-comment text-purple-500 text-xl" />
              </div>
            </div>
            <span className="text-green-500 font-medium">10則 未讀 </span>
          </div>
        </div>

        {/* 區塊5 */}
        <div className="col-12 xl:col-3">
          <div className="card xl:h-20rem">
            <div className="flex align-items-center justify-content-between">
              <h5>今日點餐</h5>
              {/* <h5>{formatCurrency(195)}元</h5> */}
            </div>
            {todayOrder.map((x) => {
              return <>{TodayOrderItem(x)}</>;
            })}
            {/* 原始HTML
            <span className="block text-600 font-medium mb-1">池上木片便當</span>
            <ul className="p-0 mx-0 mt-0 mb-4 list-none">
              <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                <span className="text-900 line-height-3">
                  招牌飯 (特餐)
                  <span className="text-blue-500">{' '}140元</span>
                </span>
              </li>
            </ul>
            <span className="block text-600 font-medium mb-1">五桐號</span>
            <ul className="p-0 mx-0 mt-0 mb-4 list-none">
              <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                <span className="text-900 line-height-3">
                清香烏龍奶霜(L) 微糖/微冰
                  <span className="text-blue-500">{' '}55元</span>
                </span>
              </li>
            </ul> 
            */}
          </div>
        </div>

        {/* 區塊6 */}
        <div className="col-12 xl:col-9">
          <div className="card xl:h-20rem">
            <div className="flex justify-content-between align-items-center">
              <h5>歷史紀錄</h5>
              {/* <h5>{formatCurrency(100)}元</h5> */}
            </div>
            {
              <BasicTable
                dataKey="OrderDetailID"
                query={useHomeOrderDetailHistory()}
              >
                <Column
                  field="OrderArrivalTime"
                  header="用餐時間"
                  sortable
                  style={{ width: "25%" }}
                />
                <Column
                  field="BrandName"
                  header="品牌"
                  sortable
                  style={{ width: "25%" }}
                />
                <Column
                  field="DrinkFoodName"
                  header="品項"
                  sortable
                  style={{ width: "25%" }}
                />
                <Column
                  field="DrinkFoodPrice"
                  header="價錢"
                  sortable
                  style={{ width: "10%" }}
                  body={(data) => formatCurrency(data.DrinkFoodPrice)}
                />
              </BasicTable>
            }

            {/* 原始程式碼
              <DataTable value={recentOrder} rows={5} paginator>
                  <Column field="OrderDate" header="訂購日期" sortable style={{ width: '25%' }} />
                  <Column field="StoreName" header="店家名稱" sortable style={{ width: '25%' }} />
                  <Column field="DrinkFoodName" header="訂購品項" sortable style={{ width: '25%' }} />
                  <Column field="Price" header="價錢" sortable style={{ width: '10%' }} body={(data) => formatCurrency(data.Price)} />
                  <Column
                      header="View"
                      style={{ width: '10%' }}
                      body={() => (
                          <>
                              <Button icon="pi pi-search" text />
                          </>
                      )}
                  />
              </DataTable> 
              */}
          </div>
        </div>
      </div>
    </>
  );
};