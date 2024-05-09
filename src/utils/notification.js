import { ElNotification as Notification } from "element-plus";


export const gemNotify = {
    success(message, title = "Success") {
      Notification({
        title,
        message,
        icon: null,
        duration: 3000,
        position: "top-right",
        customClass: "notification-success",
      });
    },
    warning(message, title = "Warning") {
      Notification({
        title,
        message,
        duration: 3000,
        icon: null,
        customClass: "notification-warning",
      });
    },
    info(message, title = "Info") {
      Notification({
        title,
        message,
        duration: 3000,
        icon: null,
        customClass: "notification-info",
      });
    },
    error(message, title = "Error") {
      const fields = Object.keys(message);
      Notification({
        title: "Please review the following error(s):",
        message: typeof message == "string" ? message : message[fields[0]],
        duration: 3000,
        icon: null,
        customClass: "notification-error",
      });
    },
  };

  export default gemNotify