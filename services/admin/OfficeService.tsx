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
const useOfficeList = () => {
  return useQuery({
    queryKey: ["GetOfficeList"],
    queryFn: async () => GET<Office[]>("/Office/GetOfficeList"),
  });
};

// 辦公室成員列表API
const useOfficeMemberList = () => {
  return useQuery({
    queryKey: ["GetOfficeMemberList"],
    queryFn: async () =>
      GET<any[]>(
        "/Office/GetOfficeMemberList/57DCBDCA-DBDC-4596-BCC6-CDEBE96F0C24"
      ),
  });
};

export { useOfficeList, useOfficeMemberList };
