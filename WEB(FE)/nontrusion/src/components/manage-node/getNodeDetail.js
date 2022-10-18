const getNodeDetail = (id) => {
    const Data = {
        1: {
            id: 1,
            group: '주요 서버',
            name: 'Core Server',
            activation: true,
            error: 0,
            cpu: {
                name: 'Intel® Xeon® E-2386G Processor',
                load: 28,
            },
            memory: {
                usage: 2048,
                max: 2048,
            },
            traffic: {
                usage: 30,
                max: 30,
            },
            disk: 98,
        },
        2: {
            id: 2,
            group: '중계 서버',
            name: 'Proxy Server',
            activation: true,
            error: 0,
            cpu: {
                name: 'Intel® Xeon® E-2386G Processor',
                load: 80,
            },
            memory: {
                usage: 1843,
                max: 2048,
            },
            traffic: {
                usage: 1024,
                max: 1024,
            },
            disk: 100,
        },
        3: {
            id: 3,
            group: '데이터 서버',
            name: 'Data Analysis Server',
            activation: true,
            error: 5,
            cpu: {
                name: 'Intel® Xeon® E-2386G Processor',
                load: 96,
            },
            memory: {
                usage: 2048,
                max: 2048,
            },
            traffic: {
                usage: 75,
                max: 100,
            },
            disk: 100,
        },
        4: {
            id: 4,
            group: '데이터 서버',
            name: 'Data Storage Server',
            activation: true,
            error: 0,
            cpu: {
                name: 'Intel® Xeon® E-2386G Processor',
                load: 12,
            },
            memory: {
                usage: 2048,
                max: 2048,
            },
            traffic: {
                usage: 160,
                max: 200,
            },
            disk: 41,
        },
        5: {
            id: 5,
            group: '데이터 서버',
            name: 'Data Sync Server',
            activation: false,
        },
    };

    return Data[id];
};

export default getNodeDetail;