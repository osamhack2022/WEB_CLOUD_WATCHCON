/*
 * getClusterGroup()
 * - retrun format : { normal: X, warning: X, danger: X, stop: X }
 */
const getClusterGroup = () => {
    // Cluster Group 수량 받아오는 API 연결
    return {
        normal: 15,
        warning: 2,
        danger: 5,
        stop: 3,
    };
};

export default getClusterGroup;