import { Link, NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
    const links = <>
        <NavLink className="py-2 px-5" to='/'>Home</NavLink>
        <NavLink className="py-2 px-5" to='/register'>Register</NavLink>
        <NavLink className="py-2 px-5" to='/login'>Login</NavLink>
        <NavLink className="py-2 px-5" to='/addProducts'>Add Product</NavLink>
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
                <div className="dropdown">
                    <label tabIndex={0} className="m-1">
                        <div className="avatar">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-52">
                        <li>Item 1</li>
                        <li>Item 1</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;