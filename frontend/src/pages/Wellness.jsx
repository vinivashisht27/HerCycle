import React, { useState } from 'react';

const Wellness = () => {
  const [breathing, setBreathing] = useState(false);

  return (
    <div className="animate-fade-in-up pb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Wellness & Care 🧘‍♀️</h2>

      {/* Breathing Tool */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2.5rem] p-8 text-white text-center shadow-lg mb-8 relative overflow-hidden">
        <h3 className="text-xl font-bold mb-4">Take a Moment</h3>
        <div className={`w-32 h-32 mx-auto rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 transition-all duration-[4000ms] ${breathing ? 'scale-150' : 'scale-100'}`}>
          <span className="font-bold text-lg">{breathing ? 'Exhale...' : 'Inhale...'}</span>
        </div>
        <button 
          onClick={() => setBreathing(!breathing)}
          className="px-6 py-2 bg-white text-purple-600 rounded-full font-bold shadow-md active:scale-95 transition"
        >
          {breathing ? 'Stop' : 'Start Breathing'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Yoga Recommendations */}
        <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white/50 shadow-sm">
           <div className="flex justify-between items-center mb-4">
             <h3 className="font-bold text-gray-700">Recommended for Follicular</h3>
             <span className="text-2xl">🧘‍♀️</span>
           </div>
           <div className="space-y-3">
             {['Sun Salutations (5 mins)', 'Warrior II Pose', 'Cobra Stretch'].map((item, i) => (
               <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl">
                 <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 text-xs font-bold">{i+1}</div>
                 <span className="text-sm font-medium text-gray-700">{item}</span>
               </div>
             ))}
           </div>
        </div>

        {/* Food Tips */}
        <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white/50 shadow-sm">
           <div className="flex justify-between items-center mb-4">
             <h3 className="font-bold text-gray-700">Nutrition Tips</h3>
             <span className="text-2xl">🥑</span>
           </div>
           <ul className="space-y-2 text-sm text-gray-600 font-medium">
             <li>• Eat fermented foods (kimchi, yogurt)</li>
             <li>• Focus on lean proteins</li>
             <li>• Stay hydrated with electrolytes</li>
           </ul>
        </div>
      </div>
    </div>
  );
};
export default Wellness;