import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import UserProfile from './components/UserProfile';
import UserList from './components/UserList';
import Notifications from './components/Notifications';
import Billing from './components/Billing';
import Plans from './components/Plans';
import Welcome from './components/Welcome'; // new

import './App.css';

function DashboardLayout() {
  return (
    <Container fluid>
      <Row>
        <Col xs={2} className="sidebar">
          <Sidebar />
        </Col>
        <Col xs={10} className="content">
          <Routes>
            <Route path="/dashboard" element={<UserProfile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/plans" element={<Plans />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/*" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
