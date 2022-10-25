import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SideNav from '../components/default/SideNav';
import Head from '../components/report/Head';
import ReportTable from '../components/report/ReportTable';

import getReports from '../components/report/getReports';

const Report = () => {
    const [view, setView] = useState('daily');

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
                        <Container className="pt-4">
                            <Head selected={view} setView={setView} />
                            <ReportTable reports={getReports(view)} />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Report;