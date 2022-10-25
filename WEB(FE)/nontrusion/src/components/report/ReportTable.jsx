import React from 'react';
import { Table, Row, Col, Button } from 'react-bootstrap';
import { PlusCircle, Download, Printer } from 'react-bootstrap-icons';
import './reportTable.css';

const AlertsTable = ({ reports }) => {
    return (
        <Table className="align-middle mb-0 bg-white mt-4">
            <thead>
                <tr>
                    <th style={{ width: '25%' }}>
                        <p className="report-table-head mb-0">
                            <b>보고서</b>
                        </p>
                    </th>
                    <th style={{ width: '40%' }}>
                        <p className="report-table-head mb-0">
                            <b>해당 서버</b>
                        </p>
                    </th>
                    <th style={{ width: '35%' }}>
                        <p className="report-table-head mb-0">
                            <b>보고서 열람</b>
                        </p>
                    </th>
                </tr>
            </thead>
            <tbody>
                {reports.map((report) => {
                    return (
                        <tr>
                            <td>
                                <p className="report-table-text mb-0">{report.term}</p>
                            </td>
                            <td>
                                <p className="report-table-text mb-0">{report.server}</p>
                            </td>
                            <td style={{ padding: '5px' }}>
                                <Row className="mb-0" style={{ height: '50px' }}>
                                    <Col>
                                        <Button className="report-open-button btn-dark">
                                            <Download />
                                            <b>&nbsp;&nbsp;다운로드</b>
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button className="report-open-button btn-dark">
                                            <Printer />
                                            <b>&nbsp;&nbsp;인쇄</b>
                                        </Button>
                                    </Col>
                                </Row>
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
                            <h5 className="lookup-button">
                                <PlusCircle />
                                <b>&nbsp;&nbsp;조회</b>
                            </h5>
                        </button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};

export default AlertsTable;