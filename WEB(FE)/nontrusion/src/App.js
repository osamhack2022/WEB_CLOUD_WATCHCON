import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ManageNode from './pages/ManageNode';

const App = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manage-node" element={<ManageNode />} />
        </Routes>
    );
};

export default App;