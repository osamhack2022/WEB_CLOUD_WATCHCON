import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideNav from '../components/default/SideNav';

const Cluster = () => {
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
                        <SideNav selected={'cluster'} />
                    </Col>
                    <Col
                        id="page-content-wrapper"
                        style={{
                            padding: '0',
                        }}
                    >
                        <Container className="pt-4">Cluster Page</Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Cluster;