# User Account Management System

A full-stack **CRUD API service** for **User Account Creation**, built using **Node.js (Express)** on the backend and **React-Bootstrap** on the frontend. This project includes a responsive dashboard with navigation for managing user profiles, notifications, billing, and plans.


## 📌 Features

- 🔐 **Create User Account** (Email, First Name, Last Name, Password)
- ✏️ **Full CRUD API** for user data
- 📊 **Dashboard Pages**:
  - Profile Management
  - Notifications
  - Billing & Invoices
  - Plans & Add-ons
- 🎨 **Responsive UI** using React-Bootstrap

## Tech Stack
Frontend: React, React-Bootstrap

Backend: Node.js with Express

Database: SQLite (using better-sqlite3 package)

## 🖥️ Dashboard Navigation

The left-side navigation bar includes links to:

- 👤 **User Profile** – Manage personal info  
- 🔔 **Notifications** – Toggle notification settings  
- 💳 **Billing & Invoices** – View past payments  
- 📦 **Plans & Add-ons** – Manage your subscription  

Each page uses structured **form elements**, styled with **React-Bootstrap**, and is fully **responsive** across devices.

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/fullstack_CRUD_OPERATIONS.git
cd fullstack_CRUD_OPERATIONS

##2.Backend Setup (Node.js + SQLite)
cd backend
npm install
node index.js
## 3.Frontend Setup (React)
cd frontend
npm install
npm start

##output
### 🧩 Dashboard Overview  
![Dashboard](./screenshots/dashboard.png)

### 👤 User Profile  
![User Profile](./screenshots/userprofile.png)

### 👥 Users Page  
![Users](./screenshots/users.png)

### 🔔 Notifications Settings  
![Notifications](./screenshots/notifications.png)

### 💳 Billing & Invoices  
![Billing](./screenshots/bills.png)

### 📦 Plans & Add-ons  
![Plans](./screenshots/plans.png)



