import React from 'react';
import NodeList from './NodeList';

const NodeListSection = ({ selectedCluster, nodeList, nodeState }) => {
    const [selectedNodeId, setSelectedNodeId] = nodeState;

    let information = (selected) => {
        switch (selected) {
            case 'node-normal':
                return '정상 서버';
            case 'node-warning':
                return '주의를 요하는 서버';
            case 'node-danger':
                return '위험 서버';
            case 'node-stop':
                return '중단된 서버';
            default:
                throw new Error('information() : Unexpected Property');
        }
    };

    // 여기서 NodeList의 인자를 API로 불어오게 하면 됨
    return (
        <section>
            <h4>
                <b>"{information(selectedCluster)}"</b> 그룹의 서버 {nodeList.length}개
            </h4>
            <NodeList nodeList={nodeList} setting={setSelectedNodeId} selected={selectedNodeId} />
        </section>
    );
};

export default NodeListSection;