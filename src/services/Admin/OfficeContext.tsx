import { axiosApiClient } from "../axiosClient";

interface ContextRequestProps {
  key: string;
  client: any;
}

function OfficeList() {
  return {
    key: "OfficeList",
    client: axiosApiClient.get("/Office/GetOfficeList").then((res) => res.data),
  };
}

function OfficeMemberList(OfficeID: string) {
  return {
    key: "OfficeMemberList",
    client: axiosApiClient
      .get("/Office/GetOfficeMemberList/" + OfficeID)
      .then((res) => res.data),
  };
}

export { OfficeList, OfficeMemberList };
