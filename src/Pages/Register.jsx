import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="w-80 mx-auto">
            <h1 className="my-6 text-center text-3xl font-bold">Register Now!</h1>
            <form>
                <div className="flex flex-col gap-4">
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" />
                    <input type="password" name="password" placeholder="Create Password" className="input input-bordered" />
                    <input type="password" name="password" placeholder="Confirm Password" className="input input-bordered" />
                    <input type="submit" value="Register" className="bg-blue-600 text-white text-lg py-2 rounded-md" />
                    <p className="text-center ">Already have an account? <Link to='/login' className="text-blue-600">login</Link></p>
                </div>

            </form>
            <div className="flex justify-center items-center gap-2 my-3">
                <div className="h-[0.5px] bg-gray-400 w-full"></div>
                <p>Or</p>
                <div className="h-[0.5px] bg-gray-400 w-full"></div>
            </div>
            <div className="flex flex-col gap-4">
                <button className=" w-full">
                    <div className="flex items-center justify-center gap-4 border border-blue-600 hover:bg-blue-600 hover:transition-colors hover:text-white rounded-lg transition ease-in-out delay-150 duration-100">
                        <img src="https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png" alt="" className="w-7 py-2" />
                        <p>Continue with Google</p>
                    </div>
                </button>
                <button className=" w-full">
                    <div className="flex items-center justify-center gap-4 border border-blue-600 hover:bg-blue-600 hover:transition-colors hover:text-white rounded-lg transition ease-in-out delay-150 duration-100">
                        <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="" className="w-7 py-2" />
                        <p>Continue with GitHub</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Register;