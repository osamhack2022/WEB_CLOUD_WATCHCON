import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SideNav from '../components/default/SideNav';
import AddServiceHead from '../components/add-service/AddServiceHead';

import Scenario from '../components/add-service/Scenario';
import Procedure from '../components/add-service/Procedure';
import Finished from '../components/add-service/Finished';

import '../components/add-service/addServiceForm.css';

const AddService = () => {
    const configProcess = useState('scenario');
    const configFormData = useState({});

    const AddServiceForm = ({ configProcess, configFormData }) => {
        const [process, setProcess] = configProcess;
        const [formData, setFormData] = configFormData;

        switch (process) {
            case 'scenario':
                return (
                    <>
                        <AddServiceHead view={process} />
                        <Scenario
                            nextPage={() => setProcess('procedure')}
                            configFormData={configFormData}
                        />
                    </>
                );
            case 'procedure':
                return (
                    <>
                        <AddServiceHead view={process} />
                        <Procedure
                            prevPage={() => setProcess('scenario')}
                            nextPage={() => setProcess('finished')}
                            configFormData={configFormData}
                        />
                    </>
                );
            case 'finished':
                return <Finished data={formData} width="692px" height="393px" />;
            default:
                setProcess('scenario');
                return (
                    <Scenario nextPage={() => setProcess('procedure')} updateData={setFormData} />
                );
        }
    };

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
                        <SideNav selected={'add-service'} />
                    </Col>
                    <Col
                        id="page-content-wrapper"
                        style={{
                            padding: '0',
                        }}
                    >
                        <Container className="pt-4">
                            <AddServiceForm
                                configProcess={configProcess}
                                configFormData={configFormData}
                            />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddService;