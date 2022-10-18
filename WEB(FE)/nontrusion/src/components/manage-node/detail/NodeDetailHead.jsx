import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Head = ({ action, node }) => {
    return (
        <Row className="mt-4 mb-2">
            <Col xs={10}>
                    <Row className="mb-2">
                <div class="d-flex justify-content-start px-md-1">
                        <Col xs={2}>
                            <div className="d-flex justify-content-center mb-1">
                                <img
                                    src="server-image.png"
                                    alt="Server"
                                    style={{ height: '100px' }}
                                />
                            </div>
                        </Col>
                        <Col className="node-detail mt-4" style={{ padding: 'auto' }}>
                            <div style={{ height: '100px' }}>
                                <h5 className="card-subtitle mb-1 node-detail-sub-text">
                                    <b>{node.group}</b>
                                </h5>
                                <h2 className="card-title node-name">
                                    <b>{node.name}</b>
                                </h2>
                            </div>
                        </Col>
                </div>
                    </Row>
            </Col>
            <Col>
                <div className="d-flex justify-content-end">
                    <div onClick={action}>
                        <h6 className="head-text">
                            <b>돌아가기</b>
                        </h6>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Head;