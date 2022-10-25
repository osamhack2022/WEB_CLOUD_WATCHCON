import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ClusterSection from './cluster-section/ClusterSection';
import getClusterGroup from './getClusterGroup';

import NodeListSection from './node-list-section/NodeListSection';
import getNodeList from './getNodeList';

import NodeDetailSection from './node-detail-section/NodeDetailSection';
import getNodeDetail from './getNodeDetail';

import './dashboardView.css';

const DashboardView = (props) => {
    const [selectedCluster, setSelectedCluster] = useState('none');
    const [selectedNodeId, setSelectedNodeId] = useState('none');

    const clusterGroup = getClusterGroup();

    const MessageToClick = () => {
        return (
            <>
                <h1 className="message-to-click text-center">
                    <br />
                    <br />
                    <br />
                    <br />
                    <b>조회하고자 하는 서버 그룹을 선택하십시오.</b>
                </h1>
            </>
        );
    };

    return (
        <Container className="pt-4">
            <ClusterSection
                values={clusterGroup}
                setting={(value) => {
                    setSelectedCluster(value);
                    setSelectedNodeId('none');
                }}
            />
            {selectedCluster === 'none' ? (
                <MessageToClick />
            ) : (
                <NodeList
                    selected={selectedCluster}
                    clusterState={[selectedCluster, setSelectedCluster]}
                    nodeState={[selectedNodeId, setSelectedNodeId]}
                />
            )}
        </Container>
    );
};

const NodeList = ({ selected, nodeState }) => {
    const [selectedNodeId, setSelectedNodeId] = nodeState;
    const nodeList = getNodeList(selected);

    return (
        <Row>
            <Col xl={4} md={12}>
                <NodeListSection
                    selectedCluster={selected}
                    nodeList={nodeList}
                    nodeState={[selectedNodeId, setSelectedNodeId]}
                />
            </Col>
            <Col>
                {selectedNodeId === 'none' || <div className="vr" style={{ height: '100%' }}></div>}
            </Col>
            <Col xl={7} md={12}>
                {selectedNodeId === 'none' || <NodeDetail selected={selectedNodeId} />}
            </Col>
        </Row>
    );
};

const NodeDetail = ({ selected }) => {
    const detail = getNodeDetail(selected);

    return (
        <>
            <NodeDetailSection nodeDetail={detail} />
        </>
    );
};

export default DashboardView;