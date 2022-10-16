import React from 'react';
import { Nav } from 'react-bootstrap';
import UserDropdown from './UserDropdown';
import { ReactComponent as Logo } from '../../static/image/logo.svg';
import './sidenav.css';

const SideNav = ({ selected }) => {
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
                    <Nav.Link
                        href="/dashboard"
                        className={selected === 'dashboard' ? 'active' : null}
                    >
                        대시보드
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        href="/cluster"
                        className={selected === 'cluster' ? 'active' : null}
                    >
                        서버클러스터
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        href="/analyze-log"
                        className={selected === 'analyze-log' ? 'active' : null}
                    >
                        로그 분석
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        href="/manage-node"
                        className={selected === 'manage-node' ? 'active' : null}
                    >
                        서버 관리
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        href="/manage-web"
                        className={selected === 'manage-web' ? 'active' : null}
                    >
                        웹서비스 관리
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/report" className={selected === 'report' ? 'active' : null}>
                        보고서
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        href="/manage-system"
                        className={selected === 'manage-system' ? 'active' : null}
                    >
                        체계 관리
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <hr />
            <UserDropdown />
        </div>
    );
};
export default SideNav;