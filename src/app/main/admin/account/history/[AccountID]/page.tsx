"use client";
import HistoryTable from "@/src/components/HistoryTable";

export default ({
  params,
  searchParams,
}: {
  params: { AccountID: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return <>{HistoryTable(params.AccountID)}</>;
};
