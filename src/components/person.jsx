export default function PersonCard(props) {
    const { people } = props
    return (
        <>
            {people.map((person, i) => {
                return (
                    <div key={i}>
                        <h1>Instructor {person.firstName} {person.lastName}</h1>
                        <p>Age: {person.age}</p>
                        <p>Hair Color: {person.hairColor}</p>
                    </div>
                )
            })}
        </>
    )
}