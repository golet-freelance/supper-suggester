import { useState, useCallback, useEffect } from 'react';
import { Sparkles, Heart, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Dessert, desserts } from '@/data/desserts';

interface DessertSuggesterProps {
    onDessertSelected?: (dessert: Dessert) => void;
}

export function DessertSuggester({ onDessertSelected }: DessertSuggesterProps) {
    const [currentDessert, setCurrentDessert] = useState<Dessert | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [history, setHistory] = useState<Dessert[]>([]);
    const [dessertLastSuggested, setDessertLastSuggested] = useState<Record<string, number>>({});

    // Load dessert suggestion history from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('dessertLastSuggested');
        if (saved) {
            try {
                setDessertLastSuggested(JSON.parse(saved));
            } catch (e) {
                console.error('Error loading dessert history:', e);
            }
        }
    }, []);

    // Save dessert suggestion history to localStorage
    const saveDessertHistory = useCallback((dessertId: string) => {
        const now = Date.now();
        const updated = { ...dessertLastSuggested, [dessertId]: now };
        setDessertLastSuggested(updated);
        localStorage.setItem('dessertLastSuggested', JSON.stringify(updated));
    }, [dessertLastSuggested]);

    const suggestDessert = useCallback(() => {
        setIsAnimating(true);

        // Get available desserts (not suggested within last 5 days)
        const now = Date.now();
        const fiveDaysMs = 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds

        const availableDesserts = desserts.filter(dessert => {
            const lastSuggested = dessertLastSuggested[dessert.id];
            return !lastSuggested || (now - lastSuggested) >= fiveDaysMs;
        });

        // If no desserts are available, allow all desserts
        const dessertsToChooseFrom = availableDesserts.length > 0 ? availableDesserts : desserts;

        // Quick shuffle animation
        let shuffleCount = 0;
        const maxShuffles = 8;
        const shuffleInterval = setInterval(() => {
            const randomDessert = dessertsToChooseFrom[Math.floor(Math.random() * dessertsToChooseFrom.length)];
            setCurrentDessert(randomDessert);
            shuffleCount++;

            if (shuffleCount >= maxShuffles) {
                clearInterval(shuffleInterval);
                const finalDessert = dessertsToChooseFrom[Math.floor(Math.random() * dessertsToChooseFrom.length)];
                setCurrentDessert(finalDessert);
                setHistory(prev => [finalDessert, ...prev].slice(0, 3));
                saveDessertHistory(finalDessert.id);
                onDessertSelected?.(finalDessert);
                setIsAnimating(false);
            }
        }, 80);
    }, [dessertLastSuggested, saveDessertHistory, onDessertSelected]);

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* Header */}
            <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full shadow-lg mb-4">
                    <Cookie className="text-white" size={40} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                    Tatlı Önerisi
                </h2>
                <p className="text-gray-500 text-sm sm:text-base">
                    Lezzetli tatlı önerisi için butona tıklayın
                </p>
            </div>

            {/* Main card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-pink-100 p-6 sm:p-8 mb-6">
                {/* Dessert display area */}
                <div className="min-h-[200px] flex flex-col items-center justify-center mb-6">
                    {currentDessert ? (
                        <div className={`w-full transition-all duration-300 ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
                            {/* Cuisine badge */}
                            <div className="text-center mb-4">
                                <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${currentDessert.cuisine === 'Turkish'
                                    ? 'bg-red-100 text-red-600'
                                    : 'bg-green-100 text-green-600'
                                    }`}>
                                    {currentDessert.cuisine === 'Turkish' ? '🇹🇷 Türk Mutfağı' : '☀️ Kürt Mutfağı'}
                                </span>
                            </div>

                            {/* Dessert */}
                            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100">
                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className="text-6xl">{currentDessert.emoji}</div>
                                    <div>
                                        <div className="flex items-center justify-center gap-2 mb-2">
                                            <Cookie size={16} className="text-pink-500" />
                                            <span className="text-xs text-pink-500 font-medium">Tatlı</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{currentDessert.name}</h3>
                                        <p className="text-sm text-gray-500">{currentDessert.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-gray-400">
                            <Sparkles className="mx-auto mb-4 text-pink-300" size={48} />
                            <p className="text-lg">Tatlı önerisi için butona tıklayın</p>
                            <p className="text-sm mt-2">Türk ve Kürt mutfağından lezzetli tatlılar</p>
                        </div>
                    )}
                </div>

                {/* Main button */}
                <Button
                    onClick={suggestDessert}
                    disabled={isAnimating}
                    className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-pink-400 via-rose-500 to-pink-400 hover:from-pink-500 hover:via-rose-600 hover:to-pink-500 text-white rounded-2xl shadow-lg shadow-pink-200 transition-all duration-300 hover:shadow-xl hover:shadow-pink-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isAnimating ? (
                        <span className="flex items-center gap-2">
                            <span className="animate-spin">🎲</span>
                            Tatlı Seçiliyor...
                        </span>
                    ) : (
                        <span className="flex items-center gap-2">
                            <Sparkles size={20} />
                            {currentDessert ? 'Başka Tatlı Öner' : 'Tatlı Öner'}
                        </span>
                    )}
                </Button>
            </div>

            {/* Recent history */}
            {history.length > 1 && (
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-pink-100/50">
                    <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                        <Heart size={12} />
                        Son Öneriler
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {history.slice(1).map((dessert, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-1 px-3 py-1.5 bg-white rounded-full text-sm text-gray-600 shadow-sm border border-pink-100"
                            >
                                <span>{dessert.cuisine === 'Turkish' ? '🇹🇷' : '☀️'}</span>
                                <span className="text-xs">{dessert.name}</span>
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}