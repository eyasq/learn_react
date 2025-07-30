import { useState } from "react";
import './search.css'
export function SearchForm() {
    const [query, setQuery] = useState("")
    const [resource, setResource] = useState("");
    async function handleSubmit(e) {
        e.preventDefault();
        if (resource == "people") {
            const APILink = "https://swapi.dev/api/people/"
            if (!query) {
                const results = await fetch(APILink)
                const parsedResults = await results.json()
                console.log(parsedResults)
                // NOW ADD THE RESULTS TO THE CONTEXT
            } else {
                try {
                    const results = await fetch(`${APILink}${query}`)
                    const parsedResults = await results.json();
                    console.log(parsedResults)
                } catch (e) {
                    console.log("This droid aint in the DB!", e)
                }

            }
        }
        else if (resource == "planets") {
            const APILink = "https://swapi.dev/api/planets/"
            if (!query) {
                const results = await fetch(APILink)
                const parsedResults = await results.json()
                console.log(parsedResults)
                // NOW ADD THE RESULTS TO THE CONTEXT
            } else {
                try {
                    const results = await fetch(`${APILink}${query}`)
                    const parsedResults = await results.json();
                    console.log(parsedResults)
                } catch (e) {
                    console.log("This droid aint in the DB!", e)
                }

            }
        }
        else {
            throw new Error("This droid is not in the database!")
        }
    }

    return (
        <>
            <div className="Searchbar">
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="resource">Search For: </label>
                    <select name="resource" id="resource" onChange={(e) => { setResource(e.target.value) }}>
                        <option value="">--Please Choose an option--</option>
                        <option value="people">Characters</option>
                        <option value="planets">Planets</option>
                    </select>
                    <label htmlFor="id">ID:</label>
                    <input type="number" id="id" className="id" onChange={(e) => { setQuery(e.target.value) }} />
                    <input type="submit" value="Search" />
                </form>
            </div>
        </>
    )
}