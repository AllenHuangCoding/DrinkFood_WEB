"use client";

import MenuTabView from "./MenuTabView";
import ScoreCarusel from "./ScoreCarusel";
import StoreInfo from "./StoreInfo";

export default function StoreDetailPage({
  params,
  searchParams,
}: {
  params: { StoreID: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (params.StoreID.length == 2 && params.StoreID[0] != params.StoreID[1]) {
    console.log("進入團購模式");
  }
  return (
    <>
      <div className="flex flex-column gap-4">
        <StoreInfo StoreID={params.StoreID[0]} />
        <MenuTabView StoreID={params.StoreID[0]} />
        <ScoreCarusel />
      </div>
    </>
  );
}
