import { formatCurrency } from "@/src/utils/IntExtension";

export default function TodayOrderItem({ item }: any) {
  return (
    <>
      <span className="block text-600 font-medium mb-1">{item.StoreName}</span>
      <ul key={item.OrderDetailID} className="p-0 mx-0 mt-0 mb-4 list-none">
        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
          <span
            className="text-900 line-height-3"
            ata-pr-tooltip="No notifications"
            data-pr-position="right"
            data-pr-at="right+5 top"
            data-pr-my="left center-2"
          >
            {item.DrinkFoodName}
            <span className="text-blue-500">
              {" "}
              {formatCurrency(item.Price)}元
            </span>
          </span>
        </li>
      </ul>
    </>
  );
}
