import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ClusterNow from './ClusterNow';

const ClusterSection = (props) => {
    return (
        <section className="mb-3">
            <Row>
                <Col xl={3} sm={6} className="mb-4">
                    <ClusterNow
                        info="node-normal"
                        value={props.values.normal}
                        setting={props.setting}
                    />
                </Col>
                <Col xl={3} sm={6} className="mb-4">
                    <ClusterNow
                        info="node-warning"
                        value={props.values.warning}
                        setting={props.setting}
                    />
                </Col>
                <Col xl={3} sm={6} className="mb-4">
                    <ClusterNow
                        info="node-danger"
                        value={props.values.danger}
                        setting={props.setting}
                    />
                </Col>
                <Col xl={3} sm={6} className="mb-4">
                    <ClusterNow
                        info="node-stop"
                        value={props.values.stop}
                        setting={props.setting}
                    />
                </Col>
            </Row>
        </section>
    );
};

export default ClusterSection;