/*
 * getNodeList(selected)
 * - String selected : 선택된 클러스터 그룹 종류
 *      node-normal / node-warning / node-danger / node-stop
 */
const getNodeList = (selected) => {
    // Node List 받아오는 API 연결
    if (selected === 'node-normal') {
        return [
            {
                id: 1,
                classification: 'Server',
                name: 'Data Sync Server',
                state: true,
            },
        ];
    }
    return [
        {
            id: 1,
            classification: 'Server',
            name: 'Data Sync Server',
            state: true,
        },
        {
            id: 2,
            classification: 'Server',
            name: 'Data Analysis Server',
            state: false,
        },
    ];
};

export default getNodeList;