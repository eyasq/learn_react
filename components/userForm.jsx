import styled from "styled-components";
import { useState } from "react";
export const Container = styled.div`
    max-width:600px;
    margin:0 auto;
    padding:2rem;
    `
export const Input = styled.input`
    box-sizing:border-box;
    margin:0;
    padding:0.5rem;
    border: 1px solid #ccc;
    border-radius:4px;
    margin:1rem;
    &:focus{
    outline:wpx solid blue;}
`
const Button = styled.button`
    cursor:pointer;
    &:hover{
        background:blue;
        color:white;
    }
`
export function Form() {
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [mail, setMail] = useState("");
    const [passWd, setpassWd] = useState("");
    const [conf, setConf] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fName, lName, mail, passWd, conf };
        setSubmitted(true)
        console.log("Welcome, ", newUser);
    }

    return (
        <>
            <Container>
                <h3>{submitted ? "Thank you for your submission" : "Please fill out the form"}</h3>
                <form onSubmit={createUser}>
                    <div>
                        <label htmlFor="">First Name:</label>
                        <Input onChange={(e) => { setfName(e.target.value) }} value={fName}></Input>
                    </div>
                    <div>
                        <label htmlFor="">Last Name:</label>
                        <Input onChange={(e) => { setlName(e.target.value) }} ></Input>
                    </div>
                    <div>
                        <label htmlFor="">Email:</label>
                        <Input onChange={(e) => { setMail(e.target.value) }} ></Input>
                    </div>
                    <div>
                        <label htmlFor="">Password:</label>
                        <Input onChange={(e) => { setpassWd(e.target.value) }} ></Input>
                    </div>
                    <div>
                        <label htmlFor="">Confirm Password:</label>
                        <Input onChange={(e) => { setConf(e.target.value) }} ></Input>
                    </div>
                    <Input type="submit" value="Create User"></Input>
                </form>
            </Container>
            <Container>
                <p>Name: {fName} {lName}</p>
                <p>Email: {mail}</p>
                <p>Password: {passWd}</p>

            </Container>
        </>
    )
}