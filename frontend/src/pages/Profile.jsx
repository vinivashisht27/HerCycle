import React from 'react';

const Profile = () => {
  return (
    <div className="animate-fade-in-up pb-24">
      <div className="text-center pt-4 pb-8">
        <div className="relative inline-block">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 p-1 mx-auto">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" 
              alt="Profile" 
              className="w-full h-full rounded-full bg-white border-2 border-white"
            />
          </div>
          <button className="absolute bottom-0 right-0 bg-gray-800 text-white p-2 rounded-full shadow-lg">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </button>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Priya Sharma</h2>
        <p className="text-gray-500 text-sm">priya.sharma@example.com</p>
      </div>

      <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white/50 shadow-sm overflow-hidden">
        {[
          { label: 'Cycle Length', value: '28 Days' },
          { label: 'Period Length', value: '5 Days' },
          { label: 'Last Period', value: 'Jan 1, 2026' },
          { label: 'Goal', value: 'Track Cycle' },
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center p-5 border-b border-pink-50 last:border-0 hover:bg-white/50 transition">
            <span className="text-gray-500 font-medium">{item.label}</span>
            <span className="text-gray-800 font-bold">{item.value}</span>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-4 text-red-500 font-bold bg-white/50 rounded-2xl hover:bg-red-50 transition">
        Log Out
      </button>
    </div>
  );
};

export default Profile;