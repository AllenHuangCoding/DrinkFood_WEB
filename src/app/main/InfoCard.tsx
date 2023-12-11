import { InfoCardDataModel } from "@/src/models";
import { classNames } from "primereact/utils";

export default function InfoCard({
  item,
  icon,
  color,
}: {
  item: InfoCardDataModel[];
  icon: string;
  color: string;
}) {
  if (item != null) {
    if (item.length == 0) {
      return (
        <>
          <div className="col-12 lg:col-6 xl:col-3">
            <div className="card mb-0">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    無資料
                  </span>
                  <div className="text-900 font-medium text-xl">無資料</div>
                </div>
                <div
                  className={classNames(
                    color,
                    "flex align-items-center justify-content-center border-round"
                  )}
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className={classNames(icon, "text-xl")} />
                </div>
              </div>
              <span className="text-green-500 font-medium">無資料</span>
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="col-12 lg:col-6 xl:col-3">
          <div className="card mb-0">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  {item[0].Title}
                </span>
                <div className="text-900 font-medium text-xl">
                  {item[0].Main}
                </div>
              </div>
              <div
                className={classNames(
                  color,
                  "flex align-items-center justify-content-center border-round"
                )}
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className={classNames(icon, "text-xl")} />
              </div>
            </div>
            <span className="text-green-500 font-medium">{item[0].Info}</span>
          </div>
        </div>
      </>
    );
  }
}
