import { useRef, useEffect } from "react";

const usePreviousLocation = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export default usePreviousLocation;
