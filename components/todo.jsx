import { useState } from "react"

export default function Todolist() {
    const [todo, setTodo] = useState({
        text: "",
        checked: false
    });
    const [todolist, setList] = useState([])

    return (
        <>
            <input type="text" onChange={(e) => { setTodo({ text: e.target.value }) }} placeholder="Enter todo" />
            <button onClick={() => { setList(prev => [...prev, todo]) }}>Add Todo</button>
            <div>
                <h1>Todos:</h1>
                <ul>
                    {todolist.map((todo, i) => (
                        <li style={todo.checked ? { textDecoration: "line-through" } : {}} key={i} >{todo.text} - <input type="checkbox" onChange={() => {
                            const newList = [...todolist];
                            newList[i] = { ...newList, text: newList[i].text, checked: !newList[i].checked };
                            setList(newList)
                        }} /> - <button onClick={() => {
                            const newList = todolist.filter((el) => el !== todolist[i])
                            setList(newList)
                        }}>Delete</button> </li>
                    )
                    )}
                </ul>
            </div>
        </>
    )

}