"use client";

import HistoryTable from "@/src/components/HistoryTable";

export default function OrderHistoryPage() {
  return (
    <>
      <div className="card">{HistoryTable(localStorage.getItem("ID")!)}</div>
    </>
  );
}
