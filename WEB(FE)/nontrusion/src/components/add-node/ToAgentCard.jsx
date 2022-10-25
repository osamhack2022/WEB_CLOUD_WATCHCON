import React from 'react';
import { Card, Row, Col, Table } from 'react-bootstrap';
import './toAgentCard.css';

const ToAgentCard = ({ width, height }) => {
    return (
        <>
            <Card className="mb-4 border node-card" style={{ width, height }}>
                <Card.Body>
                    <div class="px-md-1">
                        <Row className="mb-0 add-node-success-head">
                            <Col xs={5}>
                                <div className="mt-1">
                                    <img
                                        src="../server-image.png"
                                        alt="Server"
                                        style={{ height: '120px' }}
                                    />
                                </div>
                                <div style={{ height: '120px', marginLeft: '20px' }}>
                                    <p className="add-node-success-card-subtitle mb-0">
                                        <b>데이터 서버</b>
                                    </p>
                                    <p className="add-node-success-card-title mb-0">
                                        <b>Data Analysis Server</b>
                                    </p>
                                </div>
                            </Col>
                            <Col>
                                <p className="info-head">
                                    <b>Agent 설정 정보</b>
                                </p>
                                <Table className="table-borderless">
                                    <tr>
                                        <td className="text-end add-node-success-detail-table-head mb-2">
                                            <b>URL</b>
                                        </td>
                                        <td style={{ width: '10px' }}></td>
                                        <td className="add-node-success-detail-table-value mb-2">
                                            https://example.com/agent_ubuntu.tar
                                        </td>
                                    </tr>
                                    <br />
                                    <tr>
                                        <td className="text-end add-node-success-detail-table-head align-top">
                                            <b>How?</b>
                                        </td>
                                        <td style={{ width: '10px' }}></td>
                                        <td
                                            className="add-node-success-detail-table-value"
                                            style={{ lineHeight: '25px' }}
                                        >
                                            wget https://example.com/agent_ubuntu.tar
                                            <br />
                                            tar -xvf agent_ubuntu.tar
                                            <br />
                                            chmod 755 ./agent.sh
                                            <br />
                                            ./agent.sh
                                        </td>
                                    </tr>
                                </Table>
                            </Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default ToAgentCard;