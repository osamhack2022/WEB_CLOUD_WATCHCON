import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
// import { ArrowUpCircle, ArrowDownCircle } from 'react-bootstrap-icons';
import './nodeList.css';

const NodeList = ({ nodeList, setting, selected }) => {
    return (
        <section>
            {nodeList.map((node) => {
                return (
                    <Card className={selected === node.id ? 'mb-4 node-selected' : 'mb-4'}>
                        <button
                            className="node-list-btn"
                            onClick={() => {
                                setting(node.id);
                            }}
                        >
                            <Card.Body>
                                <Row>
                                    <Col xs={4}>
                                        <div className="d-flex justify-content-center">
                                            <img
                                                src="server-image.png"
                                                alt="Server"
                                                style={{ height: '70px' }}
                                            />
                                        </div>
                                    </Col>
                                    <Col
                                        className={
                                            selected === node.id
                                                ? 'node-list-selected'
                                                : 'node-list'
                                        }
                                        style={{ padding: 'auto' }}
                                    >
                                        <h6 className="card-subtitle mb-2 node-list-sub-text">
                                            {node.classification}
                                        </h6>
                                        <h4 className="card-title">{node.name}</h4>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </button>
                    </Card>
                );
            })}
        </section>
    );
};

export default NodeList;