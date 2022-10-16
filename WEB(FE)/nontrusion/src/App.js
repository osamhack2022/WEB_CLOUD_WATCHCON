import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Cluster from './pages/Cluster';
import AnalyzeLog from './pages/AnalyzeLog';
import Events from './pages/Events';
import ManageNode from './pages/ManageNode';
import AddNode from './pages/AddNode';
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
            <Route path="/cluster" element={<Cluster />} />
            <Route path="/analyze-log" element={<AnalyzeLog />} />
            <Route path="/events" element={<Events />} />
            <Route path="/manage-node" element={<ManageNode />} />
            <Route path="/add-node" element={<AddNode />} />
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