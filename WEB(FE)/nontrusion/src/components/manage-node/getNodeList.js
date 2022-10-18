const getNodeList = () => {
    return [
        {
            id: 1,
            group: '주요 서버',
            name: 'Core Server',
            activation: true,
            error: 0,
            cpuLoad: 28,
            memory: 100,
        },
        {
            id: 2,
            group: '중계 서버',
            name: 'Proxy Server',
            activation: true,
            error: 0,
            cpuLoad: 80,
            memory: 90,
        },
        {
            id: 3,
            group: '데이터 서버',
            name: 'Data Analysis Server',
            activation: true,
            error: 5,
            cpuLoad: 96,
            memory: 100,
        },
        {
            id: 4,
            group: '데이터 서버',
            name: 'Data Storage Server',
            activation: true,
            error: 0,
            cpuLoad: 12,
            memory: 100,
        },
        {
            id: 5,
            group: '데이터 서버',
            name: 'Data Sync Server',
            activation: false,
        },
    ];
};

export default getNodeList;