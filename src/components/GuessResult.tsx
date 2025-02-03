import React from 'react';
import { Hero } from '../data/heroes';
import { Check, ArrowUp, ArrowDown, Star } from 'lucide-react';

interface GuessResultProps {
  guess: Hero;
  answer: Hero;
  isGuessed: boolean;
}

export function GuessResult({ guess, answer, isGuessed }: GuessResultProps) {
  const isCorrect = (value: any, target: any) => value === target;
  
  // Функция для определения цвета и отображаемого значения
  const getHighlightedValue = (guessValues: string[], answerValues: string[]) => {
    if (guessValues[0] === answerValues[0]) {
      return { value: guessValues[0], color: 'bg-green-500/20 border-green-500/30' };
    }
    const matchingValue = guessValues.find(v => answerValues.includes(v));
    if (matchingValue) {
      return { value: matchingValue, color: 'bg-yellow-500/20   border-yellow-500/30' };
    }
    return { value: guessValues[0], color: 'bg-red-500/20  border-red-500/30' };
  };
  
  const roleDisplay = getHighlightedValue(guess.roles, answer.roles);
  const raceDisplay = getHighlightedValue(guess.race, answer.race);

  return (
    <div className={`grid grid-cols-[auto_1fr_1fr_1fr_1fr_auto_auto_auto] gap-3 w-full p-3
                    bg-gray-800/50 backdrop-blur-sm rounded-xl items-center
                    border border-gray-700/50 transition-all duration-300
                    ${isGuessed ? 'ring-2 ring-yellow-500/50 shadow-lg shadow-yellow-500/10' : ''}
                    hover:bg-gray-800/70`}>
      
      <div className="flex items-center gap-3 p-2 bg-gray-700/50 rounded-lg min-w-[220px] border border-gray-600/30">
        <div className="relative">
          <img 
            src={guess.image} 
            alt={guess.name}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="absolute inset-0 rounded-lg ring-1 ring-white/10"></div>
        </div>
        <span className="font-medium">{guess.name}</span>
      </div>
      
      <AttributeBox value={guess.primaryAttribute} isCorrect={isCorrect(guess.primaryAttribute, answer.primaryAttribute)} />
      <AttributeBox value={guess.attackType} isCorrect={isCorrect(guess.attackType, answer.attackType)} />
      
      <div className={`flex items-center justify-center p-2 rounded-lg border ${roleDisplay.color}`}>
        <span className="text-sm font-medium">{roleDisplay.value}</span>
      </div>

     
      <AttributeBox value={`${guess.legs} legs`} isCorrect={isCorrect(guess.legs, answer.legs)} />
      
      <div className={`flex items-center justify-center p-2 rounded-lg border ${raceDisplay.color}`}>
        <span className="text-sm font-medium">{raceDisplay.value}</span>
      </div>
       <div className={`flex items-center justify-center p-2 rounded-lg border ${
          isCorrect(guess.complexity, answer.complexity) ? 'bg-green-500/20 border-green-500/30' : 'bg-red-500/20 border-red-500/30'
        }`}>
        {Array.from({ length: guess.complexity }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              isCorrect(guess.complexity, answer.complexity) ? 'text-yellow-400' : 'text-gray-500'
            }`}
            fill="currentColor"
          />
        ))}
      </div>

       <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-700/50 border border-gray-600/30 min-w-[100px]">
        <span className="text-sm font-medium">{guess.releaseYear}</span>
        {isCorrect(guess.releaseYear, answer.releaseYear) ? (
          <Check className="w-5 h-5 text-green-400" />
        ) : guess.releaseYear < answer.releaseYear ? (
          <ArrowUp className="w-5 h-5 text-red-400 animate-bounce" />
        ) : (
          <ArrowDown className="w-5 h-5 text-red-400 animate-bounce" />
        )}
      </div>
    </div>
  );
}

function AttributeBox({ value, isCorrect }: { value: string, isCorrect: boolean }) {
  return (
    <div className={`flex items-center justify-center p-2 rounded-lg
                    border transition-colors duration-300 ${
                      isCorrect 
                        ? 'bg-green-500/20 border-green-500/30' 
                        : 'bg-red-500/20 border-red-500/30'
                    }`}>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}