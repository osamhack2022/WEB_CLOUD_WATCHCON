import React from 'react';
import { Card, Row, Col, Table, Button } from 'react-bootstrap';
import { CheckCircle } from 'react-bootstrap-icons';
import './finished.css';

const Finished = ({ width, height }) => {
    return (
        <div className="p-5">
            <Row style={{ height: '170px' }}>
                <Col className="text-center pb-4">
                    <br />
                    <br />
                    <h1 className="message">
                        신규 서비스가 <b className="text-green">성공적으로 등록</b>
                        되었습니다.
                    </h1>
                </Col>
            </Row>
            <Row style={{ height: '400px' }}>
                <Col className="d-flex justify-content-center">
                    <Card className="mb-4 border service-card" style={{ width, height }}>
                        <Card.Body>
                            <Row className="mb-0 add-service-success-head">
                                <div style={{ height: '120px' }}>
                                    <p className="add-service-success-card-title mb-0">
                                        <b>프로덕션 웹 서비스</b>
                                    </p>
                                    <p className="add-service-success-description mb-0">
                                        <b>http://localhost:8080</b>
                                    </p>
                                </div>
                            </Row>
                            <Row className="add-service-success-detail">
                                <hr className="card-hr" />
                                <Table className="table-borderless">
                                    <tr>
                                        <td className="text-end add-service-success-detail-table-head">
                                            <b>시나리오</b>
                                        </td>
                                        <td style={{ width: '10px' }}></td>
                                        <td className="add-service-success-detail-table-value">
                                            프로덕션 웹 프로비저닝 테스트용 시나리오
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end add-service-success-detail-table-head">
                                            <b>프록시</b>
                                        </td>
                                        <td style={{ width: '10px' }}></td>
                                        <td className="add-service-success-detail-table-value">
                                            localhost
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end add-service-success-detail-table-head">
                                            <b>업데이트</b>
                                        </td>
                                        <td style={{ width: '10px' }}></td>
                                        <td className="add-service-success-detail-table-value">
                                            15초마다 총 10회 시도
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end add-service-success-detail-table-head">
                                            <b>변수 / 헤더</b>
                                        </td>
                                        <td style={{ width: '10px' }}></td>
                                        <td className="add-service-success-detail-table-value">
                                            변수 0개, 헤더 2개 설정됨
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end add-service-success-detail-table-head">
                                            <b>요구 사항</b>
                                        </td>
                                        <td style={{ width: '10px' }}></td>
                                        <td className="add-service-success-detail-table-value">
                                            15 초 이내 [HTTP 200] OK!
                                        </td>
                                    </tr>
                                </Table>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br />
            <br />
            <div className="d-flex justify-content-center">
                <Button className="next-button" style={{ width: '692px', height: '87px' }}>
                    <CheckCircle />
                    &nbsp;&nbsp;완료하기
                </Button>
            </div>
        </div>
    );
};

export default Finished;