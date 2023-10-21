import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Provider";
import AddToCardDetails from "./AddToCardDetails";

const AddToCard = () => {

    const {user} = useContext(AuthContext);
    const email = user?.email;
    const [loadedMyCard, setLoadedMyCard] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addToCard/')
        .then(res => res.json())
        .then(data => setLoadedMyCard(data))
    }, [])

    const myCards = loadedMyCard.filter(myCard => myCard.userEmail == email);

    return (
        <div className="max-w-6xl mx-auto my-10">
            <h1 className="text-center text-3xl font-bold mb-6">My Card</h1>
            <div className="grid grid-cols-2 gap-5">
                {
                    myCards.map(myCard => <AddToCardDetails key={myCard._id} myCard={myCard}></AddToCardDetails>)
                }
            </div>
        </div>
    );
};

export default AddToCard;