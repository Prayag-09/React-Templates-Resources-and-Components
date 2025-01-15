import { useState } from "react";

const useCustomCounter = ({initalValue = 0,step = 1}) => {
    
    const [count,setCount] = useState(initalValue);

    const increment = () => {
        setCount(count + step);
    }
    const decrement = () => {
        setCount(count - step);
    }
    const reset = () => {
        setCount(initalValue);
    }

    return (
        {increment,decrement,reset,count}
    )
}

export default useCustomCounter;