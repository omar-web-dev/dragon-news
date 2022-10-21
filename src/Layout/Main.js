import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import LeftSideNav from '../Shared/LeftSideNav';
import Navbar from '../Shared/Navbar';
import RightSideNav from '../Shared/RightSideNav';

const Main = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <Container> 
                <Row>
                    <Col lg={2} className=' border'><LeftSideNav/></Col>
                    <Col lg={8} className=' border'><Outlet/></Col>
                    <Col lg={2} className=' border'><RightSideNav/></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;