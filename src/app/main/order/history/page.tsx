"use client";

import HistoryTable from "@/src/components/table/HistoryTable";
import useLoginStore from "@/src/store/LoginStore";

export default function OrderHistoryPage() {
  const { loginData } = useLoginStore();

  return (
    <>
      <div className="card">{HistoryTable(loginData?.AccountID!)}</div>
    </>
  );
}
