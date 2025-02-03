import React, { useState, useRef, useEffect } from 'react';
import { Hero, heroes } from '../data/heroes';
import { Search, ArrowRight } from 'lucide-react';

interface GuessInputProps {
  onGuess: (hero: Hero) => void;
  disabled: boolean;
  guessedHeroes: Hero[];
}

export function GuessInput({ onGuess, disabled, guessedHeroes }: GuessInputProps) {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<Hero[]>([]);
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

   const handleSearch = (value: string) => {
    setSearch(value);
    setSelectedHero(null);
    
    if (value.length > 0) {
      // Фильтруем героев, исключая угаданных
      const filtered = heroes.filter(
        hero =>
          hero.name.toLowerCase().startsWith(value.toLowerCase()) &&
          !guessedHeroes.some(guessed => guessed.id === hero.id) // Исключаем угаданных
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (hero: Hero) => {
    setSelectedHero(hero);
    setSearch(hero.name);
    setSuggestions([]);
  };

  const handleSubmit = () => {
    if (selectedHero) {
      onGuess(selectedHero);
      setSearch('');
      setSelectedHero(null);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : prev);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0) {
        handleSelect(suggestions[selectedIndex]);
      } else if (selectedHero) {
        handleSubmit();
      }
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search hero..."
            disabled={disabled}
            className="w-full px-4 py-3 pl-11 bg-gray-800/50 backdrop-blur-sm
                     border border-gray-700 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500
                     text-white placeholder-gray-400
                     transition-all duration-300"
          />
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        </div>
        <button
          onClick={handleSubmit}
          disabled={!selectedHero || disabled}
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500
                   text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed 
                   hover:from-purple-600 hover:to-pink-600
                   transition-all duration-300 transform hover:scale-105
                   shadow-lg shadow-purple-500/20
                   flex items-center gap-2 min-w-[100px]"
        >
          <span>Guess</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      {suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute w-full mt-2 bg-gray-800/95 backdrop-blur-sm
                   border border-gray-700 rounded-lg shadow-xl z-50
                   max-h-[300px] overflow-y-auto
                   scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800"
        >
          {suggestions.map((hero, index) => (
            <button
              key={hero.id}
              onClick={() => handleSelect(hero)}
              onMouseEnter={() => setSelectedIndex(index)}
              className={`w-full px-4 py-3 text-left hover:bg-gray-700/50
                       transition-colors duration-200 flex items-center gap-3
                       ${index === selectedIndex ? 'bg-purple-500/20' : ''}
                       ${index === 0 ? 'rounded-t-lg' : ''}
                       ${index === suggestions.length - 1 ? 'rounded-b-lg' : ''}`}
            >
              <div className="relative">
                <img 
                  src={hero.image} 
                  alt={hero.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-white/10"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium">{hero.name}</span>
                <span className="text-gray-400 text-sm">
                  {hero.primaryAttribute} - {hero.attackType}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}