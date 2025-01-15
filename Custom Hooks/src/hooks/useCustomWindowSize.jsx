import { useEffect, useState } from "react";

const useCustomWindowSize = () => {
    
    const [windowSize,setWindowSize] = useState({
        width : window.innerWidth,
        height : window.innerHeight
    });
    
    const handelResize = () => {
        setWindowSize({
            width : window.innerWidth,
            height : window.innerHeight
        })
    }

    useEffect(() => {
    window.addEventListener("resize",handelResize);
    return() => window.removeEventListener("resize",handelResize);
    },[])

    return windowSize
}

export default useCustomWindowSize;