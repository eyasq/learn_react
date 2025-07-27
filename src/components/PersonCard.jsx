import { useState } from "react"
export function PersonCard({ firstName, lastName, age: initialAge, hairColor }) {
    const [age, setAge] = useState(parseInt(initialAge))
    const incrementAge = () => setAge(age + 1)
    return (

        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={incrementAge}>Add Age</button>
        </div>
    )
}