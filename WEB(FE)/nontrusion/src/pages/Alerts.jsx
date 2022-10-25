import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideNav from '../components/default/SideNav';
import AlertsTable from '../components/alerts/AlertsTable';
import getAlertsList from '../components/alerts/getAlertsList';

const Alerts = () => {
    const [errors, setErrors] = useState(getAlertsList());

    const updateErrorView = (setErrors, start, maxSize) => {
        const errors = getAlertsList(start, maxSize);
        setErrors(errors);
    };

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
                        <SideNav selected={'alerts'} />
                    </Col>
                    <Col
                        id="page-content-wrapper"
                        style={{
                            padding: '0',
                        }}
                    >
                        <Container className="pt-4">
                            <div className="pb-4">
                                <p className="alert-count">
                                    <b>{errors.length}건의 경고 이벤트가 발생했습니다.</b>
                                </p>
                            </div>
                            <AlertsTable
                                data={errors}
                                setErrors={setErrors}
                                reload={updateErrorView}
                            />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Alerts;