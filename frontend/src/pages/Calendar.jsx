import React from 'react';

const Calendar = () => {
  // Simulating data
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const periodDays = [1, 2, 3, 4, 5]; // Days user had period
  const predictedDays = [28, 29, 30, 31]; // Predicted next period

  return (
    <div className="animate-fade-in-up pb-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">January 2026</h2>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-white text-gray-600 shadow-sm flex items-center justify-center hover:bg-pink-50">←</button>
          <button className="w-8 h-8 rounded-full bg-white text-gray-600 shadow-sm flex items-center justify-center hover:bg-pink-50">→</button>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-xl p-6 rounded-[2rem] shadow-sm border border-white/50">
        {/* Days Header */}
        <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-gray-400 mb-4 uppercase tracking-wide">
          {['S','M','T','W','T','F','S'].map(d => <span key={d}>{d}</span>)}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center">
          {days.map(day => {
            const isPeriod = periodDays.includes(day);
            const isPredicted = predictedDays.includes(day);
            const isToday = day === 13;

            return (
              <div key={day} className="flex flex-col items-center justify-center h-10 w-full relative">
                <div className={`
                  w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-all cursor-pointer
                  ${isToday ? 'bg-gray-800 text-white shadow-lg scale-110 z-10' : ''}
                  ${isPeriod ? 'bg-pink-500 text-white shadow-md shadow-pink-300' : ''}
                  ${isPredicted ? 'border-2 border-pink-300 text-pink-500 border-dashed' : ''}
                  ${!isToday && !isPeriod && !isPredicted ? 'text-gray-600 hover:bg-white' : ''}
                `}>
                  {day}
                </div>
                {/* Dot indicator underneath */}
                {isPeriod && <div className="absolute -bottom-1 w-1 h-1 bg-pink-500 rounded-full"></div>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex gap-4 justify-center text-xs text-gray-500 font-medium">
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-pink-500 rounded-full"></div> Period</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 border-2 border-pink-300 border-dashed rounded-full"></div> Predicted</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-gray-800 rounded-full"></div> Today</div>
      </div>
    </div>
  );
};

export default Calendar;