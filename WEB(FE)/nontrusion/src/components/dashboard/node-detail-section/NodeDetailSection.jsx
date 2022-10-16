import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ArrowUpCircle, ArrowDownCircle, ExclamationCircleFill } from 'react-bootstrap-icons';

import NodeError from './NodeError';
import './nodeDetail.css';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const options = {
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        y: {
            min: 0,
            max: 100,
            stepSize: 10,
        },
        x: {},
    },
};

const formData = (data) => {
    return {
        labels: ['12시간 전', '10시간 전', '8시간 전', '6시간 전', '4시간 전', '2시간 전', '현재'],
        datasets: [
            {
                label: 'CPU 사용량',
                data: data,
                borderColor: '#3f5573',
                backgroundColor: '#7790a6',
            },
        ],
    };
};

const NodeDetailSection = ({ nodeDetail }) => {
    const { nodeName, nodeClassification, nodeState, errors } = nodeDetail;
    const { cpuUsage, memoryUsage } = nodeDetail;

    return (
        <section>
            <div className="mb-4">
                <Row>
                    <Col xs={3}>
                        <div className="d-flex justify-content-center mb-1">
                            <img src="server-image.png" alt="Server" style={{ height: '80px' }} />
                        </div>
                        <div className="align-items-center text-center">
                            <div className={nodeState ? 'node-detail-up' : 'node-detail-down'}>
                                <h5>
                                    {nodeState ? <ArrowUpCircle /> : <ArrowDownCircle />}
                                    &nbsp;{nodeState ? 'UP' : 'DOWN'}
                                </h5>
                            </div>
                        </div>
                    </Col>
                    <Col className="node-detail mt-2" style={{ padding: 'auto' }}>
                        <div style={{ height: '80px' }}>
                            <h4 className="card-subtitle mb-2 node-detail-sub-text">
                                {nodeClassification}
                            </h4>
                            <h2 className="card-title">
                                <b>{nodeName}</b>
                            </h2>
                        </div>
                        <h5 className="detail-error-count">
                            <ExclamationCircleFill
                                fill="red"
                                style={{ width: '30px', height: '30px' }}
                            />
                            &nbsp;&nbsp;&nbsp;<b>{errors.length} 오류</b>
                        </h5>
                    </Col>
                </Row>
            </div>
            <div className="mb-4">
                <div className="info-line">
                    <span className="info-line-text">
                        <b>기록된 오류 상황</b>
                    </span>
                </div>
            </div>
            <Row className="mb-3">
                <Col>
                    <NodeError errors={errors} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="mb-4">
                        <div className="info-line">
                            <span className="info-line-text">
                                <b>자원 사용량</b>
                            </span>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3>CPU</h3>
                                </div>
                                <div className="panel-body">
                                    <Line options={options} data={formData(cpuUsage)} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3>RAM</h3>
                                </div>
                                <div className="panel-body">
                                    <Line options={options} data={formData(memoryUsage)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </section>
    );
};

export default NodeDetailSection;