import React from 'react';
import { Card } from 'react-bootstrap';
import {
    CheckCircleFill,
    ExclamationTriangle,
    ExclamationTriangleFill,
    StopCircleFill,
} from 'react-bootstrap-icons';

const ClusterNow = (props) => {
    let Information = (props) => {
        switch (props.info) {
            case 'node-normal':
                return (
                    <>
                        <CheckCircleFill /> &nbsp;정상 노드
                    </>
                );
            case 'node-warning':
                return (
                    <>
                        <ExclamationTriangle /> &nbsp;주의를 요하는 노드
                    </>
                );
            case 'node-danger':
                return (
                    <>
                        <ExclamationTriangleFill /> &nbsp;위험 노드
                    </>
                );
            case 'node-stop':
                return (
                    <>
                        <StopCircleFill /> &nbsp;중단된 노드
                    </>
                );
            default:
                throw new Error('Information() : Unexpected Property');
        }
    };

    return (
        <Card className="cluster-now-card">
            <button className="cluster-now-btn" onClick={() => props.setting(props.info)}>
                <Card.Body>
                    <div className="d-flex px-md-1">
                        <div>
                            <h5 className="info-text">
                                <b>
                                    <Information info={props.info} />
                                </b>
                            </h5>
                        </div>
                    </div>
                    <Card.Footer className="mb-0 info-value text-end">
                        <h2>{props.value}</h2>
                    </Card.Footer>
                </Card.Body>
            </button>
        </Card>
    );
};

export default ClusterNow;