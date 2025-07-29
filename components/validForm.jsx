import { useReducer } from "react";

export function Form() {
    const initialState = {
        firstName: {
            value: "",
            error: null
        },
        lastName: {
            value: "",
            error: null
        },
        email: {
            value: "",
            error: null
        }
    }
    function reducer(state, action) {
        return {
            ...state,
            [action.type]: action.payload
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    function handleChange(e) {
        const { name, value } = e.target;
        let error = null;
        if (name === "firstName" || name === "lastName") {
            if (value.length < 3) {
                error = "Name must be at least 3 characters";
            }
        } else if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                error = "Invalid email format";
            }
        }
        dispatch({
            type: name,
            payload: {
                value: value,
                error: error
            }
            //need to check here if the name is valid (over 5 chars) and insert an error if its not
        })
    }
    return (
        <>
            {/* {JSON.stringify(state)} */}
            <div>
                <label htmlFor="firstName">
                    <span>First Name:</span> {' '}
                    <input type="text" name="firstName" value={state.firstName.value} onChange={handleChange} />
                </label>
                {state.firstName.error && (<p style={{ color: 'red' }}>{state.firstName.error}</p>)}
            </div>
            <div>
                <label htmlFor="lastName">
                    <span>Last Name:</span> {' '}
                    <input type="text" name="lastName" value={state.lastName.value} onChange={handleChange} />
                </label>
                {state.lastName.error && (<p style={{ color: 'red' }}>{state.lastName.error}</p>)}
            </div>
            <div>
                <label htmlFor="email">
                    <span>Email:</span> {' '}
                    <input type="email" name="email" value={state.email.value} onChange={handleChange} />
                </label>
                {state.email.error && (<p style={{ color: 'red' }}>{state.email.error}</p>)}
            </div>

        </>
    )
}