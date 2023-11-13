import HistoryTable from "@/src/components/HistoryTable";

export async function generateStaticParams() {
  return [{ AccountID: "5471fa67-70fc-48b5-908f-15430112be36" }];
}

export default function AccountHistoryPage({
  params,
  searchParams,
}: {
  params: { AccountID: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <div className="card">{/* {HistoryTable(params.AccountID)} */}</div>
    </>
  );
}
