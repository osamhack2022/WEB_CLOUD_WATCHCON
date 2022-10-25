import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideNav from '../../components/default/SideNav';
import AddNodeForm from '../../components/add-node/AddNodeForm';

const AddNode = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col
                        xs={2}
                        id="sidebar-wrapper"
                        style={{
                            padding: '0',
                        }}
                    >
                        <SideNav selected={'add-node'} />
                    </Col>
                    <Col
                        id="page-content-wrapper"
                        className="p-5"
                    >
                        <Container>
                            <AddNodeForm />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddNode;