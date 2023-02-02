import { useEffect } from "react";
import { useIntervalFn } from "./";

const useInterval = (fn, ms) => {
  const [run, clear] = useIntervalFn(fn, ms);

  useEffect(() => {
    run();
    return clear;
  }, [run, clear]);

  return clear;
};
export default useInterval;
