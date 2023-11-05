import {
  GetOfficeList,
  GetOfficeListMember,
  DependentQuries,
} from "../../services/Admin/OfficeService";

export default function Office() {
  return (
    <>
      <div>This is Office Page</div>
      <div>{GetOfficeList()}</div>
      {/* <div>{GetOfficeListMember()}</div> */}
      {/* <div>{DependentQuries()}</div> */}
    </>
  );
}
