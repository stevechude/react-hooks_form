import { type } from "@testing-library/user-event/dist/type";
import React, { useLayoutEffect, useEffect, useRef } from "react";


const UseLayoutEffect = () => {
    const inputRef = useRef(null)

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    },[])
    useEffect(() => {
        inputRef.current.value = 'Hello'
    },[])

  return (
    <div>
      <input
        ref={inputRef}
        value="STEVE"
        style={{ width: 400, height: 60 }}
        
      />
    </div>
  );
}

export default UseLayoutEffect