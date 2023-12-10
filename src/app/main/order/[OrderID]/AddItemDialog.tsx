import { Button } from "primereact/button";
import { classNames } from "primereact/utils";

const AddItemButton = ({ showDialog }: { showDialog: () => void }) => {
  return (
    <Button
      className="w-full"
      label="新增項目"
      severity="secondary"
      onClick={() => {
        showDialog();
      }}
    />
  );
};

export { AddItemButton };
