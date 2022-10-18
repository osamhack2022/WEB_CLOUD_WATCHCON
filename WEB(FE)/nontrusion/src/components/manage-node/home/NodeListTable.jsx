import React from 'react';
import { Table } from 'react-bootstrap';
import {
    ArrowUpCircle,
    ArrowDownCircle,
    CheckCircle,
    ExclamationCircleFill,
    PlusCircle,
} from 'react-bootstrap-icons';
import './nodeListTable.css';

const NodeListTable = ({ setting, select, nodeList }) => {
    return (
        <Table class="align-middle mb-0 bg-white">
            <thead>
                <tr>
                    <th>
                        <h5>
                            <b>서버 그룹</b>
                        </h5>
                    </th>
                    <th>
                        <h5>
                            <b>별칭</b>
                        </h5>
                    </th>
                    <th>
                        <h5>
                            <b>활성</b>
                        </h5>
                    </th>
                    <th>
                        <h5>
                            <b>동작상태</b>
                        </h5>
                    </th>
                    <th>
                        <h5>
                            <b>서버 부하</b>
                        </h5>
                    </th>
                    <th>
                        <h5>
                            <b>메모리 사용률</b>
                        </h5>
                    </th>
                </tr>
            </thead>
            <tbody>
                {nodeList.map((node) => {
                    return (
                        <tr
                            onClick={() => {
                                setting('node-detail');
                                select(node.id);
                            }}
                        >
                            <td>
                                <h5 class="node-detail-sub-text mb-0">
                                    <b>{node.group}</b>
                                </h5>
                            </td>
                            <td>
                                <h5 class="node-name mb-1">
                                    <b>{node.name}</b>
                                </h5>
                            </td>
                            <td
                                className={node.activation ? 'node-detail-up' : 'node-detail-down'}
                                colspan={node.activation ? 1 : 4}
                            >
                                <h5>
                                    {node.activation ? <ArrowUpCircle /> : <ArrowDownCircle />}
                                    &nbsp;{node.activation ? 'UP' : 'DOWN'}
                                </h5>
                            </td>
                            {node.activation && (
                                <>
                                    <td>
                                        <h5
                                            className={
                                                node.error === 0
                                                    ? 'node-detail-up'
                                                    : 'node-detail-down'
                                            }
                                        >
                                            {node.error === 0 ? (
                                                <>
                                                    <CheckCircle fill="#24e32b" />
                                                    &nbsp;<b>정상</b>
                                                </>
                                            ) : (
                                                <>
                                                    <ExclamationCircleFill fill="red" />
                                                    &nbsp;<b>{node.error} 오류</b>
                                                </>
                                            )}
                                        </h5>
                                    </td>
                                    <td>
                                        <h5
                                            className={
                                                !node.activation
                                                    ? 'unused'
                                                    : node.cpuLoad >= 80
                                                    ? 'high-usage'
                                                    : 'normal-usage'
                                            }
                                        >
                                            <b>{node.cpuLoad || 0} %</b>
                                        </h5>
                                    </td>
                                    <td>
                                        <h5
                                            className={
                                                !node.activation
                                                    ? 'unused'
                                                    : node.memory >= 80
                                                    ? 'high-usage'
                                                    : 'normal-usage'
                                            }
                                        >
                                            <b>{node.memory || 0} %</b>
                                        </h5>
                                    </td>
                                </>
                            )}
                        </tr>
                    );
                })}

                <tr>
                    <td className="text-center" colspan="6">
                        <a
                            href="/add-node"
                            style={{
                                backgroundColor: 'transparent',
                                margin: 0,
                                padding: 0,
                                height: '100%',
                                border: 0,
                            }}
                        >
                            <h5 className="add-server-button">
                                <PlusCircle />
                                <b>&nbsp;&nbsp;서버 추가하기</b>
                            </h5>
                        </a>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};

export default NodeListTable;