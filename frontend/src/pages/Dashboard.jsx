import React from 'react';
import { useNavigate } from 'react-router-dom';

// Helper component for Neutral Insights
const InsightPill = ({ icon, text }) => (
  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-white/60">
    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-lg shadow-sm">{icon}</div>
    <span className="text-sm font-medium text-gray-700 leading-tight">{text}</span>
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in-up pb-10 space-y-6">
      
      {/* 1. Cycle Status (Objective Fact Only) */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-8 text-white shadow-xl overflow-hidden">
        {/* Abstract Data Viz Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">Current Status</span>
              <h2 className="text-4xl font-extrabold mt-2">Day 12</h2>
              <p className="text-gray-300 text-sm font-medium mt-1">Follicular Phase</p>
            </div>
            {/* Scientific 'Learning' Badge */}
            <div className="text-right">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-500 rounded-full text-[10px] font-bold shadow-lg shadow-pink-900/50">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                LEARNING PATTERNS
              </div>
            </div>
          </div>

          {/* Data-Driven Insight (Simulation) */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Your Personal Model</h3>
            <p className="font-medium text-sm leading-relaxed">
              "Based on your last 2 cycles, your <span className="text-pink-300">Energy</span> remains stable (Avg: 8.2/10) during this phase. You typically maintain high training loads without performance drops."
            </p>
          </div>
        </div>
      </div>

      {/* 2. Intelligent Prompt System */}
      <div>
        <h3 className="font-bold text-gray-800 mb-4 ml-2">Today's Data Collection</h3>
        <div className="bg-white/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white/50 shadow-sm text-center">
           <p className="text-gray-600 font-medium mb-6">
             We don't predict how you feel. We ask. <br/>
             <span className="text-xs text-gray-400">Help us build your performance model.</span>
           </p>
           
           <button 
             onClick={() => navigate('/add-log')}
             className="w-full py-4 bg-pink-600 text-white rounded-2xl font-bold shadow-lg hover:bg-pink-700 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
           >
             <span>Start Daily Check-In</span>
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
           </button>
        </div>
      </div>

      {/* 3. Objective Analytics (Not Horoscope) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white/50 shadow-sm">
           <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">Pattern Detection</h3>
           <div className="space-y-3">
             <InsightPill icon="⚖️" text="Mood stability detected across phases." />
             <InsightPill icon="💪" text="Strength outputs consistent (+/- 2%)." />
             <InsightPill icon="🧠" text="Focus dips slightly on Day 26-28." />
           </div>
        </div>

        <div className="bg-white/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white/50 shadow-sm">
           <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">Coach's Suggestion</h3>
           <p className="text-sm text-gray-600 mb-4">
             Since your data shows high stability this week, would you like to keep your standard routine?
           </p>
           <div className="flex gap-2">
             <button className="flex-1 py-2 bg-white border border-gray-200 rounded-xl text-xs font-bold hover:bg-gray-50">Keep Routine</button>
             <button className="flex-1 py-2 bg-white border border-gray-200 rounded-xl text-xs font-bold hover:bg-gray-50">Adjust Volume</button>
           </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;