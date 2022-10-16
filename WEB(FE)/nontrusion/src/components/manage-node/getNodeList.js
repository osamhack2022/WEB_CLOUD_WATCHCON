const getNodeList = () => {
    return [
        {
            group: '주요 서버',
            name: 'Core Server',
            activation: true,
            error: 0,
            cpuLoad: 28,
            memory: 100,
        },
        {
            group: '중계 서버',
            name: 'Proxy Server',
            activation: true,
            error: 0,
            cpuLoad: 80,
            memory: 90,
        },
        {
            group: '데이터 서버',
            name: 'Data Analysis Server',
            activation: true,
            error: 5,
            cpuLoad: 96,
            memory: 100,
        },
        {
            group: '데이터 서버',
            name: 'Data Storage Server',
            activation: true,
            error: 0,
            cpuLoad: 12,
            memory: 100,
        },
        {
            group: '데이터 서버',
            name: 'Data Sync Server',
            activation: false,
        },
    ];
};

export default getNodeList;