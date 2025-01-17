import { useState } from "react";

const useToggle = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    const toggleValue = (value) => {
        setValue((currValue) => (typeof value === "boolean" ? value : !currValue));
    };

    return [value, toggleValue];
};

export default useToggle;
