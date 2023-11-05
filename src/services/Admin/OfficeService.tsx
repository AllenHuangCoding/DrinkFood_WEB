import { axiosApiClient, axiosLocalClient } from "../axiosClient";
import { useQuery } from "@tanstack/react-query";
import { GET } from "../HttpClient";

interface Office {
  OfficeID: string;
}

function DependentQuries() {
  const one = useQuery({
    queryKey: ["GetOfficeList"],
    queryFn: () => GET<Office[]>("/Office/GetOfficeList"),
  });

  const two = useQuery({
    queryKey: ["GetOfficeMemberList"],
    queryFn: () =>
      GET<any[]>(
        "/Office/GetOfficeMemberList/57DCBDCA-DBDC-4596-BCC6-CDEBE96F0C24"
      ),
    enabled: one.isSuccess,
  });

  const three = useQuery({
    queryKey: ["GetOfficeMemberList"],
    queryFn: async () =>
      GET<any[]>(
        "/Office/GetOfficeMemberList/57DCBDCA-DBDC-4596-BCC6-CDEBE96F0C24"
      ),
  });

  return <>Success</>;
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
    <div>
      {data?.Data.map((x) => (
        <p key={x.OfficeID}>{x.OfficeID}</p>
      ))}
    </div>
  );
}

// 辦公室成員列表API
function GetOfficeListMember() {
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

export { GetOfficeList, GetOfficeListMember, DependentQuries };
