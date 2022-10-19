import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { ImGoogle } from "react-icons/im";
import { Link } from 'react-router-dom';

const RightSideNav = () => {
    return (
        <>
            <div className="d-grid gap-2">
                <Button variant="outline-primary">Google <ImGoogle /></Button> {/** <ImGoogle/> */}
                <Button variant="outline-dark">Github <FaGithub /></Button>
            </div>
            <ul className='p-0'>
                <li className="list-group my-2">
                    <Link className='list-group-item' to='/' > home</Link>
                </li>
                <li className="list-group my-2">
                    <Link className='list-group-item' to='/' > home</Link>
                </li>
                <li className="list-group my-2">
                    <Link className='list-group-item' to='/' > home</Link>
                </li>
                <li className="list-group my-2">
                    <Link className='list-group-item' to='/' > home</Link>
                </li>
                <li className="list-group my-2">
                    <Link className='list-group-item' to='/' > home</Link>
                </li>
            </ul>
            
        </>
    );
};

export default RightSideNav;