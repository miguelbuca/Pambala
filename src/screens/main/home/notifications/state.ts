import { useState } from "react";

export const useNotificationsState = () => {
  const [notifications, setNotifications] = useState<Notifications[]>([
    {
      title: "Password changed",
      content: "System test",
      date: new Date().toLocaleTimeString(),
      status: "active",
      type: "System",
    },
    {
      title: "IPhone XR is avaliable",
      content: "WishList test",
      date: new Date().toLocaleTimeString(),
      status: "active",
      type: "WishList",
    },
    {
      title: "Miguel Shared your post",
      content: "Post test",
      date: new Date().toLocaleTimeString(),
      status: "active",
      type: "Post",
    },
    {
      title: "Headset is avaliable",
      content: "WishList test",
      date: new Date().toLocaleTimeString(),
      status: "active",
      type: "WishList",
    },
  ]);

  return { notifications };
};
