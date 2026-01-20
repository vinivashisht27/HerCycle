import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  // --- STATE MANAGEMENT ---
  const [userName, setUserName] = useState("Priya Sharma");
  const [isEditing, setIsEditing] = useState(false);

  // Hide sidebar on login
  if (location.pathname === '/login') return null;

  // Navigation Items
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> },
    { name: 'Calendar', path: '/calendar', icon: <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /> },
    { name: 'Wellness', path: '/wellness', icon: <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /> },
    { name: 'Reminders', path: '/reminders', icon: <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /> },
    { name: 'Insights', path: '/insights', icon: <path d="M23 6l-9.5 9.5-5-5L1 18" /> },
    { name: 'Settings', path: '/settings', icon: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></> },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white/40 backdrop-blur-2xl border-r border-white/50 z-50 flex flex-col transition-all duration-300">
      
      {/* Header & Logo */}
      <div className="p-8 pb-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent flex items-center gap-2">
          HerCycle 🌸
        </h1>
      </div>

      {/* Main Action Button */}
      <div className="px-6 mb-6">
        <Link to="/add-log" className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-xl shadow-lg shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all font-bold">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
          Log Symptoms
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group 
                ${isActive 
                  ? 'bg-pink-100 text-pink-600 font-bold shadow-sm' 
                  : 'text-gray-500 hover:bg-white/50 hover:text-pink-500'
                }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isActive ? "2.5" : "2"} strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section: Profile Only */}
      <div className="p-6 mt-auto border-t border-white/50 space-y-4">
        
        {/* Editable Profile Section */}
        <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl transition hover:bg-white">
           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" alt="User" className="w-10 h-10 rounded-full bg-white shadow-sm" />
           
           <div className="flex-1 overflow-hidden">
             {isEditing ? (
               <input 
                 type="text" 
                 value={userName}
                 onChange={(e) => setUserName(e.target.value)}
                 onBlur={() => setIsEditing(false)}
                 onKeyDown={(e) => e.key === 'Enter' && setIsEditing(false)}
                 autoFocus
                 className="w-full text-sm font-bold text-gray-800 bg-transparent border-b border-pink-500 focus:outline-none"
               />
             ) : (
               <div className="flex justify-between items-center group">
                 <div>
                   <p className="text-sm font-bold text-gray-800 truncate">{userName}</p>
                   <p className="text-xs text-gray-500 truncate">Free Plan</p>
                 </div>
                 <button 
                   onClick={(e) => { e.preventDefault(); setIsEditing(true); }}
                   className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-pink-500 transition"
                 >
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                 </button>
               </div>
             )}
           </div>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;