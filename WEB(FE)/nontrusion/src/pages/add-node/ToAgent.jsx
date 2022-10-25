/*
 * 데이터 받아와서 적용하는 식으로 수정 필요
 */

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CheckCircle } from 'react-bootstrap-icons';
import SideNav from '../../components/default/SideNav';
import ToAgentCard from '../../components/add-node/ToAgentCard';

const ToAgent = () => {
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
                        <SideNav selected={'add-node'} />
                    </Col>
                    <Col id="page-content-wrapper" className="p-5">
                        <Container className="pt-4">
                            <Row style={{ height: '170px' }}>
                                <Col className="text-center pb-4">
                                    <br />
                                    <br />
                                    <h1 className="message">
                                        Agent를 등록하여 <b className="text-green">등록을 마무리</b>
                                        하세요!
                                    </h1>
                                </Col>
                            </Row>
                            <Row style={{ height: '400px' }}>
                                <Row style={{ height: '50px' }}></Row>
                                <Col className="d-flex justify-content-center">
                                    <ToAgentCard width="1066px" height="302px" />
                                </Col>
                            </Row>
                            <br />
                            <br />
                            <div className="d-flex justify-content-center">
                                <Button
                                    className="next-button"
                                    style={{ width: '692px', height: '87px' }}
                                >
                                    <CheckCircle />&nbsp;&nbsp;&nbsp;완료하기
                                </Button>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ToAgent;