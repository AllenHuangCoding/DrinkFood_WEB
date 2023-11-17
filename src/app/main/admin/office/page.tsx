"use client";

import { useOfficeList } from "../../../../services/admin/OfficeService";
import { Card } from "primereact/card";

export default function OfficePage() {
  const { data, isLoading, isError } = useOfficeList();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {data?.Data.map((x) => (
        <Card
          key={x.OfficeID}
          title={x.CompanyName}
          subTitle={x.OfficeName}
          className="md:w-25rem"
        >
          {/* <p className="m-0">{`${x.CompanyName} ${x.OfficeName}`}</p> */}
        </Card>
      ))}
    </div>
  );
}
