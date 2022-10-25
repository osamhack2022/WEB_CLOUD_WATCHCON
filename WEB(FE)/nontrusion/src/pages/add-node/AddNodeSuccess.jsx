/*
 * 데이터 받아와서 적용하는 식으로 수정 필요
 */

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import SideNav from '../../components/default/SideNav';
import AddNodeSuccessCard from '../../components/add-node/AddNodeSuccessCard';

const AddNodeSuccess = () => {
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
                                        신규 서버가 <b className="text-green">성공적으로 등록</b>
                                        되었습니다.
                                    </h1>
                                </Col>
                            </Row>
                            <Row style={{ height: '400px' }}>
                                <Col className="d-flex justify-content-center">
                                    <AddNodeSuccessCard width="692px" height="398px" />
                                </Col>
                            </Row>
                            <br />
                            <br />
                            <div className="d-flex justify-content-center">
                                <Button
                                    className="next-button"
                                    style={{ width: '692px', height: '87px' }}
                                >
                                    서버 연동하기 <ArrowRight />
                                </Button>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddNodeSuccess;