import { useEffect, useRef } from "react";

export const usePrev = (value) => {
  const prev = useRef();

  useEffect(() => {
    prev.current = value;
  }, [value]);

  return prev.current;
};
