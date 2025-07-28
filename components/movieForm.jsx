import { useState } from "react";


export function MovieForm() {
    const [title, setTitle] = useState("");
    const [titleError, setError] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
        if (e.target.value.length < 1) {
            setError("Title is required!");
        }
        else if (e.target.value.length < 3) {
            setError("Title has to be 3 chars or over!")
        } else {
            setError("")
        }
        if (!titleError) {
            setTitle(e.target.value)
        }
    }
    return (
        <>
            <div>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <label htmlFor="movie">Movie Title?</label>
                    <input type="text" id="movie" onChange={handleTitle} />
                    <p> {titleError ? titleError : ""}</p>
                    {titleError ?
                        <input type="submit" disabled></input> : <input type="submit" ></input>
                    }
                </form>
            </div>


        </>
    )
}
