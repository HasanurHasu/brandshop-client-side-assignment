import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/firebase.config';


export const AuthContext = createContext(null);

const Provider = ({ children }) => {
    const [user, setUser] = useState(null);

    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const info = {
        user,
        products,
        userRegister

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