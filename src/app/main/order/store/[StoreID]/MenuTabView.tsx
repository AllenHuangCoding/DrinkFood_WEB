"use client";

import { DrinkFoodDialog } from "@/src/components/dialog/DrinkFoodDialog";
import { GroupDrinkFoodModel, ViewDrinkFood } from "@/src/models";
import { useDrinkFoodList } from "@/src/services/admin/StoreService";
import { formatCurrency } from "@/src/utils/IntExtension";
import { TabPanel, TabView } from "primereact/tabview";
import { useState } from "react";

const MenuTemplate = ({ product }: { product: ViewDrinkFood }) => {
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
                {formatCurrency(product.DrinkFoodPrice ?? 0)}
              </span>
            </div>
          </div>
          <div className="gap-2">
            <span className="text-sm font-semibold text-gray-500 white-space-nowrap overflow-hidden text-overflow-ellipsis">
              {product.DrinkFoodRemark}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

function MenuTabView(params: { StoreID: string }) {
  const [visible, setVisible] = useState<boolean>(false);

  const { data, isLoading, isError } = useDrinkFoodList(params.StoreID);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  return (
    <>
      <DrinkFoodDialog
        action="Create"
        visible={visible}
        closeDialog={() => {
          setVisible(false);
        }}
        submitCallback={() => {}}
      />
      <TabView
        onClick={() => {
          setVisible(true);
        }}
      >
        {data?.Data.map((x: GroupDrinkFoodModel) => {
          return (
            <TabPanel key={x.DrinkFoodTypeID} header={x.DrinkFoodTypeDesc}>
              <div className="grid">
                {x.DrinkFoodList?.map((y: ViewDrinkFood) => {
                  return <MenuTemplate key={y.DrinkFoodID} product={y} />;
                })}
              </div>
            </TabPanel>
          );
        })}
      </TabView>
    </>
  );
}
export default MenuTabView;
