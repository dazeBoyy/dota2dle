import React, { useState, useEffect } from 'react';
import { Hero, getRandomHero, heroes } from './data/heroes';
import { GuessInput } from './components/GuessInput';
import { GuessResult } from './components/GuessResult';
import { Trophy, Flag, Sparkles } from 'lucide-react';

function App() {
  const [answer, setAnswer] = useState<Hero | null>(null);
  const [guesses, setGuesses] = useState<Hero[]>([]);
  const [gameWon, setGameWon] = useState(false);
  const [gaveUp, setGaveUp] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setAnswer(getRandomHero());
  }, []);

  const handleGuess = (hero: Hero) => {
    const newGuesses = [hero, ...guesses];
    setGuesses(newGuesses);
    
    if (hero.name === answer?.name) {
      setGameWon(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  const handleGiveUp = () => {
    setGaveUp(true);
  };

  if (!answer) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-24 h-24 bg-purple-600/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-12 h-12 text-purple-400" />
          </div>
          <div className="text-purple-400 font-medium">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Add confetti effect here if desired */}
        </div>
      )}

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
        <div 
          className="bg-gradient-to-r from-purple-500 to-pink-400 h-2 rounded-full 
                    transition-all duration-500" 
          style={{ width: `${(guesses.length / 8) * 100}%` }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-8 relative">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={handleGiveUp}
            disabled={gameWon || gaveUp}
            className="px-4 py-2 bg-red-500/20  text-white rounded-lg 
                    
                     hover:bg-red-500/30 transition-all duration-300
                     border border-red-500/30 shadow-lg shadow-red-500/10
                     flex items-center gap-2 group"
          >
            <Flag className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>Give Up</span>
          </button>
        </div>
        <header className="text-center mb-12 relative">
            {/* Фоновый градиент */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 
                          blur-3xl transform -skew-y-6 -z-10">
              
            </div>
          
            {/* Скрещенные мечи */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 animate-swordpulse">
              <svg 
                viewBox="0 0 48 48" 
                className="max-w-[200px] max-h-[200px] transform scale-300"
              >
                <linearGradient id="swordGradient">
                  <stop offset="0" stopColor="#f45560" />
                  <stop offset="1" stopColor="#cf1928" />
                </linearGradient>
                <path 
                  fill="url(#swordGradient)"
                  fillRule="evenodd"
                  d="M13.046,28.177l5.717,6.432c0.53,0.596,0.183,1.542-0.606,1.654l-4.747,0.678c-0.263,0.038-0.529-0.031-0.741-0.19l-3.04-2.28c-0.369-0.277-0.501-0.77-0.319-1.194l2.07-4.83C11.668,27.774,12.559,27.629,13.046,28.177z M32.491,11.245l2.848,1.424c0.393,0.196,0.611,0.626,0.539,1.059l-0.632,3.794c-0.117,0.703-0.912,1.061-1.516,0.684l-5.345-3.341c-0.633-0.396-0.625-1.321,0.016-1.705l3.129-1.877C31.822,11.107,32.185,11.093,32.491,11.245z M11.625,11c0.375,0,0.676,0.016,1.125,0.375c0.565,0.452,21.577,15.319,25.591,18.159c0.386,0.273,0.525,0.77,0.338,1.204c-0.603,1.401-1.877,4.383-2.423,5.66C36.1,36.766,35.74,37,35.34,37h-2.901c-0.28,0-0.547-0.117-0.736-0.323L9.938,13.02c-0.47-0.51-0.291-1.334,0.35-1.6C10.819,11.199,11.37,11,11.625,11z M15.243,6.277C15.058,6.097,14.814,6,14.555,6H6C5.472,6.264,5,6.57,5,7.625V14.5v2.264c0,0.155,0.036,0.308,0.106,0.447l0.671,1.342c0.141,0.282,0.141,0.613,0,0.894L5,21v1l1,1v1l-0.707,0.707C5.105,24.895,5,25.149,5,25.414v3.172c0,0.265,0.105,0.52,0.293,0.707l0.414,0.414C5.895,29.895,6,30.149,6,30.414l0,3.092c0,0.296-0.135,0.582-0.364,0.769C4.967,34.822,5,35.122,5,36l0,4.235c0,0.446,0.302,0.837,0.73,0.962C7.372,41.675,7.638,42,10,42c2.363,0,4,0,4,0c0.614,0,1.228-0.504,1.61-0.795c0.264-0.201,0.624-0.277,0.922-0.131C17.005,41.307,17.616,42,18.414,42c0.642,0,1.664-1,2.212-1c0.348,0,1.229,0.712,1.229,0.712c0.096,0.048,0.184,0.111,0.26,0.187l0.592,0.808C22.895,42.895,23.149,43,23.414,43h1.193c0.232,0,0.458-0.076,0.634-0.227C25.579,42.482,26.24,42.014,27,42l4.737,0c0.16,0,0.315-0.036,0.457-0.111c0.275-0.144,0.788-0.592,1.197-0.791c0.392-0.191,0.862-0.105,1.161,0.21c0.056,0.059,0.111,0.119,0.162,0.174C34.903,41.689,35.169,42,35.448,42h2.138c0.265,0,0.52-0.105,0.707-0.293l0.279-0.412c0.264-0.264,0.649-0.361,1.006-0.247c0.325,0.103,1.353,0.732,2.198,0.927C42.402,42.119,43,41.643,43,41V28c0-0.552-0.448-1-1-1h-1l0.707-0.707C41.895,26.105,42,25.851,42,25.586v-3.35c0-0.155-0.036-0.308-0.106-0.447l-0.572-1.144c-0.192-0.385-0.117-0.85,0.187-1.154L42,19v-1l0.707-0.707C42.895,17.105,43,16.851,43,16.586v-3.463c0-0.082-0.01-0.163-0.03-0.243l-0.833-3.331C42.052,9.209,42.152,8.848,42.4,8.6L43,8V7l-0.766-0.766c-0.152-0.152-0.349-0.251-0.562-0.282l-3.158-0.463l-0.792,0.567l-0.424-0.62C37.111,5.163,36.803,5,36.472,5H31c-0.617,0-0.999,0.397-0.999,0.993C30.001,6.138,30,7,29,7s-1-1-1-1s0-1-1.149-1h-6.3c-0.336,0-0.649,0.166-0.833,0.447C19.332,6.036,18.644,7,18.278,7C17.75,7,17.62,7,17,7C16.138,7,15.548,6.573,15.243,6.277z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          
            {/* Текст заголовка */}
            <h1 className="text-6xl font-bold mb-3 bg-clip-text text-transparent 
                         bg-gradient-to-r from-purple-400 to-pink-400 relative z-10">
              Dotadle
            </h1>
            <p className="text-gray-400 text-lg relative z-10">
              Guess the Dota 2 hero!
            </p>
        </header>
               
        <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
          <GuessInput 
            onGuess={handleGuess}
            disabled={gameWon || gaveUp}
            guessedHeroes={guesses}
          />

          <div className="w-full space-y-3">
            <div className="grid grid-cols-[145px_100px_80px_80px_80px_80px_100px_150px] gap-2 w-full max-w-5xl p-2 bg-gray-800 rounded-lg items-center">
              <p className="ml-20"><strong>Name:</strong></p>
              <p  className="ml-20" ><strong>Primary Attribute:</strong></p>
              <p className="ml-20"><strong>Attack Type:</strong></p>
              <p className="ml-20"><strong>Roles:</strong> </p>
              <p className="ml-20"><strong>Legs:</strong></p>
              <p className="ml-20"><strong>Gender:</strong></p>
              <p className="ml-20"><strong>Complexity:</strong></p>
              <p className="ml-20"><strong>Release Year:</strong></p>
            </div>
            {guesses.map((guess, index) => (
              <div key={index} className="transform transition-all duration-300">
                <GuessResult 
                  guess={guess} 
                  answer={answer} 
                  isGuessed={guess.name === answer.name}
                />
              </div>
            ))}
          </div>

          {(gameWon || gaveUp) && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="relative bg-gray-800 rounded-xl p-8 max-w-md w-full 
                        border border-purple-500/30 shadow-2xl shadow-purple-500/10
                        transform transition-all duration-300 animate-fadeIn">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {gameWon ? (
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full"></div>
                  <Trophy className="w-16 h-16 text-yellow-400 animate-bounce" />
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute inset-0 bg-red-400/20 blur-xl rounded-full"></div>
                  <Flag className="w-16 h-16 text-red-400" />
                </div>
              )}
            </div>

            <div className="space-y-4 text-center mt-8">
              {gameWon ? (
                <>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 
                               bg-clip-text text-transparent">
                    Congratulations!
                  </h2>
                  <p className="text-gray-300 text-lg">
                    You guessed it in {guesses.length} {guesses.length === 1 ? 'try' : 'tries'}!
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-red-400">Game Over</h2>
                  <p className="text-gray-300 text-lg">
                    The hero was{' '}
                    <span className="font-bold text-purple-400">{answer.name}</span>
                  </p>
                </>
              )}

              <button
                onClick={() => {
                  setAnswer(getRandomHero());
                  setGuesses([]);
                  setGameWon(false);
                  setGaveUp(false);
                }}
                className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
                         text-white rounded-lg hover:from-blue-600 hover:to-purple-600 
                         transition-all duration-300 transform hover:scale-[1.02]
                         shadow-lg shadow-purple-500/20"
              >
                Play Again
              </button>
            </div>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
}
export default App;