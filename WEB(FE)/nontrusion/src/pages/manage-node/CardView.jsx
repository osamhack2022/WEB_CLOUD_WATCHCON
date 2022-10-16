import React from 'react';
import { Row, Col } from 'react-bootstrap';

import NodeCard from '../../components/manage-node/home/NodeCard';
import AddNodeCard from '../../components/manage-node/home/AddNodeCard';

const CardView = ({ setting, nodeList }) => {
    return (
        <Row>
            {nodeList.map((node) => {
                return (
                    <Col xl={4} lg={6} xs={12}>
                        <NodeCard node={node} />
                    </Col>
                );
            })}

            <Col xl={4} lg={6} xs={12}>
                <AddNodeCard setting={setting} />
            </Col>
        </Row>
    );
};

export default CardView;