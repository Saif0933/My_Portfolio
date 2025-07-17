import React from 'react';

interface AnimatedBackgroundProps {
  darkMode: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ darkMode }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large floating circles */}
        <div
          className={`absolute w-96 h-96 rounded-full opacity-5 animate-float-slow ${
            darkMode ? 'bg-blue-400' : 'bg-blue-600'
          }`}
          style={{
            left: '10%',
            top: '20%',
            animationDelay: '0s',
            animationDuration: '20s',
          }}
        />
        <div
          className={`absolute w-64 h-64 rounded-full opacity-5 animate-float-medium ${
            darkMode ? 'bg-purple-400' : 'bg-purple-600'
          }`}
          style={{
            right: '15%',
            top: '10%',
            animationDelay: '5s',
            animationDuration: '15s',
          }}
        />
        <div
          className={`absolute w-80 h-80 rounded-full opacity-5 animate-float-slow ${
            darkMode ? 'bg-indigo-400' : 'bg-indigo-600'
          }`}
          style={{
            left: '60%',
            bottom: '20%',
            animationDelay: '10s',
            animationDuration: '25s',
          }}
        />

        {/* Medium floating squares */}
        <div
          className={`absolute w-32 h-32 opacity-10 animate-rotate-slow ${
            darkMode ? 'bg-gradient-to-br from-blue-400 to-purple-400' : 'bg-gradient-to-br from-blue-500 to-purple-500'
          }`}
          style={{
            left: '20%',
            bottom: '30%',
            animationDelay: '3s',
            transform: 'rotate(45deg)',
            borderRadius: '20%',
          }}
        />
        <div
          className={`absolute w-24 h-24 opacity-10 animate-rotate-reverse ${
            darkMode ? 'bg-gradient-to-br from-purple-400 to-pink-400' : 'bg-gradient-to-br from-purple-500 to-pink-500'
          }`}
          style={{
            right: '25%',
            bottom: '40%',
            animationDelay: '7s',
            transform: 'rotate(30deg)',
            borderRadius: '30%',
          }}
        />

        {/* Small floating triangles */}
        <div
          className={`absolute w-16 h-16 opacity-15 animate-bounce-slow ${
            darkMode ? 'bg-cyan-400' : 'bg-cyan-500'
          }`}
          style={{
            left: '80%',
            top: '60%',
            animationDelay: '2s',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        />
        <div
          className={`absolute w-12 h-12 opacity-15 animate-bounce-slow ${
            darkMode ? 'bg-emerald-400' : 'bg-emerald-500'
          }`}
          style={{
            left: '5%',
            top: '70%',
            animationDelay: '8s',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        />

        {/* Floating dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-full opacity-20 animate-pulse ${
              darkMode ? 'bg-blue-300' : 'bg-blue-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div
          className="absolute w-72 h-72 rounded-full opacity-5 animate-pulse-slow"
          style={{
            right: '5%',
            top: '50%',
            background: darkMode 
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.1) 70%, transparent 100%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.05) 70%, transparent 100%)',
            animationDelay: '4s',
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full opacity-5 animate-pulse-slow"
          style={{
            left: '5%',
            bottom: '10%',
            background: darkMode 
              ? 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.1) 70%, transparent 100%)'
              : 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(59, 130, 246, 0.05) 70%, transparent 100%)',
            animationDelay: '9s',
          }}
        />

        {/* Animated lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={darkMode ? "#3b82f6" : "#1e40af"} stopOpacity="0.3" />
              <stop offset="100%" stopColor={darkMode ? "#8b5cf6" : "#7c3aed"} stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q250,50 500,100 T1000,100"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-line"
          />
          <path
            d="M0,200 Q300,150 600,200 T1200,200"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            className="animate-draw-line"
            style={{ animationDelay: '3s' }}
          />
        </svg>

        {/* Floating code symbols */}
        <div className="absolute inset-0">
          {['</', '/>', '{}', '[]', '()', '&&', '=>', '++'].map((symbol, i) => (
            <div
              key={symbol}
              className={`absolute text-2xl font-mono opacity-5 animate-float-code ${
                darkMode ? 'text-blue-300' : 'text-blue-600'
              }`}
              style={{
                left: `${15 + (i * 12)}%`,
                top: `${20 + (i * 8)}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            >
              {symbol}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;