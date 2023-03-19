import { useEffect, useState } from "react";

export const useDebounce = (value: any, delay: any) => {
  const [debouncedVal, setDebouncedVal] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedVal;
};
