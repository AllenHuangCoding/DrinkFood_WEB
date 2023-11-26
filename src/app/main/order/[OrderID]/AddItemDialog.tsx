import { Button } from "primereact/button";
import { classNames } from "primereact/utils";

const AddItemButton = ({
  showDialog,
  addItem,
}: {
  showDialog: () => void;
  addItem: boolean;
}) => {
  return (
    <Button
      className={classNames({
        hidden: !addItem,
      })}
      label="新增項目"
      severity="secondary"
      onClick={() => {
        showDialog();
      }}
    />
  );
};

export { AddItemButton };
