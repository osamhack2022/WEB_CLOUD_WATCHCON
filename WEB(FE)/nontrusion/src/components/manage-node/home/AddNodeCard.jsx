import React from 'react';
import { Card } from 'react-bootstrap';
import { PlusCircle } from 'react-bootstrap-icons';
import './nodeCard.css';

const AddNodeCard = () => {
    return (
        <Card className="mb-4 border add-node-card shadow-none">
            <a
                className="shadow-none"
                href="/add-node"
                style={{
                    backgroundColor: 'transparent',
                    margin: 0,
                    padding: 0,
                    height: '100%',
                }}
            >
                <Card.Body
                    className="d-flex justify-content-center"
                    style={{
                        backgroundColor: 'transparent',
                        margin: 0,
                        padding: 0,
                        height: '100%',
                    }}
                >
                    <div className="align-self-center">
                        <h3 className="add-server-button">
                            <PlusCircle width={35} height={35} />
                            <b>&nbsp;&nbsp;서버 추가하기</b>
                        </h3>
                    </div>
                </Card.Body>
            </a>
        </Card>
    );
};

export default AddNodeCard;