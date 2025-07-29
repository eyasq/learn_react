import { useContext, useState } from "react";
import { MyContext } from "../src/context/context";

export function Form() {
    const { setName } = useContext(MyContext)

    return (
        <div>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" onChange={(e) => { setName(e.target.value) }} />
        </div>
    )
}