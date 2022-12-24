import { ImageSourcePropType } from "react-native";

export type PostCardProps = {
  account: User;
  price: number;
  name: string;
  description?: string;
  image?: ImageSourcePropType;
  like?: number;
  comment?: number;
  share?: number;
};
