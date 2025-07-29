import { useState, useContext } from "react";
import { MyContext } from "../src/context/context";
export function Navbar() {
    const { name } = useContext(MyContext)
    return (
        <>
            <div>
                <h1>
                    Hi {name}!
                </h1>
            </div>


        </>
    )
}