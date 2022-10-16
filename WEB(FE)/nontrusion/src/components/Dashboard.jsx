import React from 'react';
import SideNav from './default/SideNav';
import DashboardView from './dashboard/DashboardView';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
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
                        <SideNav />
                    </Col>
                    <Col
                        id="page-content-wrapper"
                        style={{
                            padding: '0',
                        }}
                    >
                        <DashboardView />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;