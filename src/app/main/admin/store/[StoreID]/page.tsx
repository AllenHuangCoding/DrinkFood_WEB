"use client";

import MenuTabView from "./MenuTabView";
import ScoreCarusel from "./ScoreCarusel";
import StoreInfo from "./StoreInfo";

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
        <StoreInfo StoreID={params.StoreID} />
        <MenuTabView StoreID={params.StoreID} />
        <ScoreCarusel />
      </div>
    </>
  );
}
