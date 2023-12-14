"use client";

import HistoryTable from "@/src/components/table/HistoryTable";

export default function AccountHistoryPage({
  params,
  searchParams,
}: {
  params: { AccountID: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <div className="card">
        <div>某某某的歷史紀錄</div>
        {HistoryTable(params.AccountID)}
      </div>
    </>
  );
}
