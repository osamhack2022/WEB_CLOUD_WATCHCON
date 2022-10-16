/*
 * getNodeDetail(selectedId)
 * - selectedId : 선택된 노드의 id
 */
const getNodeDetail = (selectedId) => {
    // Node Detail 받아오는 API 연결
    
    if (selectedId === 2) {
    return {
        nodeId: 2,
        nodeName: 'Data Analysis Server',
        nodeClassification: 'Server',
        nodeState: false,
        cpuUsage: [17, 16, 15, 17, 15, 16, 15],
        memoryUsage: [35, 38, 34, 36, 32, 34, 31],
        errors: [
            {
                code: 'FATAL:Node has stopped.',
                message: '서비스가 중단됨',
            },
            {
                code: 'SSHD Daemon has stopped.',
                message: '서비스가 중단됨',
            },
        ],
    };
    }
    return {
        nodeId: 1,
        nodeName: 'Data Sync Server',
        nodeClassification: 'Server',
        nodeState: true,
        cpuUsage: [7, 6, 7, 7, 8, 5, 6],
        memoryUsage: [78, 71, 75, 70, 73, 73, 71],
        errors: [
            {
                code: 'FATAL:Node has stopped.',
                message: '서비스가 중단됨',
            },
            {
                code: 'SSHD Daemon has stopped.',
                message: '서비스가 중단됨',
            },
        ],
    };
};

export default getNodeDetail;