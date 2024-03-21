import { useState } from "react";

const StatefullForm = () => {

    const [email, setEmail] = useState(null);
    const [name, setName] = useState('Tanvir Ahmed');
    const [password, setpPssword] = useState(null);
    const [error, setpError] = useState('');
    
    
    const handleSubmit = event => {
        event.preventDefault();
        if(password.length<6){
            setpError("password must be 6 leatter or more")
        }
        else{
            setpError('');
            console.log(email, name, password);
        }
    }

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handlePsswordChange = event => {
        setpPssword(event.target.value);
    }

    const handleNameChange = event => {
        setName(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" />
                <br />
                <input onChange={handlePsswordChange} type="password" name="password" required/>
                <br />
                <input type="submit" value="Submit" />
                {
                    error&& <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefullForm;