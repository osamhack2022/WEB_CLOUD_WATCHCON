import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';

const Procedure = ({ prevPage, nextPage }) => {
    return (
        <Form className="add-service-form">
            <Row className="mb-5">
                <Col>
                    <Form.Group>
                        <Form.Label>서비스 이름</Form.Label>
                        <Form.Control
                            type="text"
                            id="serviceName"
                            className="text-input-field"
                            placeholder="서비스 이름"
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col xs={8}>
                    <Form.Group>
                        <Form.Label>URL</Form.Label>
                        <Form.Control
                            type="text"
                            id="url"
                            className="text-input-field"
                            defaultValue="http://localhost:8080"
                        />
                    </Form.Group>
                </Col>
                <Col xs={4}>
                    <Form.Group>
                        <Form.Label>최대 연결 시간</Form.Label>
                        <Form.Select
                            id="timeMax"
                            className="select-option-field"
                            aria-label="time-of-try"
                        >
                            <option defaultValue="15">15초</option>
                            <option defaultValue="30">30초</option>
                            <option defaultValue="60">1분</option>
                            <option defaultValue="300">5분</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Form.Group>
                        <Form.Label>응답코드 요구사항</Form.Label>
                        <Form.Control
                            type="text"
                            id="responseCode"
                            className="text-input-field"
                            defaultValue="HTTP 200"
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Form.Group>
                        <Form.Label>응답 문구 요구사항</Form.Label>
                        <Form.Control
                            type="text"
                            id="responseMessage"
                            className="text-input-field"
                            defaultValue="OK!"
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button type="submit" onClick={prevPage} className="submit-button text-start">
                        <Row>
                            <Col xs={2} className="d-flex justify-content-start">
                                <ArrowLeft height="30px" />
                            </Col>
                            <Col xs={10} className="text-end">
                                시나리오 수정하기
                            </Col>
                        </Row>
                    </Button>
                </Col>
                <Col></Col>
                <Col>
                    <Button type="submit" onClick={nextPage} className="submit-button text-start">
                        <Row>
                            <Col xs={10} className="text-start">
                                절차 등록하기
                            </Col>
                            <Col xs={2} className="d-flex justify-content-end">
                                <ArrowRight height="30px" />
                            </Col>
                        </Row>
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default Procedure;