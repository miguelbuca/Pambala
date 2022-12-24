import { useEffect, useState } from "react";

export const useQuickMessageCardState = (display = false) => {
  const [show, setShow] = useState(display);

  useEffect(() => {
    setShow(display);
  }, [display]);

  const hiddenHandler = () => setShow(false);

  return { show, hiddenHandler };
};
