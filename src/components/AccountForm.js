import React, {useState} from 'react'

export default function AccountForm({type, header}) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            password: password
        })
    }
    const submitForm = async () => {
        try {
            const response = await fetch("https://github.com/collerhatguy/face-maker-2-serve/create-account", options);
            console.log(response);
        } catch(err) {
            console.log(err);
        }
    }
    return (
        <form
            method={type}
            // onSubmit={() => submitForm()} 
            className="account-form">
            <fieldset>
                <legend>{header}</legend>
                <label for="name">
                    Name:
                    <input 
                        // onChange={e => setName(e.target.value)}
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="your name"/>
                </label>
                <label for="password">
                    Password:
                    <input 
                        // onChange={e => setPassword(e.target.value)}
                        type="text" 
                        name="password" 
                        id="password" 
                        placeholder="your password"/>
                </label>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    )
}
