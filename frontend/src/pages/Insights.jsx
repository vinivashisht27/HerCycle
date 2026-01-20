import React from 'react';

const Insights = () => {
  return (
    <div className="animate-fade-in-up pb-24">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Health Insights</h2>
      
      {/* Graph Card */}
      <div className="bg-white/60 backdrop-blur-xl p-6 rounded-[2rem] shadow-sm border border-white/50 mb-6">
        <div className="flex justify-between items-end mb-6">
          <div>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Cycle Length</p>
            <p className="text-3xl font-bold text-gray-800 mt-1">28 Days</p>
          </div>
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold border border-green-200">Regular ✅</span>
        </div>

        {/* CSS Bar Chart */}
        <div className="h-40 flex items-end justify-between gap-3 px-2">
          {[28, 29, 27, 28, 30, 28].map((h, i) => (
            <div key={i} className="w-full flex flex-col items-center gap-2 group">
              <div 
                style={{height: `${(h/35)*100}%`}} 
                className={`w-full rounded-t-xl transition-all duration-500 ${i === 5 ? 'bg-gradient-to-t from-pink-500 to-rose-400 shadow-lg shadow-pink-200' : 'bg-pink-200 opacity-50'}`}
              ></div>
              <span className="text-[10px] font-bold text-gray-400">{['Aug','Sep','Oct','Nov','Dec','Jan'][i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-gray-700 ml-2">Trends</h3>
        
        <div className="bg-white/60 backdrop-blur-xl p-4 rounded-2xl border border-white/50 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center">⚡</div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-800">Energy Level</h4>
            <p className="text-xs text-gray-500">Highest during ovulation</p>
          </div>
          <span className="text-sm font-bold text-gray-800">High</span>
        </div>

        <div className="bg-white/60 backdrop-blur-xl p-4 rounded-2xl border border-white/50 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center">💤</div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-800">Sleep Quality</h4>
            <p className="text-xs text-gray-500">Average duration</p>
          </div>
          <span className="text-sm font-bold text-gray-800">7h 12m</span>
        </div>
      </div>
    </div>
  );
};

export default Insights;