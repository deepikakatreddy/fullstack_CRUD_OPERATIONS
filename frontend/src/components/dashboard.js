import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar'; // example

function Dashboard() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        {/* Rest of the dashboard content */}
      </div>
    </>
  );
}

export default Dashboard;
