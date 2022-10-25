import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ChevronCompactRight } from 'react-bootstrap-icons';

import './addServiceHead.css';

const AddServiceHead = ({ view }) => {
    return (
        <Row className="mt-4 mb-4 add-service-process-head">
            <Col xs={5}>
                <Row>
                    <Col xs={4}>
                        <p>
                            <b>시나리오 등록</b>
                        </p>
                    </Col>
                    <Col xs={1}>
                        <ChevronCompactRight />
                    </Col>
                    <Col xs={4}>
                        <p className={view === 'procedure' || 'process-disabled'}>
                            <b>절차 등록</b>
                        </p>
                    </Col>
                    <Col></Col>
                </Row>
            </Col>
            <Col></Col>
        </Row>
    );
};

export default AddServiceHead;