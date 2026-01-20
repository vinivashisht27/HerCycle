import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate a login network request
    setTimeout(() => {
      setIsLoading(false);
      navigate('/'); // Redirect to Home after 1.5 seconds
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#FFF0F3] flex items-center justify-center p-4">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 animate-fade-in-up">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent mb-2">
            HerCycle 🌸
          </h1>
          <p className="text-gray-500 text-sm">Welcome back, beautiful!</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Email</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-pink-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <input 
                type="email" 
                placeholder="hello@example.com"
                className="w-full pl-10 pr-4 py-3 bg-white/50 border border-pink-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all text-gray-700 placeholder-gray-400"
                required 
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Password</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-pink-500 transition">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 bg-white/50 border border-pink-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all text-gray-700 placeholder-gray-400"
                required 
              />
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-xs text-pink-500 hover:text-pink-700 font-medium">Forgot Password?</a>
            </div>
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full py-3.5 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold rounded-xl shadow-lg shadow-pink-500/30 active:scale-95 transition-all flex justify-center items-center gap-2 hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging In...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
            <div className="relative flex justify-center text-sm"><span className="px-2 bg-white/0 backdrop-blur-xl text-gray-400 bg-[#FFF6F8]">Or continue with</span></div>
          </div>

          <div className="flex gap-4 justify-center">
            <button className="p-2 bg-white border border-gray-100 rounded-full shadow-sm hover:bg-gray-50 transition">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-6 h-6" alt="Google" />
            </button>
            <button className="p-2 bg-white border border-gray-100 rounded-full shadow-sm hover:bg-gray-50 transition">
              <img src="https://www.svgrepo.com/show/448234/apple.svg" className="w-6 h-6" alt="Apple" />
            </button>
          </div>

          <p className="text-sm text-gray-500">
            Don't have an account? <span className="text-pink-600 font-bold cursor-pointer hover:underline">Sign Up</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;