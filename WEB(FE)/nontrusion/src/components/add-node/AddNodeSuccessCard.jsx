import React from 'react';
import { Card, Row, Col, Table } from 'react-bootstrap';
import './addNodeSuccess.css';

const AddNodeSuccessCard = ({ width, height }) => {
    return (
        <>
            <Card className="mb-4 border node-card" style={{ width, height }}>
                <Card.Body>
                    <div class="d-flex justify-content-between px-md-1">
                        <Row className="mb-0 add-node-success-head">
                            <Col xs={4}>
                                <div className="d-flex justify-content-center mt-1">
                                    <img
                                        src="../server-image.png"
                                        alt="Server"
                                        style={{ height: '120px' }}
                                    />
                                </div>
                            </Col>
                            <Col className="node-detail mt-2 mb-0" style={{ padding: 'auto' }}>
                                <div style={{ height: '120px' }}>
                                    <p className="add-node-success-card-subtitle mb-0">
                                        <b>데이터 서버</b>
                                    </p>
                                    <p className="add-node-success-card-title mb-0">
                                        <b>Data Analysis Server</b>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row className="add-node-success-detail">
                        <p className="add-node-success-description">
                            <b>인공지능 분석용 데이터 분석 서버</b>
                        </p>
                        <hr className="card-hr" />
                        <Table className="table-borderless">
                            <tr>
                                <td className="text-end add-node-success-detail-table-head">
                                    <b>Host</b>
                                </td>
                                <td style={{ width: '10px' }}></td>
                                <td className="add-node-success-detail-table-value">
                                    63.214.144.178
                                </td>
                            </tr>
                            <tr>
                                <td className="text-end add-node-success-detail-table-head">
                                    <b>IP</b>
                                </td>
                                <td style={{ width: '10px' }}></td>
                                <td className="add-node-success-detail-table-value">
                                    63.214.144.178
                                </td>
                            </tr>
                            <tr>
                                <td className="text-end add-node-success-detail-table-head">
                                    <b>DNS</b>
                                </td>
                                <td style={{ width: '10px' }}></td>
                                <td className="add-node-success-detail-table-value">1.1.1.1</td>
                            </tr>
                            <tr>
                                <td className="text-end add-node-success-detail-table-head">
                                    <b>OS</b>
                                </td>
                                <td style={{ width: '10px' }}></td>
                                <td className="add-node-success-detail-table-value">
                                    Ubuntu 20.04.5 LTS (Focal Fossa)
                                </td>
                            </tr>
                        </Table>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

export default AddNodeSuccessCard;