import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Alerts from './pages/Alerts';
import ManageNode from './pages/ManageNode';
import AddNode from './pages/add-node/AddNode';
import AddNodeSuccess from './pages/add-node/AddNodeSuccess';
import ToAgent from './pages/add-node/ToAgent';
import ManageService from './pages/ManageService';
import AddService from './pages/AddService';
import Report from './pages/Report';
import ManageSystem from './pages/ManageSystem';
import AddUser from './pages/AddUser';

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Link to="/dashboard">to Dashboard</Link>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/manage-node" element={<ManageNode />} />
            <Route path="/add-node" element={<AddNode />} />
            <Route path="/add-node/success" element={<AddNodeSuccess />} />
            <Route path="/add-node/to-agent" element={<ToAgent />} />
            <Route path="/manage-service" element={<ManageService />} />
            <Route path="/add-service" element={<AddService />} />
            <Route path="/report" element={<Report />} />
            <Route path="/manage-system" element={<ManageSystem />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="*" element={<p>page not found</p>} />
        </Routes>
    );
};

export default App;