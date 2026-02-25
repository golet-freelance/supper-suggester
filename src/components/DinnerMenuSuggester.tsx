import { useState, useCallback, useEffect } from 'react';
import { ChefHat, Sparkles, Heart, Soup, Salad, GlassWater } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Menu, dinnerMenus } from '@/data/dinnerMenus';

interface DinnerMenuSuggesterProps {
    onMenuSelected?: (menu: Menu) => void;
}

export function DinnerMenuSuggester({ onMenuSelected }: DinnerMenuSuggesterProps) {
    const [currentMenu, setCurrentMenu] = useState<Menu | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [history, setHistory] = useState<Menu[]>([]);
    const [menuLastSuggested, setMenuLastSuggested] = useState<Record<string, number>>({});

    // Load menu suggestion history from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('dinnerMenuLastSuggested');
        if (saved) {
            try {
                setMenuLastSuggested(JSON.parse(saved));
            } catch (e) {
                console.error('Error loading dinner menu history:', e);
            }
        }
    }, []);

    // Save menu suggestion history to localStorage
    const saveMenuHistory = useCallback((menuId: string) => {
        const now = Date.now();
        const updated = { ...menuLastSuggested, [menuId]: now };
        setMenuLastSuggested(updated);
        localStorage.setItem('dinnerMenuLastSuggested', JSON.stringify(updated));
    }, [menuLastSuggested]);

    const suggestMenu = useCallback(() => {
        setIsAnimating(true);

        // Get available menus (not suggested within last 5 days)
        const now = Date.now();
        const fiveDaysMs = 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds

        const availableMenus = dinnerMenus.filter(menu => {
            const lastSuggested = menuLastSuggested[menu.id];
            return !lastSuggested || (now - lastSuggested) >= fiveDaysMs;
        });

        // If no menus are available, allow all menus
        const menusToChooseFrom = availableMenus.length > 0 ? availableMenus : dinnerMenus;

        // Quick shuffle animation
        let shuffleCount = 0;
        const maxShuffles = 8;
        const shuffleInterval = setInterval(() => {
            const randomMenu = menusToChooseFrom[Math.floor(Math.random() * menusToChooseFrom.length)];
            setCurrentMenu(randomMenu);
            shuffleCount++;

            if (shuffleCount >= maxShuffles) {
                clearInterval(shuffleInterval);
                const finalMenu = menusToChooseFrom[Math.floor(Math.random() * menusToChooseFrom.length)];
                setCurrentMenu(finalMenu);
                setHistory(prev => [finalMenu, ...prev].slice(0, 3));
                saveMenuHistory(finalMenu.id);
                onMenuSelected?.(finalMenu);
                setIsAnimating(false);
            }
        }, 80);
    }, [menuLastSuggested, saveMenuHistory, onMenuSelected]);

    return (
        <div className="w-full max-w-lg">
            {/* Header */}
            <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full shadow-lg mb-4">
                    <ChefHat className="text-white" size={40} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                    Akşam Yemeği Menüsü
                </h2>
                <p className="text-gray-500 text-sm sm:text-base">
                    Tam menü önerisi için butona tıklayın
                </p>
            </div>

            {/* Main card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 mb-6">
                {/* Menu display area */}
                <div className="min-h-[320px] flex flex-col items-center justify-center mb-6">
                    {currentMenu ? (
                        <div className={`w-full transition-all duration-300 ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
                            {/* Cuisine badge */}
                            <div className="text-center mb-4">
                                <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${currentMenu.cuisine === 'Turkish'
                                    ? 'bg-red-100 text-red-600'
                                    : 'bg-green-100 text-green-600'
                                    }`}>
                                    {currentMenu.cuisine === 'Turkish' ? '🇹🇷 Türk Mutfağı' : '☀️ Kürt Mutfağı'}
                                </span>
                            </div>

                            {/* Main Dish */}
                            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-4 mb-3 border border-orange-100">
                                <div className="flex items-center gap-3">
                                    <div className="text-4xl">{currentMenu.mainDish.emoji}</div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Soup size={16} className="text-orange-500" />
                                            <span className="text-xs text-orange-500 font-medium">Ana Yemek</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800">{currentMenu.mainDish.name}</h3>
                                        <p className="text-sm text-gray-500">{currentMenu.mainDish.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Side Dish */}
                            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-4 mb-3 border border-amber-100">
                                <div className="flex items-center gap-3">
                                    <div className="text-4xl">{currentMenu.sideDish.emoji}</div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Salad size={16} className="text-amber-500" />
                                            <span className="text-xs text-amber-500 font-medium">Yan Yemek</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800">{currentMenu.sideDish.name}</h3>
                                        <p className="text-sm text-gray-500">{currentMenu.sideDish.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Drink */}
                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100">
                                <div className="flex items-center gap-3">
                                    <div className="text-4xl">{currentMenu.drink.emoji}</div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <GlassWater size={16} className="text-blue-500" />
                                            <span className="text-xs text-blue-500 font-medium">İçecek</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800">{currentMenu.drink.name}</h3>
                                        <p className="text-sm text-gray-500">{currentMenu.drink.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-gray-400">
                            <Sparkles className="mx-auto mb-4 text-orange-300" size={48} />
                            <p className="text-lg">Akşam yemeği menüsü için butona tıklayın</p>
                            <p className="text-sm mt-2">Türk ve Kürt mutfağından tam menüler</p>
                        </div>
                    )}
                </div>

                {/* Main button */}
                <Button
                    onClick={suggestMenu}
                    disabled={isAnimating}
                    className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400 hover:from-orange-500 hover:via-amber-600 hover:to-orange-500 text-white rounded-2xl shadow-lg shadow-orange-200 transition-all duration-300 hover:shadow-xl hover:shadow-orange-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isAnimating ? (
                        <span className="flex items-center gap-2">
                            <span className="animate-spin">🎲</span>
                            Menü Seçiliyor...
                        </span>
                    ) : (
                        <span className="flex items-center gap-2">
                            <Sparkles size={20} />
                            {currentMenu ? 'Başka Menü Öner' : 'Akşam Yemeği Menüsü Öner'}
                        </span>
                    )}
                </Button>
            </div>

            {/* Recent history */}
            {history.length > 1 && (
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-orange-100/50">
                    <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                        <Heart size={12} />
                        Son Öneriler
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {history.slice(1).map((menu, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-1 px-3 py-1.5 bg-white rounded-full text-sm text-gray-600 shadow-sm border border-orange-100"
                            >
                                <span>{menu.cuisine === 'Turkish' ? '🇹🇷' : '☀️'}</span>
                                <span className="text-xs">{menu.mainDish.name}</span>
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}