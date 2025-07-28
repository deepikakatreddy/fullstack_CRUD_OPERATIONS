// src/components/Sidebar.js
import React, { useState } from 'react';
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaBell, FaFileInvoiceDollar, FaCubes, FaBars } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'User Profile', icon: <FaUser /> },
    { to: '/notifications', label: 'Notifications', icon: <FaBell /> },
    { to: '/billing', label: 'Billing & Invoices', icon: <FaFileInvoiceDollar /> },
    { to: '/plans', label: 'Plans & Add-ons', icon: <FaCubes /> },
  ];

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <Nav className="flex-column">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.to;
          const content = (
            <Nav.Link
              as={Link}
              to={item.to}
              className={`sidebar-link ${isActive ? 'active' : ''}`}
            >
              <span className="icon">{item.icon}</span>
              {!collapsed && <span className="label">{item.label}</span>}
            </Nav.Link>
          );

          return collapsed ? (
            <OverlayTrigger
              key={index}
              placement="right"
              overlay={<Tooltip>{item.label}</Tooltip>}
            >
              {content}
            </OverlayTrigger>
          ) : (
            <div key={index}>{content}</div>
          );
        })}
      </Nav>
    </div>
  );
};

export default Sidebar;
