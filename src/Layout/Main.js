import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import LeftSideNav from '../Shared/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav';

const Main = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <Container> 
                <Row>
                    <Col className='lg-2 border'><LeftSideNav/></Col>
                    <Col className='lg-8 border'><Outlet/></Col>
                    <Col className='lg-2 border'><RightSideNav/></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;