import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideNav from '../components/default/SideNav';

const Report = () => {
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
                        <SideNav selected={'report'} />
                    </Col>
                    <Col
                        id="page-content-wrapper"
                        style={{
                            padding: '0',
                        }}
                    >
                        <Container className="pt-4">Report Page</Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Report;