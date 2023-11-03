import { useRequestProcessor } from "../RequestProcessor";
import { OfficeList, OfficeMemberList } from "./OfficeContext";

function GetOfficeList() {
  const { query } = useRequestProcessor();
  const test = OfficeList();
  const { isLoading, isError } = query(test.key, () => test.client, {
    enabled: true,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  return <ul>{}</ul>;
}

function GetOfficeMemberList() {
  const { query } = useRequestProcessor();
  const test = OfficeMemberList("57DCBDCA-DBDC-4596-BCC6-CDEBE96F0C24");
  const { isLoading, isError } = query(test.key, () => test.client, {
    enabled: true,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  return <ul>{}</ul>;
}

export { GetOfficeList, GetOfficeMemberList };
