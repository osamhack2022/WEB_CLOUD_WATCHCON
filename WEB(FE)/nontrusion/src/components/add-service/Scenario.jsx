import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';

const Scenario = ({ nextPage }) => {
    return (
        <Form className="add-service-form">
            <Row className="mb-5">
                <Col>
                    <Form.Group>
                        <Form.Label>시나리오 이름</Form.Label>
                        <Form.Control
                            type="text"
                            id="scenarioName"
                            className="text-input-field"
                            placeholder="시나리오 이름"
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Form.Group>
                        <Form.Label>HTTP 프록시</Form.Label>
                        <Form.Control
                            type="text"
                            id="httpProxy"
                            className="text-input-field"
                            placeholder="HTTP 프록시"
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Form.Group>
                        <Form.Label>업데이트 간격</Form.Label>
                        <Form.Select
                            id="updateTerm"
                            className="select-option-field"
                            aria-label="update-term"
                        >
                            <option value="15">15초</option>
                            <option value="30">30초</option>
                            <option value="60">1분</option>
                            <option value="300">5분</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>시나리오 시도 횟수</Form.Label>
                        <Form.Select
                            id="timeOfTry"
                            className="select-option-field"
                            aria-label="time-of-try"
                        >
                            <option value="10">10회</option>
                            <option value="15">15회</option>
                            <option value="20">20회</option>
                            <option value="25">25회</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Form.Group>
                        <Form.Label>변수</Form.Label>
                        <Form.Select
                            id="variable"
                            className="select-option-field"
                            aria-label="variable"
                        >
                            <option value="0">설정되지 않음</option>
                            <option value="wtf">직접 추가</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>헤더</Form.Label>
                        <Form.Select
                            id="header"
                            className="select-option-field"
                            aria-label="header"
                        >
                            <option value="0">설정되지 않음</option>
                            <option value="wtf">2 개의 헤더 설정됨</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col>
                    <Button type="submit" onClick={nextPage} className="submit-button text-start">
                        <Row>
                            <Col>절차 등록하기</Col>
                            <Col className="d-flex justify-content-end">
                                <ArrowRight height="30px" />
                            </Col>
                        </Row>
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default Scenario;