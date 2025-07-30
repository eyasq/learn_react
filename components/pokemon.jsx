import { useState } from "react"

export function Pokefitcher() {
    const [pokis, setPokis] = useState([])
    async function handleChange() {
        try {
            const pokis_res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            const results = await pokis_res.json()
            setPokis(results.results)
            console.log(results.results)
        } catch (e) {
            console.log("Something went wrong, ", e)
        }
    }
    return (
        <>
            <button onClick={handleChange}>Fetch Pokemon</button>
            <ul>
                {pokis.map((poki, index) => {
                    return (<li key={index}>{poki.name}</li>)
                })}
            </ul>
        </>
    )
}