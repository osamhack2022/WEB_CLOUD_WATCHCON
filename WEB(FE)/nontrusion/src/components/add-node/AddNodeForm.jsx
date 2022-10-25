import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './addNodeForm.css';

const AddNodeFrom = () => {
    return (
        <Form className="add-node-form">
            <Row className="mb-5">
                <Col>
                    <Form.Group>
                        <Form.Label>서버 별칭</Form.Label>
                        <Form.Control
                            type="text"
                            id="serverName"
                            className="text-input-field"
                            placeholder="서버 관리 별칭"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>서버 관리 그룹</Form.Label>
                        <Form.Select
                            id="serverGroup"
                            className="select-option-field"
                            aria-label="server-management-group"
                        >
                            <option>서버 그룹 선택</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Form.Group>
                        <Form.Label>IP 주소</Form.Label>
                        <Form.Control
                            type="text"
                            id="ipAdress"
                            className="text-input-field"
                            placeholder="IP 주소"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>DNS 주소</Form.Label>
                        <Form.Control
                            type="text"
                            id="dnsAdress"
                            className="text-input-field"
                            placeholder="DNS 주소"
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Form.Group>
                        <Form.Label>호스트 이름 (Hostname)</Form.Label>
                        <Form.Control
                            type="text"
                            id="hostName"
                            className="text-input-field"
                            placeholder="호스트 이름 (Hostname)"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>서비스</Form.Label>
                        <Form.Select
                            id="service"
                            className="select-option-field"
                            aria-label="service"
                        >
                            <option>서비스 선택</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>운영체제</Form.Label>
                        <Form.Select
                            id="os"
                            className="select-option-field"
                            aria-label="operator-system"
                        >
                            <option>운영체제 선택</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <div className="form-outline mb-5">
                <Form.Group>
                    <Form.Label>주석</Form.Label>
                    <Form.Control
                        as="textarea"
                        id="annotation"
                        className="textarea-input-field"
                        placeholder="주석"
                        rows={4}
                    />
                </Form.Group>
            </div>

            <Row>
                <Button type="submit" className="submit-button text-start">
                    모니터링 서버 추가하기
                </Button>
            </Row>
        </Form>
    );
};

export default AddNodeFrom;