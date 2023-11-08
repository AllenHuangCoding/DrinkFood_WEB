"use client";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Menu } from "primereact/menu";
import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";

const Dashboard = () => {

  const recentOrder = [{
    "OrderDate": "2023-11-03",
    "StoreName": "三分春色",
    "DrinkFoodName": "山茶花鮮檸葡萄凍",
    "Price": "60"
  }]

  const formatCurrency = (value: number) => {
    return value?.toLocaleString('zh-TW', {
        style: 'currency',
        currency: 'TWD'
    });
  };

  return (
    <>
      <div className="grid">
        <div className="col-12 lg:col-6 xl:col-3">
          <div className="card mb-0">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">今日午餐</span>
                <div className="text-900 font-medium text-xl">池上木片便當</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-blue-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-shopping-cart text-blue-500 text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 lg:col-6 xl:col-3">
          <div className="card mb-0">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">今日飲料</span>
                <div className="text-900 font-medium text-xl">五桐號</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-orange-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-map-marker text-orange-500 text-xl" />
              </div>
            </div>
          </div>
        </div>
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
          </div>
        </div>
        <div className="col-12 lg:col-6 xl:col-3">
          <div className="card mb-0">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  訊息
                </span>
                <div className="text-900 font-medium text-xl">152則未讀</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-purple-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-comment text-purple-500 text-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 xl:col-3">
          <div className="card">
            <div className="flex align-items-center justify-content-between mb-4">
              <h5>今日點餐</h5>
            </div>

            <span className="block text-600 font-medium mb-3">池上木片便當</span>
            <ul className="p-0 mx-0 mt-0 mb-4 list-none">
              <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                <span className="text-900 line-height-3">
                  招牌飯 (特餐)
                  <span className="text-blue-500">{' '}140元</span>
                </span>
              </li>
            </ul>
            <span className="block text-600 font-medium mb-3">五桐號</span>
            <ul className="p-0 mx-0 mt-0 mb-4 list-none">
              <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                <span className="text-900 line-height-3">
                清香烏龍奶霜(L) 微糖/微冰
                  <span className="text-blue-500">{' '}55元</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-12 xl:col-9">
          <div className="card">
              <h5>歷史紀錄</h5>
              <DataTable value={recentOrder} rows={5} paginator>
                  <Column field="OrderDate" header="訂購日期" sortable style={{ width: '25%' }} />
                  <Column field="StoreName" header="店家名稱" sortable style={{ width: '25%' }} />
                  <Column field="DrinkFoodName" header="訂購品項" sortable style={{ width: '35%' }} />
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
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
