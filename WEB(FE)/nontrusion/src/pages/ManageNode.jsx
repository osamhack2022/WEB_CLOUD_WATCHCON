import React, { useState } from 'react';

import SideNav from '../components/default/SideNav';
import Head from '../components/manage-node/Head';

import CardView from './manage-node/CardView'; // default
import ListView from './manage-node/ListView';
import NodeDetail from './manage-node/NodeDetail';

import getNodeList from '../components/manage-node/getNodeList';

import { Container, Row, Col } from 'react-bootstrap';

const PageSelect = ({ selected, nodeSelected }) => {
    const [view, setting] = selected;
    const [selectedNode, setSelectedNode] = nodeSelected;

    switch (view) {
        case 'card-view':
            return (
                <>
                    <Head
                        view={view}
                        changeView={() => {
                            setting('list-view');
                        }}
                    />
                    <CardView
                        setting={setting}
                        selectDetailView={setSelectedNode}
                        nodeList={getNodeList()}
                    />
                </>
            );
        case 'list-view':
            return (
                <>
                    <Head
                        view={view}
                        changeView={() => {
                            setting('card-view');
                        }}
                    />
                    <ListView
                        setting={setting}
                        selectDetailView={setSelectedNode}
                        nodeList={getNodeList()}
                    />
                </>
            );
        case 'node-detail':
            return (
                <NodeDetail
                    backAction={() => {
                        setting('card-view');
                    }}
                    selected={selectedNode}
                />
            );
        default:
            return null;
    }
};

const ManageNode = () => {
    const pageSelected = useState('card-view');
    const nodeSelected = useState(0);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col
                        xs={2}
                        id="sidebar-wrapper"
                        style={{
                            padding: '0',
                        }}
                    >
                        <SideNav selected={'manage-node'} />
                    </Col>
                    <Col
                        id="page-content-wrapper"
                        style={{
                            padding: '0',
                        }}
                    >
                        <Container className="pt-4">
                            <PageSelect selected={pageSelected} nodeSelected={nodeSelected} />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ManageNode;