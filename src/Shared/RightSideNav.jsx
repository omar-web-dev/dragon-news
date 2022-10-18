import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { ImGoogle } from "react-icons/im";

const RightSideNav = () => {
    return (
        <div className="d-grid gap-2">
            <Button variant="outline-primary">Google <ImGoogle/></Button> {/** <ImGoogle/> */}
            <Button variant="outline-dark">Github <FaGithub /></Button>
        </div>
    );
};

export default RightSideNav;