import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { PlusCircle } from 'react-bootstrap-icons';
import './nodeCard.css';

const AddNodeCard = ({ setting }) => {
    return (
        <Card className="mb-4 border add-node-card shadow-none">
            <Button
                className="shadow-none"
                onClick={() => setting('add-node')}
                style={{
                    backgroundColor: 'transparent',
                    margin: 0,
                    padding: 0,
                    height: '100%',
                }}
            >
                <Card.Body className="d-flex justify-content-center">
                    <div className="align-self-center">
                        <h3 className="add-server-button">
                            <PlusCircle width={35} height={35} />
                            <b>&nbsp;&nbsp;서버 추가하기</b>
                        </h3>
                    </div>
                </Card.Body>
            </Button>
        </Card>
    );
};

export default AddNodeCard;