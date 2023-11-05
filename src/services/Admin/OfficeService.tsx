import { axiosApiClient } from "../axiosClient";
import { useQuery } from "@tanstack/react-query";

interface Office {
  OfficeID: string;
}

// 辦公室
const fetchOfficePromise = async (): Promise<BaseResponse<Office[]>> =>
  axiosApiClient.get("/Office/GetOfficeList").then((response) => response.data);

function GetOfficeList() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["GetOfficeList"],
    queryFn: () => fetchOfficePromise,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;
  return <div>Success</div>;
}

// 辦公室成員列表API
const fetchOfficeMemberPromise = async (): Promise<BaseResponse<any[]>> =>
  axiosApiClient
    .get("/Office/GetOfficeMemberList/57DCBDCA-DBDC-4596-BCC6-CDEBE96F0C24")
    .then((response) => response.data);

function GetOfficeListMember() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["GetOfficeMemberList"],
    queryFn: () => fetchOfficeMemberPromise,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;
  return <div>Success</div>;
}

export { GetOfficeList, GetOfficeListMember };
