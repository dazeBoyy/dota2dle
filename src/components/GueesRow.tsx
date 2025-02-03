import React from 'react';
import { CheckCircle2, XCircle, ArrowUp, ArrowDown } from 'lucide-react';
import { Hero } from '../data/heroes';

interface GuessRowProps {
  guess: Hero;
  answer: Hero;
}

export function GuessRow({ guess, answer }: GuessRowProps) {
  const isCorrect = guess.id === answer.id;

  const getAttributeMatch = () => {
    if (guess.primaryAttribute === answer.primaryAttribute) {
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    }
    return <XCircle className="w-5 h-5 text-red-500" />;
  };

  const getAttackTypeMatch = () => {
    if (guess.attackType === answer.attackType) {
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    }
    return <XCircle className="w-5 h-5 text-red-500" />;
  };

  const getReleaseYearMatch = () => {
    if (guess.releaseYear === answer.releaseYear) {
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    }
    return guess.releaseYear < answer.releaseYear ? 
      <ArrowUp className="w-5 h-5 text-yellow-500" /> :
      <ArrowDown className="w-5 h-5 text-yellow-500" />;
  };

  const getRolesMatch = () => {
    const commonRoles = guess.roles.filter(role => answer.roles.includes(role));
    if (commonRoles.length === 0) {
      return <XCircle className="w-5 h-5 text-red-500" />;
    }
    return <span className="text-yellow-500">{commonRoles.length}</span>;
  };

  return (
    <div className={`grid grid-cols-6 gap-4 p-3 rounded-lg ${
      isCorrect ? 'bg-green-900/20' : 'bg-gray-800/50'
    }`}>
      <div className="flex items-center space-x-3">
        <img
          src={guess.imageUrl}
          alt={guess.name}
          className="w-12 h-12 rounded"
        />
        <span className="text-gray-100">{guess.name}</span>
      </div>
      <div className="flex items-center justify-center">
        {getAttributeMatch()}
      </div>
      <div className="flex items-center justify-center">
        {getAttackTypeMatch()}
      </div>
      <div className="flex items-center justify-center">
        {getRolesMatch()}
      </div>
      <div className="flex items-center justify-center">
        {getReleaseYearMatch()}
      </div>
      <div className="flex items-center justify-center">
        {guess.gender === answer.gender ? 
          <CheckCircle2 className="w-5 h-5 text-green-500" /> :
          <XCircle className="w-5 h-5 text-red-500" />
        }
      </div>
    </div>
  );
}