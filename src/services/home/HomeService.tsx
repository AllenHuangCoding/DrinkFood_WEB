import { useQuery } from "@tanstack/react-query";
import { GET } from "../httpClient";

const useHomeOrderDetailHistory = () => {
  return useQuery({
    queryKey: ["GetHomeOrderDetailHistory"],
    queryFn: async () =>
      GET<any[]>(
        "/Order/GetHomeOrderDetailHistory/F0E38C50-EB7B-4696-A94E-B7D70BBA0B40/57DCBDCA-DBDC-4596-BCC6-CDEBE96F0C24"
      ),
  });
};

export { useHomeOrderDetailHistory };
