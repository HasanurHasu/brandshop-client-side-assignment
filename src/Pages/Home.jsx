import Banner from "./Banner";
import BrandItems from "./BrandItems";
import Footer from "./Footer";


const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Banner></Banner>
            <BrandItems></BrandItems>
            <Footer></Footer>
        </div>
    );
};

export default Home;