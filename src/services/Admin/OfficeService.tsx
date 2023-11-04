import { axiosApiClient } from "../axiosClient";
import { useQuery } from "@tanstack/react-query";

interface Office {
  OfficeID: string;
}

const fetchOffice = async () => {
  const res = await axiosApiClient
    .get("/Office/GetOfficeList")
    .then((res) => res.data);
  const response: BaseResponse<Office[]> = await res.json();
  return response.Data;
};

const fetchOfficePromise = async (): Promise<BaseResponse<Office[]>> =>
  axiosApiClient.get("/Office/GetOfficeList").then((response) => response.data);

function GetOfficeList() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["GetOfficeList"],
    queryFn: () => fetchOfficePromise,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;
  console.log(data?.toString());

  return (
    <div>
      {/* {data?.map((office: Office) => (
        <div>{ office.OfficeID }</div>
      ))} */}
    </div>
  );
}

export { GetOfficeList };
