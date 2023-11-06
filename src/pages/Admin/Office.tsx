import { GetOfficeList } from "../../services/Admin/OfficeService";

export default function Office() {
  return (
    <>
      <div>{GetOfficeList()}</div>
    </>
  );
}
