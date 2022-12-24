import Feather from "@expo/vector-icons/Feather";
import { theme } from "../../../tailwind.config";

export const useNotificationCardState = (data: Notifications) => {
  const notificationAttr = (type?: NotificationType) => {
    let bgColor = "";
    let name = "";

    switch (type) {
      case "Post":
        bgColor = theme.extend.colors.primary[1];
        name = "edit";
        break;
      case "WishList":
        bgColor = theme.extend.colors.primary[1];
        name = "gift";
        break;

      default:
        bgColor = theme.extend.colors.primary[1];
        name = "settings";
        break;
    }

    return {
      bgColor,
      /** Expect ```Feather``` icon name */
      name,
    };
  };

  return { notificationAttr: notificationAttr(data.type) };
};
