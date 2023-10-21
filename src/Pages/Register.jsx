import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {


    const { userRegister } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const password1 = form.password1.value;
        console.log(email, password);

        if (password.length < 6) {
            toast.error('Password length under 6')
            return;
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            toast.error('must be capital letter and special  character')
            return;
        }

        if (!(password == password1)) {
            toast.error('Password do not match.')
            return;
        }
        userRegister(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    return (
        <div className="w-80 mx-auto">
            <h1 className="my-6 text-center text-3xl font-bold">Register Now!</h1>
            <form onSubmit={handleRegister}>
                <div className="flex flex-col gap-4">
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" />
                    <input type="password" name="password1" placeholder="Create Password" className="input input-bordered" />
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
                        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" className="w-7 py-2" />
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
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Register;