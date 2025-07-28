import { useState } from "react";

export default function Moreforms() {
    const [fn, setFn] = useState("");
    const [ln, setLn] = useState("");
    const [mail, setMail] = useState("");
    const [pwd, setPwd] = useState("");
    const [cPwd, setCpwd] = useState("");
    const [err, setErr] = useState("")
    const [pwErr, setPwerr] = useState("")

    function handleField(e) {
        if (e.target.value.length < 2) {
            setErr("Field must be at least 2 chars")
        }
        else {
            //if e.target.name==fn, setFn, etc
        }
    }
    function handlePwErr(e) {
        if (e.target.value.length < 8) {
            setPwerr("Passwords must be 8 or longer chars.")
        }
    }
    if (pwd != cPwd) {
        setPwerr("Passwords must match.")
    }
    return (
        <>
            <form action="" onSubmit={(e) => { e.preventDefault(); }}>
                <div>
                    <label htmlFor="fn">First Name</label>
                    <input type="text" id="fn" onChange={handleField} />
                    {err ? err : ""}
                </div>
                <div>
                    <label htmlFor="ln">Last Name</label>
                    <input type="text" id="ln" onChange={handleField} />
                    {err ? err : ""}
                </div>
                <div>
                    <label htmlFor="mail">Email</label>
                    <input type="email" id="mail" onChange={handleField} />
                    {err ? err : ""}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handlePwErr} />
                    {pwErr ? pwErr : ""}

                </div>
                <div>
                    <label htmlFor="pc">Confrim passsword</label>
                    <input type="password" id="pc" onChange={handlePwErr} />
                    {pwErr ? pwErr : ""}
                </div>
                <input type="submit" />
            </form>
        </>
    )
}