import { useState } from "react";
export function MessageForm({ msg, setMsg }) {
    const [draft, setDraft] = useState("")
    function handleSubmit(e) {
        e.preventDefault();
        setMsg(draft)
        setDraft("")
    }

    return (
        <>
            <h1>Set Message</h1>

            <form action="" onSubmit={handleSubmit}>
                <textarea rows="4" cols="50" placeholder="Enter your message" name="msg" id="" onChange={(e) => { setDraft(e.target.value) }}></textarea>
                <input type="submit" value="Send Message" />
            </form>


        </>
    )
}

export function MessageDisplay({ msg }) {
    return (
        <>
            <h1>Current Message:</h1>
            <pre>{msg || "There are no messages"}</pre>
        </>)
}