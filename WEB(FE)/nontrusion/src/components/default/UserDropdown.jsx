import React from 'react';
import { Dropdown } from 'react-bootstrap';

const UserDropdown = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle
                href="#"
                className="d-flex align-items-center text-decoration-none shadow-none"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <img
                    src="https://github.com/mdo.png"
                    alt=""
                    width="32"
                    height="32"
                    className="rounded-circle me-2"
                />
                <strong className="name-space text-start	">이름넣는부분</strong>
            </Dropdown.Toggle>
            <Dropdown.Menu className="text-small" aria-labelledby="userDropdown">
                <Dropdown.Item href="#">버튼 1</Dropdown.Item>
                <Dropdown.Item href="#">버튼 2</Dropdown.Item>
                <Dropdown.Item href="#">버튼 3</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Sign out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default UserDropdown;