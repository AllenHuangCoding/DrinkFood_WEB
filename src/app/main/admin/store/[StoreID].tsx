"use client";

import { useRouter } from "next/router";

const StoreDetail = () => {
  const router = useRouter();
  const { StoreID } = router.query;

  return <p>GET: {StoreID}</p>;
};

export default StoreDetail;
