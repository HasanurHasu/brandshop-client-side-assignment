import { useParams } from "react-router-dom";


const BrandDetails = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>This is details page: {id}</h1>
        </div>
    );
};

export default BrandDetails;