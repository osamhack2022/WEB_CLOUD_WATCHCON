import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './head.css';

const Head = ({ selected, setView }) => {
    return (
        <>
            <Row className="mb-6">
                <Col xs={6}>
                    <Row className="mt-4 text-center head">
                        <Col className="title">
                            <div className="d-flex justify-content-center align-self-center">
                                <b>기준</b>
                            </div>
                        </Col>
                        <Col>
                            <Button
                                className={
                                    selected === 'daily'
                                        ? 'option-selected shadow-none'
                                        : 'option shadow-none'
                                }
                                onClick={() => setView('daily')}
                            >
                                일간
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                className={
                                    selected === 'weekly'
                                        ? 'option-selected shadow-none'
                                        : 'option shadow-none'
                                }
                                onClick={() => setView('weekly')}
                            >
                                주간
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                className={
                                    selected === 'monthly'
                                        ? 'option-selected shadow-none'
                                        : 'option shadow-none waves-none'
                                }
                                onClick={() => setView('monthly')}
                            >
                                월간
                            </Button>
                        </Col>
                        <Col></Col>
                    </Row>
                </Col>
                <Col></Col>
            </Row>
        </>
    );
};

export default Head;