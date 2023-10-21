import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";


const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const links = <>
        <NavLink className="py-2 px-5" to='/'>Home</NavLink>
        <NavLink className="py-2 px-5" to='/register'>Register</NavLink>
        <NavLink className="py-2 px-5" to='/login'>Login</NavLink>
        <NavLink className="py-2 px-5" to='/addProducts'>Add Product</NavLink>
        <NavLink className="py-2 px-5" to='/myCard'>My Card</NavLink>
    </>
    return (
        <div className="navbar max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link><img src="https://assets-global.website-files.com/60673aeb6d3163e7fda75a76/606e052a765e01c5ec1114ae_logo%405x.png" alt="Logo" className="w-44" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className="m-1">
                                <div className="avatar">
                                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://static.thenounproject.com/png/363640-200.png" />
                                    </div>
                                </div>
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-52">
                                <li><button>Profile</button></li>
                                <li><button onClick={logout} >Logout</button></li>
                            </ul>
                        </div>
                    </>
                    :
                    <>
                    <button>Login</button>
                    
                    </>
                }

            </div>
        </div>
    );
};

export default Navbar;