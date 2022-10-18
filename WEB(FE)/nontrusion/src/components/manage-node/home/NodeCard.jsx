import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import {
    ArrowUpCircle,
    ArrowDownCircle,
    CheckCircle,
    ExclamationCircleFill,
    Cpu,
    SdCardFill,
} from 'react-bootstrap-icons';
import './nodeCard.css';

const NodeCard = ({ setting, select, node }) => {
    return (
        <Card
            className="mb-4 border node-card shadow-none"
            onClick={() => {
                if (node.activation) {
                    setting('node-detail');
                    select(node.id);
                }
            }}
        >
            <Card.Body>
                <div class="d-flex justify-content-between px-md-1">
                    <Row className="mb-2">
                        <Col xs={4}>
                            <div className="d-flex justify-content-center mb-1">
                                <img
                                    src="server-image.png"
                                    alt="Server"
                                    style={{ height: '70px' }}
                                />
                            </div>
                            <div className="align-items-center text-center">
                                <div
                                    className={
                                        node.activation ? 'node-detail-up' : 'node-detail-down'
                                    }
                                >
                                    <h5>
                                        {node.activation ? <ArrowUpCircle /> : <ArrowDownCircle />}
                                        &nbsp;{node.activation ? 'UP' : 'DOWN'}
                                    </h5>
                                </div>
                            </div>
                        </Col>
                        <Col className="node-detail mt-2" style={{ padding: 'auto' }}>
                            <div style={{ height: '70px' }}>
                                <h6 className="card-subtitle mb-1 node-detail-sub-text">
                                    <b>{node.group}</b>
                                </h6>
                                <h4 className="card-title node-name">
                                    <b>{node.name}</b>
                                </h4>
                            </div>
                            {node.activation && (
                                <h5
                                    className={
                                        node.error === 0 ? 'node-detail-up' : 'node-detail-down'
                                    }
                                >
                                    {node.error === 0 ? (
                                        <>
                                            <CheckCircle fill="#24e32b" />
                                            &nbsp;<b>정상</b>
                                        </>
                                    ) : (
                                        <>
                                            <ExclamationCircleFill fill="red" />
                                            &nbsp;<b>{node.error} 오류</b>
                                        </>
                                    )}
                                </h5>
                            )}
                        </Col>
                    </Row>
                </div>
                <div class="px-md-1">
                    <Row>
                        <Col xs={1}>
                            <Cpu fill="#3f5573" width="27px" height="27px" />
                        </Col>
                        <Col xs={9}>
                            <span class="align-middle">
                                <div class="progress mt-3 mb-1 rounded">
                                    <div
                                        class="progress-bar node-usage-bar"
                                        role="progressbar"
                                        style={{ width: node.cpuLoad + '%' }}
                                        aria-valuenow={node.cpuLoad}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </span>
                        </Col>
                        <Col xs={2}>
                            <p
                                className={
                                    'text-end ' +
                                    (!node.activation
                                        ? 'unused'
                                        : node.cpuLoad >= 80
                                        ? 'high-usage'
                                        : 'normal-usage')
                                }
                            >
                                <b>{node.cpuLoad || 0} %</b>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1}>
                            <SdCardFill fill="#3f5573" width="27px" height="27px" />
                        </Col>
                        <Col xs={9}>
                            <span class="align-middle">
                                <div class="progress mt-3 mb-1 rounded">
                                    <div
                                        class="progress-bar node-usage-bar"
                                        role="progressbar"
                                        style={{ width: node.memory + '%' }}
                                        aria-valuenow={node.memory}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </span>
                        </Col>
                        <Col xs={2}>
                            <p
                                className={
                                    'text-end ' +
                                    (!node.activation
                                        ? 'unused'
                                        : node.memory >= 80
                                        ? 'high-usage'
                                        : 'normal-usage')
                                }
                            >
                                <b>{node.memory || 0} %</b>
                            </p>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    );
};

export default NodeCard;