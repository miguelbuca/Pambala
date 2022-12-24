import { useState } from "react";

export const useWishListState = () => {
  const [wish, setWish] = useState<Wish[]>([
    {
      maxPrice: 5,
      minPrice: 2,
      name: "IPhone XR",
      status: "active",
    },
    {
      maxPrice: 5,
      minPrice: 2,
      name: "Headset gamer",
      status: "inative",
    },
  ]);
  return {
    wish,
  };
};
