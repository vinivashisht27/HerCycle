import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- REUSABLE UI COMPONENTS ---

const Slider = ({ label, value, onChange, colorClass = "accent-gray-900" }) => (
  <div className="mb-6 last:mb-0">
    <div className="flex justify-between mb-3">
      <span className="font-bold text-gray-700 text-sm">{label}</span>
      <span className="font-bold text-gray-900 bg-white/50 px-2 py-0.5 rounded-md text-sm shadow-sm border border-gray-100">{value}/10</span>
    </div>
    <input 
      type="range" min="1" max="10" value={value} 
      onChange={(e) => onChange(parseInt(e.target.value))}
      className={`w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer ${colorClass} transition-all hover:bg-gray-300`}
    />
    <div className="flex justify-between text-[10px] uppercase font-bold text-gray-400 mt-2 tracking-wider">
      <span>Low</span>
      <span>Average</span>
      <span>Peak</span>
    </div>
  </div>
);

const ChipGroup = ({ label, options, selected, onSelect }) => (
  <div className="mb-6 last:mb-0">
    <span className="block font-bold text-gray-700 text-sm mb-3">{label}</span>
    <div className="grid grid-cols-2 gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className={`px-3 py-3 rounded-xl text-xs font-bold border transition-all duration-200 active:scale-95 ${
            selected === opt 
              ? 'bg-gray-800 text-white border-gray-800 shadow-lg shadow-gray-300/50 transform scale-[1.02]' 
              : 'bg-white text-gray-500 border-gray-100 hover:border-pink-300 hover:text-pink-600 shadow-sm'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---

const AddLog = () => {
  const navigate = useNavigate();
  
  // --- STATE ---
  const [energy, setEnergy] = useState(5);
  const [strength, setStrength] = useState(5);
  const [bodyFeel, setBodyFeel] = useState(null);
  const [focus, setFocus] = useState(5);
  const [stress, setStress] = useState(5);
  const [motivation, setMotivation] = useState(5);
  const [trained, setTrained] = useState(null);
  const [workload, setWorkload] = useState(null);

  const handleSave = () => {
    console.log({ energy, strength, bodyFeel, focus, stress, motivation, trained, workload });
    navigate('/');
  };

  return (
    // min-h-full ensures the page takes full height, flex-col organizes it top-to-bottom
    <div className="animate-fade-in-up min-h-full flex flex-col relative">
      
      {/* 1. HEADER SECTION */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)} 
            className="w-10 h-10 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:text-pink-600 hover:border-pink-200 transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div>
             <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Daily Check-In</h2>
             <p className="text-sm text-gray-500 font-medium">Log your metrics to build your personal model.</p>
          </div>
        </div>
        <div className="text-right hidden sm:block">
           <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Date</p>
           <p className="text-lg font-bold text-gray-800">Jan 13, 2026</p>
        </div>
      </div>

      {/* 2. MAIN GRID LAYOUT */}
      {/* flex-1 pushes the footer down. pb-10 adds space before the footer starts. */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        
        {/* COLUMN 1: PHYSICAL */}
        <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white/50 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
           <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-lg">⚡</div>
                <h3 className="text-sm font-black text-pink-600 uppercase tracking-widest">Physical</h3>
              </div>
              <div className="space-y-8">
                <Slider label="Energy Level" value={energy} onChange={setEnergy} colorClass="accent-pink-500" />
                <Slider label="Perceived Strength" value={strength} onChange={setStrength} colorClass="accent-pink-500" />
              </div>
           </div>
           <div className="mt-8 pt-6 border-t border-gray-100">
              <ChipGroup 
                label="Body Sensation" 
                options={['Light', 'Normal', 'Heavy', 'Tense']} 
                selected={bodyFeel} 
                onSelect={setBodyFeel} 
              />
           </div>
        </div>

        {/* COLUMN 2: MENTAL */}
        <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white/50 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
           <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-lg">🧠</div>
                <h3 className="text-sm font-black text-indigo-600 uppercase tracking-widest">Mental</h3>
              </div>
              <div className="space-y-8">
                <Slider label="Focus & Clarity" value={focus} onChange={setFocus} colorClass="accent-indigo-500" />
                <Slider label="Motivation" value={motivation} onChange={setMotivation} colorClass="accent-indigo-500" />
                <Slider label="Stress Level" value={stress} onChange={setStress} colorClass="accent-indigo-500" />
              </div>
           </div>
        </div>

        {/* COLUMN 3: LIFESTYLE */}
        <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white/50 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
           <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-lg">👟</div>
                <h3 className="text-sm font-black text-teal-600 uppercase tracking-widest">Lifestyle</h3>
              </div>
              
              <div className="mb-8">
                <span className="block font-bold text-gray-700 text-sm mb-3">Did you train today?</span>
                <div className="flex gap-3">
                  <button onClick={() => setTrained(true)} className={`flex-1 py-4 rounded-2xl font-bold border transition-all ${trained === true ? 'bg-gray-800 text-white border-gray-800 shadow-md' : 'bg-white text-gray-500 hover:border-gray-300'}`}>Yes</button>
                  <button onClick={() => setTrained(false)} className={`flex-1 py-4 rounded-2xl font-bold border transition-all ${trained === false ? 'bg-gray-800 text-white border-gray-800 shadow-md' : 'bg-white text-gray-500 hover:border-gray-300'}`}>No</button>
                </div>
              </div>

              <ChipGroup 
                label="Workload Intensity" 
                options={['Light', 'Medium', 'High', 'Intense']} 
                selected={workload} 
                onSelect={setWorkload} 
              />
           </div>
        </div>

      </div>

      {/* 3. STICKY FOOTER ACTION */}
      {/* sticky bottom-0: Sticks to the bottom of the SCROLL VIEW, not the screen. */}
      {/* -mx-8: Pulls the footer wide to match the container edges (counteracting p-8 padding) */}
      {/* -mb-8: Pulls it down to the very edge */}
      <div className="sticky bottom-0 -mx-8 -mb-8 z-40">
        <div className="p-6 bg-white/80 backdrop-blur-xl border-t border-white/50 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
          <div className="max-w-7xl mx-auto px-8">
            <button 
              onClick={handleSave} 
              className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold shadow-xl hover:bg-black hover:scale-[1.005] active:scale-95 transition-all flex items-center justify-center gap-3 text-lg"
            >
              <span>Save Daily Log</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AddLog;