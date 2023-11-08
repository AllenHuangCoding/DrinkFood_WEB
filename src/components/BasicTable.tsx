"use client"

import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";
import { formatCurrency } from "@/src/utils/IntExtension"

function BasicTable(data:any) {
    return (
        <>
            <DataTable value={data} rows={5} paginator>
                <Column field="OrderDate" header="訂購日期" sortable style={{ width: '25%' }} />
                <Column field="StoreName" header="店家名稱" sortable style={{ width: '25%' }} />
                <Column field="DrinkFoodName" header="訂購品項" sortable style={{ width: '25%' }} />
                <Column field="Price" header="價錢" sortable style={{ width: '10%' }} body={(data) => formatCurrency(data.Price)} />
                <Column
                    header="View"
                    style={{ width: '10%' }}
                    body={() => (
                        <>
                            <Button icon="pi pi-search" text />
                        </>
                    )}
                />
            </DataTable>
        </>
    )
}

export { BasicTable };
