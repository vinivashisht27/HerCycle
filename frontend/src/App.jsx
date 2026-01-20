import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Import Pages
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Insights from './pages/Insights';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import AddLog from './pages/AddLog';
import Login from './pages/Login';
import Wellness from './pages/Wellness'; // <--- Import
import Reminders from './pages/Reminders'; // <--- Import

import Sidebar from './components/Sidebar';

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="min-h-screen bg-[#FFF0F3] font-sans selection:bg-pink-200 text-gray-800 relative overflow-hidden flex">
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-rose-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="fixed bottom-0 left-20 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-4000 pointer-events-none"></div>

      {!isLoginPage && <Sidebar />}

      <main className={`flex-1 relative z-10 transition-all duration-300 ${!isLoginPage ? 'ml-64' : 'ml-0'}`}>
        <div className="p-8 max-w-7xl mx-auto h-screen overflow-y-auto scrollbar-hide">
          {children}
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/add-log" element={<AddLog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wellness" element={<Wellness />} /> {/* New Route */}
        <Route path="/reminders" element={<Reminders />} /> {/* New Route */}
      </Routes>
    </Layout>
  );
}

export default App;