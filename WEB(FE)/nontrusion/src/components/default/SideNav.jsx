import React from 'react';
import { Nav } from 'react-bootstrap';
import UserDropdown from './UserDropdown';
import { ReactComponent as Logo } from '../../static/image/logo.svg';
import './sidenav.css';

const SideNav = () => {
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3"
            style={{
                background: '#3F5573',
                height: '100vh',
            }}
        >
            <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none pt-4"
            >
                <Logo width="90%" />
            </a>
            <hr />
            <Nav className="nav-pills flex-column mb-auto">
                <Nav.Item>
                    <Nav.Link href="#" className="active" aria-current="page">
                        대시보드
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">서버클러스터</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">로그 분석</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">노드 관리</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">웹서비스 관리</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">보고서</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">체계 관리</Nav.Link>
                </Nav.Item>
            </Nav>
            <hr />
            <UserDropdown />
        </div>
    );
};
export default SideNav;