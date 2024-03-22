
const ReusabeForm = ({ formTitle, handleSubmit, submitBtnText = "Submit", children }) => {

    const handleLocalSubmit = event => {
        event.preventDefault();
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        }
        handleSubmit(data)
    }

    return (
        <div>
            {children}
            <h2>{formTitle}</h2>
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusabeForm;