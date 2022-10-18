import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Cpu, SdCardFill, Ethernet, DeviceHdd } from 'react-bootstrap-icons';

import './nodeDetailCard.css';

const NodeDetailCard = ({ data }) => {
    return (
        <>
            <Row className="mb-4">
                <Card className="node-detail-card">
                    <Card.Body className="mt-0">
                        <Row className="mb-0">
                            <Col xs={7}>
                                <div className="d-flex px-md-1">
                                    <div>
                                        <h5 className="info-text">
                                            <b>
                                                <Cpu /> &nbsp;서버 부하율
                                            </b>
                                        </h5>
                                    </div>
                                </div>
                            </Col>
                            <Col className="value-text text-end">
                                <h1>{data.cpu.load}%</h1>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <div className="mb-0 info-value text-end">
                                <span class="align-middle">
                                    <div class="progress mt-3 mb-1 rounded">
                                        <div
                                            class="progress-bar node-usage-bar"
                                            role="progressbar"
                                            style={{ width: data.cpu.load + '%' }}
                                            aria-valuenow={data.cpu.load}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </span>
                            </div>
                        </Row>
                        <p className="name-text-muted mb-0">{data.cpu.name}</p>
                    </Card.Body>
                </Card>
            </Row>
            <Row className="mb-4">
                <Card className="node-detail-card">
                    <Card.Body className="mt-0">
                        <Row className="mb-0">
                            <Col xs={7}>
                                <div className="d-flex px-md-1">
                                    <div>
                                        <h5 className="info-text">
                                            <b>
                                                <SdCardFill /> &nbsp;메모리 사용률
                                            </b>
                                        </h5>
                                    </div>
                                </div>
                            </Col>
                            <Col className="value-text text-end">
                                <h1>{((data.memory.usage / data.memory.max) * 100).toFixed(0)}%</h1>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <div className="mb-0 info-value text-end">
                                <span class="align-middle">
                                    <div class="progress mt-3 mb-1 rounded">
                                        <div
                                            class="progress-bar node-usage-bar"
                                            role="progressbar"
                                            style={{
                                                width:
                                                    (data.memory.usage / data.memory.max) * 100 +
                                                    '%',
                                            }}
                                            aria-valuenow={data.memory.usage}
                                            aria-valuemin="0"
                                            aria-valuemax={data.memory.max}
                                        ></div>
                                    </div>
                                </span>
                            </div>
                        </Row>
                        <Row className="m-0 p-0">
                            <Col className="m-0 p-0">
                                <p className="name-text-muted text-strat mb-0">
                                    총 {data.memory.max}MB
                                </p>
                            </Col>
                            <Col className="m-0 p-0">
                                <p
                                    className={
                                        (data.memory.usage / data.memory.max >= 0.8
                                            ? 'usage-text-danger'
                                            : 'usage-text') + ' text-end mb-0'
                                    }
                                >
                                    {data.memory.usage}MB 사용
                                </p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
            <Row className="mb-4">
                <Card className="node-detail-card">
                    <Card.Body className="mt-0">
                        <Row className="mb-0">
                            <Col xs={7}>
                                <div className="d-flex px-md-1">
                                    <div>
                                        <h5 className="info-text">
                                            <b>
                                                <Ethernet /> &nbsp;네트워크 트래픽
                                            </b>
                                        </h5>
                                    </div>
                                </div>
                            </Col>
                            <Col className="value-text text-end">
                                <h1>
                                    {((data.traffic.usage / data.traffic.max) * 100).toFixed(0)}%
                                </h1>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <div className="mb-0 info-value text-end">
                                <span class="align-middle">
                                    <div class="progress mt-3 mb-1 rounded">
                                        <div
                                            class="progress-bar node-usage-bar"
                                            role="progressbar"
                                            style={{
                                                width:
                                                    (data.traffic.usage / data.traffic.max) * 100 +
                                                    '%',
                                            }}
                                            aria-valuenow={data.traffic.usage}
                                            aria-valuemin="0"
                                            aria-valuemax={data.traffic.max}
                                        ></div>
                                    </div>
                                </span>
                            </div>
                        </Row>
                        <Row className="m-0 p-0">
                            <Col className="m-0 p-0">
                                <p className="name-text-muted text-strat mb-0">
                                    {data.traffic.max}MB
                                </p>
                            </Col>
                            <Col className="m-0 p-0">
                                <p
                                    className={
                                        (data.traffic.usage / data.traffic.max >= 0.8
                                            ? 'usage-text-danger'
                                            : 'usage-text') + ' text-end mb-0'
                                    }
                                >
                                    {data.traffic.usage}MB
                                </p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
            <Row className="mb-4">
                <Card className="node-detail-card">
                    <Card.Body className="mt-0">
                        <Row className="mb-0">
                            <Col xs={7}>
                                <div className="d-flex px-md-1">
                                    <div>
                                        <h5 className="info-text">
                                            <b>
                                                <DeviceHdd /> &nbsp;디스크 사용률
                                            </b>
                                        </h5>
                                    </div>
                                </div>
                            </Col>
                            <Col className="value-text text-end">
                                <h1>{data.disk}%</h1>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <div className="mb-0 info-value text-end">
                                <span class="align-middle">
                                    <div class="progress mt-3 mb-1 rounded">
                                        <div
                                            class="progress-bar node-usage-bar"
                                            role="progressbar"
                                            style={{ width: data.disk + '%' }}
                                            aria-valuenow={data.disk}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </span>
                            </div>
                        </Row>
                        <p className="name-text-muted mb-0">&nbsp;</p>
                    </Card.Body>
                </Card>
            </Row>
        </>
    );
};

export default NodeDetailCard;