import { Container } from 'postcss';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import LeftSideNav from '../Shared/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav';

const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Header/>
                    <Col lg-2><LeftSideNav/></Col>
                    <Col lg-7><Outlet/></Col>
                    <Col lg-3><RightSideNav/></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;