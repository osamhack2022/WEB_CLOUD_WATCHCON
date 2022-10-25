import React from 'react';
import { ExclamationCircleFill } from 'react-bootstrap-icons';

const NodeError = ({ errors }) => {
    return (
        <>
            {errors.map((error) => (
                <div key={error.code}>
                    <h5 className="detail-error-count">
                        <ExclamationCircleFill
                            fill="red"
                            style={{ width: '30px', height: '30px' }}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <b>{error.message}</b>
                    </h5>
                    <div className="node-detail-error-code">
                        <p>
                            <b>{error.code}</b>
                        </p>
                    </div>
                    <hr />
                </div>
            ))}
            <div className="text-center node-detail-seemore">
                <p>
                    <b>더 보기</b>
                </p>
            </div>

            <div
                style={{
                    width: '100%',
                    borderBottom: '2px solid #3f5573',
                }}
            ></div>
        </>
    );
};

export default NodeError;