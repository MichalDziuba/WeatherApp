import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Toast = () => {
  return (
    <ToastContainer 
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};
export const Notify = (message: string) => {
  toast.error(message);
};
