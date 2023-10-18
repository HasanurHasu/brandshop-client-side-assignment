import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null);

const Provider = ({children}) => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    const info = {
        products

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};
Provider.propTypes = {
    children: PropTypes.node
};
export default Provider;