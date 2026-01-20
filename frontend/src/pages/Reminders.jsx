import React, { useState } from 'react';

const Toggle = ({ label, time }) => {
  const [on, setOn] = useState(true);
  return (
    <div className="flex items-center justify-between p-4 bg-white/50 rounded-2xl mb-3">
      <div>
        <p className="font-bold text-gray-700">{label}</p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>
      <button onClick={() => setOn(!on)} className={`w-12 h-6 rounded-full p-1 transition-colors ${on ? 'bg-pink-500' : 'bg-gray-300'}`}>
        <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${on ? 'translate-x-6' : ''}`}></div>
      </button>
    </div>
  );
};

const Reminders = () => {
  return (
    <div className="animate-fade-in-up pb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Smart Reminders 🔔</h2>
      
      <div className="bg-white/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white/50 shadow-sm">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Daily</h3>
        <Toggle label="Period Reminder" time="2 days before" />
        <Toggle label="Ovulation Day" time="Morning of" />
        <Toggle label="Water Intake" time="Every 2 hours" />
        <Toggle label="Medicine / Pill" time="09:00 AM" />
      </div>

      <div className="bg-white/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white/50 shadow-sm mt-6">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Hygiene</h3>
        <Toggle label="Change Pad/Cup" time="Every 6 hours" />
      </div>
    </div>
  );
};
export default Reminders;