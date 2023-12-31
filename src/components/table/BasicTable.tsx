"use client";

import { DataTable } from "primereact/datatable";
import { UseQueryResult } from "@tanstack/react-query";
import { Skeleton } from "primereact/skeleton";

interface BasicTableProp {
  children: React.ReactNode;
  query: UseQueryResult<BaseResponse<any[]>, Error>;
  dataKey: string;
  header?: React.ReactNode | null;
}

const BasicTable: React.FC<
  BasicTableProp & React.TableHTMLAttributes<HTMLTableElement>
> = (props: BasicTableProp) => {
  const { data, isError, isLoading } = props.query;

  if (isLoading) {
    const items: number[] = Array.from({ length: 3 }, (v, i) => i);

    return (
      <>
        <div className="border-round border-1 surface-border p-4">
          <ul className="m-0 p-0 list-none">
            {items.map((x) => {
              return (
                <li key={x} className="mb-3">
                  <div className="flex">
                    <div style={{ flex: "1" }}>
                      <Skeleton width="100%" className="mb-2"></Skeleton>
                      <Skeleton width="75%"></Skeleton>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <div>Error :(</div>
      </>
    );
  }

  return (
    <>
      <DataTable
        dataKey={props.dataKey}
        value={data?.Data}
        stripedRows
        showGridlines
        paginator
        size={"small"}
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        header={props.header}
        // scrollable
        // scrollHeight="400px"
        loading={isLoading}
      >
        {props.children}
      </DataTable>
    </>
  );
};

export { BasicTable };
