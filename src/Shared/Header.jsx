import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext)
    return ( 
        <div>
            <Link to='/'>Brand</Link>
            name : {user?.displayName}
        </div>
    );
};

export default Header;