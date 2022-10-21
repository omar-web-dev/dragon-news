import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const Navbars = () => {

    const { user , logOut} = useContext(AuthContext)
    const handlerLogOut = () => {
        logOut()
        .then(() => {
            console.log('sing out successfully');
        })
        .catch((error) => {
            console.log(error);
        })
    }

    // console.log(user?.emailVerified);
    // const {uid, email, displayName, photoURL} = user
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="d-flex mx-auto">
                    <Navbar.Brand to="/">Quizzes</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav  to="/">Home</Nav>
                        <Link to="statistics">Statistics</Link>
                        <Link to="blog">Blog</Link>
                        {user?.uid ?
                            <Nav className="me-auto">
                                <Image style={{width : '40px', height: '40px'}} roundedCircle src={user.photoURL} />
                                <Button onClick={handlerLogOut} >Log Out</Button>
                                <Link to="#">{user?.displayName}</Link>
                            </Nav>
                            :
                            <>
                                <Link to="sing-in">Sing In</Link>
                                <Link to="sing-up">Sing Up</Link>
                            </>
                        }
                    </Nav>
                </Container>
            </Navbar>
            <div>
                {user?.emailVerified ?
                    <p className='text-center'>Thank for email validation</p>
                    :
                    <p className='text-center'>Please validation know</p>
                }
            </div>
        </>

    );
};

export default Navbars;

