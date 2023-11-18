"use client";

import OrderDetail from "./OrderDetail";
import OrderInfo from "./OrderInfo";

// export async function generateStaticParams() {
//   return [{ OrderID: "5471fa67-70fc-48b5-908f-15430112be36" }];
// }

export default function OrderDetailPage({
  params,
  searchParams,
}: {
  params: { OrderID: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <div className="bg-white p-3">
        <div className="grid grid-nogutter">
          <div className="col-12 sm:col-5 md:col-5 lg:col-5 xl:col-4">
            <div className="mr-0 mb-3 sm:mr-3 sm:mb-0">
              <OrderInfo OrderID={params.OrderID} />
            </div>
          </div>

          <div className="col-12 sm:col-7 md:col-7 lg:col-7 xl:col-8">
            <div className="border-gray-300 border-top-3 border-right-none border-left-none border-bottom-none sm:border-left-3 sm:border-top-none">
              <div className="mt-3 ml-0 sm:mt-0 sm:ml-3">
                <div className="flex flex-column gap-3">
                  <OrderDetail OrderID={params.OrderID} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
