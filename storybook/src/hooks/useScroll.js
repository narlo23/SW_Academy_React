import { useEffect, useRef } from "react";
import { useRafState } from "./";

const useScroll = () => {
  const [state, setState] = useRafState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      setState({
        x: ref.current.scrollLeft,
        y: ref.current.scrollTop,
      });
    };
    element.addEventListener("scroll", handleScroll, { passive: true }); //passive : 성능 약간 이득
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [ref, setState]);

  return [ref, state];
};

export default useScroll;
