import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import NodeDetailCard from '../../components/manage-node/detail/NodeDetailCard';
import NodeDetailHead from '../../components/manage-node/detail/NodeDetailHead';
import getNodeDetail from '../../components/manage-node/getNodeDetail';

const NodeDetail = ({ backAction, selected }) => {
    const detail = getNodeDetail(selected);
    return (
        <>
            <NodeDetailHead action={backAction} node={detail} />
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        <NodeDetailCard data={detail} />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
};

export default NodeDetail;