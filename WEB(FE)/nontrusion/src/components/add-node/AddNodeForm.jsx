import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const AddNodeFrom = () => {
    return (
        <Form>
            <Row class="mb-4">
                <Col>
                    <div class="form-outline">
                        <input type="text" id="form6Example1" class="form-control" />
                        <label class="form-label" for="form6Example1">
                            서버 관리 별칭
                        </label>
                    </div>
                </Col>
                <Col>
                    <div class="form-outline">
                        <input type="text" id="form6Example2" class="form-control" />
                        <label class="form-label" for="form6Example2">
                            서버 그룹 선택
                        </label>
                    </div>
                </Col>
            </Row>

            <Row class="mb-4">
                <Col>
                    <div class="form-outline">
                        <input type="text" id="form6Example3" class="form-control" />
                        <label class="form-label" for="form6Example3">
                            IP 주소
                        </label>
                    </div>
                </Col>
                <Col>
                    <div class="form-outline">
                        <input type="text" id="form6Example4" class="form-control" />
                        <label class="form-label" for="form6Example4">
                            DNS 주소
                        </label>
                    </div>
                </Col>
            </Row>

            <Row class="mb-4">
                <Col>
                    <div class="form-outline">
                        <input type="text" id="form6Example5" class="form-control" />
                        <label class="form-label" for="form6Example5">
                            호스트 이름 (Hostname)
                        </label>
                    </div>
                </Col>
                <Col>
                    <div class="form-outline">
                        <input type="text" id="form6Example6" class="form-control" />
                        <label class="form-label" for="form6Example6">
                            서비스 선택
                        </label>
                    </div>
                </Col>
                <Col>
                    <div class="form-outline">
                        <input type="text" id="form6Example7" class="form-control" />
                        <label class="form-label" for="form6Example7">
                            운영체제 선택
                        </label>
                    </div>
                </Col>
            </Row>

            <div class="form-outline mb-4">
                <textarea class="form-control" id="form6Example8" rows="4"></textarea>
                <label class="form-label" for="form6Example8">
                    주석
                </label>
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4">
                모니터링 서버 추가하기
            </button>
        </Form>
    );
};

export default AddNodeFrom;