const getReports = (option) => {
    switch (option) {
        case 'daily':
            return [
                {
                    term: '2023/10/13',
                    server: 'Data Analysis Server',
                    file: '#',
                },
                {
                    term: '2023/10/13',
                    server: 'Core Server',
                    file: '#',
                },
                {
                    term: '2023/10/12',
                    server: 'Data Analysis Server',
                    file: '#',
                },
                {
                    term: '2023/10/12',
                    server: 'Core Server',
                    file: '#',
                },
                {
                    term: '2023/10/11',
                    server: 'Data Analysis Server',
                    file: '#',
                },
                {
                    term: '2023/10/11',
                    server: 'Core Server',
                    file: '#',
                },
            ];
        case 'weekly':
            return [
                {
                    term: '2023/10/3 ~ 10/9',
                    server: 'Data Analysis Server',
                    file: '#',
                },
                {
                    term: '2023/10/3 ~ 10/9',
                    server: 'Core Server',
                    file: '#',
                },
                {
                    term: '2023/9/26 ~ 10/2',
                    server: 'Data Analysis Server',
                    file: '#',
                },
                {
                    term: '2023/9/26 ~ 10/2',
                    server: 'Core Server',
                    file: '#',
                },
                {
                    term: '2023/9/19 ~ 9/25',
                    server: 'Data Analysis Server',
                    file: '#',
                },
                {
                    term: '2023/9/19 ~ 9/25',
                    server: 'Core Server',
                    file: '#',
                },
            ];
        case 'monthly':
            return [
                {
                    term: '2023/10',
                    server: 'Data Analysis Server',
                    file: '#',
                },
                {
                    term: '2023/10',
                    server: 'Core Server',
                    file: '#',
                },
                {
                    term: '2023/09',
                    server: 'Data Analysis Server',
                    file: '#',
                },
                {
                    term: '2023/09',
                    server: 'Core Server',
                    file: '#',
                },
                {
                    term: '2023/08',
                    server: 'Data Analysis Server',
                    file: '#',
                },
                {
                    term: '2023/08',
                    server: 'Core Server',
                    file: '#',
                },
            ];
        default:
            return null;
    }
};

export default getReports;