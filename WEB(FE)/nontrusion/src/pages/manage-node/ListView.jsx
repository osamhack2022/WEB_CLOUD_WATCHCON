import React from 'react';
import NodeListTable from '../../components/manage-node/home/NodeListTable';

const ListView = ({ setting, selectDetailView, nodeList }) => {
    return <NodeListTable setting={setting} select={selectDetailView} nodeList={nodeList} />;
};

export default ListView;