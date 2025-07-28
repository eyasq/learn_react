

export const Groceries = () => {
    const groceryList = ['veggie', 'banna', 'apple,', 'pinepaple'];
    return (
        <ul>
            {groceryList.map((item, i) => {

                return <li key={i}>{item}</li>
            })}
        </ul>
    )
}