import { toast } from "react-hot-toast";

export const notifyLoad = (msg) =>
  toast.loading(msg, {
    position: "bottom-right",
    duration: 5000,
    className: "text-xs bg-purple",
  });

export const notifySuccess = (msg) =>
  toast.success(msg, {
    position: "bottom-right",
    duration: 5000,
    className: "text-xs bg-purple",
  });

export const notifyErr = (msg) =>
  toast.error(msg, {
    position: "bottom-right",
    duration: 4000,
  });
