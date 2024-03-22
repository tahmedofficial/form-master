import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState(null);
    const emailState = useInputState(null);

    const handleSubmit = (event) => {
        console.log(emailState.value);
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;