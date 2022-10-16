import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ListUl, Grid3x2GapFill } from 'react-bootstrap-icons';

import './head.css';

const Head = ({ view, changeView }) => {
    return (
        <Row className="mt-4 mb-4">
            <Col>
                <div className="d-flex justify-content-start">
                    <h5>
                        <b>5개의 서버가 등록되어 있습니다.</b>
                    </h5>
                </div>
            </Col>
            <Col>
                <div className="d-flex justify-content-end">
                    <div onClick={changeView}>
                        <h6 className="head-text">
                            {view === 'card-view' ? (
                                <ListUl fill={'#5a68bc'} width={20} height={20} />
                            ) : (
                                <Grid3x2GapFill width={21} height={14} />
                            )}

                            <b>&nbsp; {view === 'card-view' ? '목록' : '카드'}형 보기</b>
                        </h6>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Head;