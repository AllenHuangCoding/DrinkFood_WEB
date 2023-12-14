import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showSuccess = (label: string) => {
  toast.success(label, {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "colored",
  });
};
const showWarn = (label: string) => {
  toast.warn(label, {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "colored",
  });
};
const showInfo = (label: string) => {
  toast.info(label, {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "colored",
  });
};

// 在Layout的主畫面是插入元件，各按鈕使用呼叫的功能
const ToastView = () => {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        limit={3}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export { ToastView, showInfo, showSuccess, showWarn };
