import { useState } from "react";
import { cash } from "utils/cash";

export const useWisshCardState = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { convert } = cash();

  const isOpenHandler = () => setIsOpen((prev) => !prev);

  return { isOpen, convert, isOpenHandler };
};
