import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="max-w-6xl h-screen mx-auto flex flex-col justify-center items-center space-y-4">
                <h1 className="text-9xl font-extrabold">404</h1>
                <h1 className="text-4xl">Opps! Page not found</h1>
                <p className="text-lg text-center">Sorry, the page you&lsquo;re looking for doesn&lsquo;t exist. If you think <br /> something is broken, report a problem</p>
                <Link to='/'><button className="bg-[#D72050] px-5 py-2 rounded-3xl text-white ">Return Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;