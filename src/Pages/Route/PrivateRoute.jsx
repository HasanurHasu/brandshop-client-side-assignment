import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/Provider';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location);
    
    if(loading){
        return <div className='flex justify-center items-center h-screen'>
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    if(user){
        return children;
    }

    return  <Navigate state={location.pathname} to='/login'></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;