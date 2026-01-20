import React from 'react';

const Settings = () => {
  return (
    <div className="animate-fade-in-up pb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Settings ⚙️</h2>

      {/* Cycle Settings */}
      <section className="mb-6">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 ml-2">Cycle Configuration</h3>
        <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-6 space-y-4">
           <div className="flex justify-between items-center border-b border-gray-100 pb-4">
             <span className="font-medium text-gray-700">Cycle Length</span>
             <span className="font-bold text-gray-800 bg-white px-3 py-1 rounded-lg">28 Days</span>
           </div>
           <div className="flex justify-between items-center">
             <span className="font-medium text-gray-700">Period Duration</span>
             <span className="font-bold text-gray-800 bg-white px-3 py-1 rounded-lg">5 Days</span>
           </div>
        </div>
      </section>

      {/* Theme */}
      <section className="mb-6">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 ml-2">App Appearance</h3>
        <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-6 flex gap-4">
           {['bg-pink-500', 'bg-purple-500', 'bg-teal-400', 'bg-gray-800'].map(color => (
             <div key={color} className={`w-10 h-10 rounded-full ${color} cursor-pointer hover:scale-110 transition ring-2 ring-offset-2 ring-transparent hover:ring-gray-300`}></div>
           ))}
        </div>
      </section>

      {/* Data & Privacy */}
      <section>
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 ml-2">Data & Privacy</h3>
        <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] overflow-hidden">
           <button className="w-full text-left p-5 border-b border-white/50 hover:bg-white/40 font-medium text-gray-700 flex justify-between">
             Export Data (PDF) 📄 <span>→</span>
           </button>
           <button className="w-full text-left p-5 hover:bg-white/40 font-medium text-gray-700 flex justify-between">
             Enable PIN Lock 🔒 <span>Off</span>
           </button>
        </div>
      </section>
    </div>
  );
};
export default Settings;