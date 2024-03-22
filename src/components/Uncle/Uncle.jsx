import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={"Humayra"}></Cousin>
                <Cousin name={"Rafia"}></Cousin>
                <Cousin name={"Anika"}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;