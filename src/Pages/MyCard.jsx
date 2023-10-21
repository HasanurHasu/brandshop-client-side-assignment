import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/Provider";

const MyCard = () => {

    const {user} = useContext(AuthContext);
    const userEmail = user;

    useEffect(() => {
        fetch(`http://localhost:5000/addToCard/${userEmail}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default MyCard;