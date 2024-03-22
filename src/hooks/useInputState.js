import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);

    const onChange = (event) => {
        setValue(event.target.value);
    }
    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // }
    // return [value, handleChange];
    return {
        value,
        onChange
    }
}

export default useInputState;