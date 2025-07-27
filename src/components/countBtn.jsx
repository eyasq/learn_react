import { useState } from "react";

export function CounterBtn() {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count + 1)

    return (
        <button onClick={handleClick}>Count is: {count}</button>
    )
}
