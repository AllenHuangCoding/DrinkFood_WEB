"use client";

import HistoryTable from "@/src/components/HistoryTable";

export default function AccountHistoryPage({
  params,
  searchParams,
}: {
  params: { AccountID: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <div className="card">{HistoryTable(params.AccountID)}</div>
    </>
  );
}
