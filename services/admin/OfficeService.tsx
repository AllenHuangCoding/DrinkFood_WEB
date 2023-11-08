import { useQuery } from "@tanstack/react-query";
import { GET } from "../httpClient";

interface Office {
  CompanyID: string;
  CompanyName: string;
  OfficeID: string;
  OfficeName: string;
  OfficeAddress: string;
}

// 辦公室據點API
function GetOfficeList() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["GetOfficeList"],
    queryFn: async () => GET<Office[]>("/Office/GetOfficeList"),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  return (
    <div className="">
      {data?.Data.map((x) => (
        // OfficeCard(
        //   x.OfficeID,
        //   `${x.CompanyName} ${x.OfficeName}`,
        //   x.OfficeAddress
        // )
        <div key={x.OfficeID}>{`${x.CompanyName} ${x.OfficeName}`}</div>
      ))}
    </div>
  );
}

// 辦公室成員列表API
function GetOfficeMemberList() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["GetOfficeMemberList"],
    queryFn: async () =>
      GET<any[]>(
        "/Office/GetOfficeMemberList/57DCBDCA-DBDC-4596-BCC6-CDEBE96F0C24"
      ),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;
  return (
    <div>
      {data?.Data.map((x) => (
        <p key={x.Name}>{x.Name}</p>
      ))}
    </div>
  );
}

export { GetOfficeList, GetOfficeMemberList };
