import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideNav from '../components/default/SideNav';

const AddUser = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col
                        xs={2}
                        id="sidebar-wrapper"
                        style={{
                            padding: '0',
                        }}
                    >
                        <SideNav selected={'add-user'} />
                    </Col>
                    <Col
                        id="page-content-wrapper"
                        style={{
                            padding: '0',
                        }}
                    >
                        <Container className="pt-4">Add User Page</Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddUser;