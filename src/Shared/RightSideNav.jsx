import { GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { ImGoogle } from "react-icons/im";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
// import NewsCards from './NewsCards';

const RightSideNav = () => {
    const [error, setError] = useState('')
    const [user, setUser] = useState('')
    console.log(error);

    const {googleLongIn} = useContext(AuthContext)
    const provider = new GoogleAuthProvider();

    const handelGoogleLogIn =(e)=>{
        googleLongIn(provider)    
        .then((result) => {
            const user = result.user;
            console.log(user);
          }).catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
          });   
    }

    return (
        <>
            <div className="d-grid gap-2">
                <Button onSubmit={handelGoogleLogIn} variant="outline-primary">Google <ImGoogle /></Button> {/** <ImGoogle/> */}
                <Button variant="outline-dark">Github <FaGithub /></Button>
            </div>
            <ul className='p-0'>
                <li className="list-group my-2">
                    <Link className='list-group-item' to='' > home</Link>
                </li>
                <li className="list-group my-2">
                    <Link className='list-group-item' to='' > home</Link>
                </li>
                <li className="list-group my-2">
                    <Link className='list-group-item' to='' > home</Link>
                </li>
                <li className="list-group my-2">
                    <Link className='list-group-item' to='' > home</Link>
                </li>
                <li className="list-group my-2">
                    <Link className='list-group-item' to='' > home</Link>
                </li>
            </ul>
            {/* <NewsCards></NewsCards> */}
            {/* {allNews.map(news => <NewsCards key={news._id} news={news}> </NewsCards>)} */}

        </>
    );
};

export default RightSideNav;