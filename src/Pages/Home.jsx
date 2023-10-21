import AllProducts from "./AllProducts";
import Banner from "./Banner";
import BrandItems from "./BrandItems";
import Subscribe from "./Subscribe";


const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Banner></Banner>
            <BrandItems></BrandItems>
            <AllProducts></AllProducts>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;