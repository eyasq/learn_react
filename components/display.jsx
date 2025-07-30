import { useContext } from "react";
import { SearchContext } from "./context";

export function Display() {
    const { context } = useContext(SearchContext);
    const res = context?.results; // safe access

    return (
        <div style={{ backgroundColor: "", width: "80%", minHeight: "60vh", margin: "1rem auto", border: "1px solid black" }}>
            <ul>
                {Array.isArray(res) ? (
                    res.map((value, index) => (
                        <li key={index}>
                            {typeof value === 'object' ? JSON.stringify(value) : value}
                        </li>
                    ))
                ) : (
                    <li>No results to display</li>
                )}
            </ul>
        </div>
    );
}
