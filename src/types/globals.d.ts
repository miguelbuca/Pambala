type Status = "inative" | "active" | "deleted";
type NotificationType = "System" | "Post" | "WishList";

type User = {
  id?: string;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  avatar?: string;
  status?: Status;
};

type Wish = {
  id?: string;
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  status?: Status;
};

type Message = {
  id?: string;
  content?: string;
  date?: string;
  senderId: string;
  from?: User;
  to?: User;
  status?: Status;
};

type Notifications = {
  id?: string;
  title: string;
  type?: NotificationType;
  content?: string;
  user?: User;
  date?: string;
  status?: Status;
};
