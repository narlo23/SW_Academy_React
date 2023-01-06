import React, { useEffect } from "react";
const Input = React.forwardRef((_, ref) => {
  useEffect(() => {
    console.log(ref);
  }, [ref]);
  return (
    <>
      Input: <input ref={ref} />
    </>
  );
});
export default Input;
