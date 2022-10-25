import React from 'react';
import { Table } from 'react-bootstrap';
import { PlusCircle } from 'react-bootstrap-icons';
import './alertsTable.css';

const AlertsTable = ({ data }) => {
    return (
        <Table class="align-middle mb-0 bg-white">
            <thead>
                <tr>
                    <th>
                        <p className="table-head mb-0">
                            <b>경고 이름</b>
                        </p>
                    </th>
                    <th>
                        <p className="table-head mb-0">
                            <b>발생 시각</b>
                        </p>
                    </th>
                    <th>
                        <p className="table-head mb-0">
                            <b>서버(서버)</b>
                        </p>
                    </th>
                    <th>
                        <p className="table-head mb-0">
                            <b>경고 정보</b>
                        </p>
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((err) => {
                    return (
                        <tr>
                            <td>
                                <p class="alert-type mb-0">
                                    <b>{err.type}</b>
                                </p>
                            </td>
                            <td>
                                <p class="alert-time">
                                    <b>{err.time}</b>
                                </p>
                            </td>
                            <td>
                                <p class="alert-server-name">
                                    <b>{err.serverName}</b>
                                </p>
                            </td>
                            <td>
                                <p class="alert-detail">
                                    <b>{err.detail}</b>
                                </p>
                            </td>
                        </tr>
                    );
                })}
                <tr>
                    <td className="text-center" colspan="4">
                        <button
                            style={{
                                backgroundColor: 'transparent',
                                margin: 0,
                                padding: 0,
                                height: '100%',
                                width: '100%',
                                border: 0,
                            }}
                        >
                            <h5 className="show-more-button">
                                <PlusCircle />
                                <b>&nbsp;&nbsp;더보기</b>
                            </h5>
                        </button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};

export default AlertsTable;