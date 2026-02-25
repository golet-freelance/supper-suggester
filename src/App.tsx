import { useState, useCallback, useEffect } from 'react';
import { ChefHat, Sparkles, UtensilsCrossed, Heart, Soup, Salad, GlassWater } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Menu {
  mainDish: {
    name: string;
    description: string;
    emoji: string;
  };
  sideDish: {
    name: string;
    description: string;
    emoji: string;
  };
  drink: {
    name: string;
    description: string;
    emoji: string;
  };
  cuisine: 'Turkish' | 'Kurdish';
  id: string; // Add unique ID for tracking
}

const dinnerMenus: Menu[] = [
  // Turkish Menus
  {
    mainDish: { name: "Kuru Fasulye", description: "Pilav üstü nefis kuru fasulye", emoji: "🫘" },
    sideDish: { name: "Pirinç Pilavı", description: "Tereyağlı, tel şehriyeli pilav", emoji: "🍚" },
    drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
    cuisine: "Turkish",
    id: "kuru-fasulye"
  },
  {
    mainDish: { name: "Köfte Izgara", description: "Izgara köfte, közlenmiş biber ve domatesle", emoji: "🧆" },
    sideDish: { name: "Bulgur Pilavı", description: "Domatesli, biberli bulgur pilavı", emoji: "🍚" },
    drink: { name: "Şalgam Suyu", description: "Fermente şalgam suyu", emoji: "🥤" },
    cuisine: "Turkish",
    id: "kofte-izgara"
  },
  {
    mainDish: { name: "Mantı", description: "Yoğurt ve tereyağ soslu ev mantısı", emoji: "🥟" },
    sideDish: { name: "Cacık", description: "Salatalıklı, naneli yoğurt mezesi", emoji: "🥒" },
    drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
    cuisine: "Turkish",
    id: "manti"
  },
  {
    mainDish: { name: "Tavuk Sote", description: "Sebzelerle pişmiş lezzetli tavuk sote", emoji: "🍗" },
    sideDish: { name: "Pirinç Pilavı", description: "Tereyağlı, tel şehriyeli pilav", emoji: "🍚" },
    drink: { name: "Limonata", description: "Ev yapımı taze limonata", emoji: "🍋" },
    cuisine: "Turkish",
    id: "tavuk-sote"
  },
  {
    mainDish: { name: "Patlıcan Musakka", description: "Kıymalı, fırında patlıcan musakka", emoji: "🍆" },
    sideDish: { name: "Çoban Salata", description: "Domates, salatalık, biber ve peynirli", emoji: "🥗" },
    drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
    cuisine: "Turkish",
    id: "patlican-musakka"
  },
  {
    mainDish: { name: "Karnıyarık", description: "Kıymalı patlıcan karnıyarık", emoji: "🍆" },
    sideDish: { name: "Pirinç Pilavı", description: "Tereyağlı, tel şehriyeli pilav", emoji: "🍚" },
    drink: { name: "Turşu Suyu", description: "Ev yapımı turşu suyu", emoji: "🥒" },
    cuisine: "Turkish",
    id: "karniyarik"
  },
  {
    mainDish: { name: "Lahana Sarması", description: "Kıymalı lahana sarması", emoji: "🥬" },
    sideDish: { name: "Yoğurt", description: "Sarımsaklı, naneli yoğurt", emoji: "🥣" },
    drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
    cuisine: "Turkish",
    id: "lahana-sarmasi"
  },
  {
    mainDish: { name: "Fırında Tavuk", description: "Fırında patatesli, nefis tavuk", emoji: "🍗" },
    sideDish: { name: "Bulgur Pilavı", description: "Domatesli, biberli bulgur pilavı", emoji: "🍚" },
    drink: { name: "Şalgam Suyu", description: "Fermente şalgam suyu", emoji: "🥤" },
    cuisine: "Turkish",
    id: "firinda-tavuk"
  },
  {
    mainDish: { name: "İmam Bayıldı", description: "Zeytinyağlı, soğanlı patlıcan", emoji: "🍆" },
    sideDish: { name: "Pirinç Pilavı", description: "Tereyağlı, tel şehriyeli pilav", emoji: "🍚" },
    drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
    cuisine: "Turkish",
    id: "imam-bayildi"
  },
  {
    mainDish: { name: "Taze Fasulye", description: "Zeytinyağlı taze fasulye", emoji: "🫛" },
    sideDish: { name: "Bulgur Pilavı", description: "Domatesli, biberli bulgur pilavı", emoji: "🍚" },
    drink: { name: "Limonata", description: "Ev yapımı taze limonata", emoji: "🍋" },
    cuisine: "Turkish",
    id: "taze-fasulye"
  },
  {
    mainDish: { name: "Mercimek Çorbası", description: "Sıcacık, besleyici mercimek çorbası", emoji: "🍲" },
    sideDish: { name: "Ekmek", description: "Taze, sıcak ekmek", emoji: "🍞" },
    drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
    cuisine: "Turkish",
    id: "mercimek-corbasi"
  },
  {
    mainDish: { name: "Tavuklu Pilav", description: "Tavuklu, tereyağlı nefis pilav", emoji: "🍚" },
    sideDish: { name: "Çoban Salata", description: "Domates, salatalık, biber ve peynirli", emoji: "🥗" },
    drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
    cuisine: "Turkish",
    id: "tavuklu-pilav"
  },
  {
    mainDish: { name: "Peynirli Börek", description: "Ev yapımı peynirli börek", emoji: "🥧" },
    sideDish: { name: "Domates Salata", description: "Taze domates ve soğan salatası", emoji: "🍅" },
    drink: { name: "Çay", description: "Türk çayı", emoji: "🍵" },
    cuisine: "Turkish",
    id: "peynirli-borek"
  },
  {
    mainDish: { name: "Zeytinyağlı Yaprak Sarma", description: "Zeytinyağlı nefis yaprak sarması", emoji: "🍃" },
    sideDish: { name: "Cacık", description: "Salatalıklı, naneli yoğurt mezesi", emoji: "🥒" },
    drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
    cuisine: "Turkish",
    id: "zeytinyagli-yaprak-sarma"
  },
  {
    mainDish: { name: "Kısır", description: "Nar ekşili, bol yeşillikli kısır", emoji: "🥗" },
    sideDish: { name: "Havuç Tarator", description: "Yoğurtlu havuç mezesi", emoji: "🥕" },
    drink: { name: "Çay", description: "Türk çayı", emoji: "🍵" },
    cuisine: "Turkish",
    id: "kisir"
  },
  {
    mainDish: { name: "Etli Nohut", description: "Etli, nefis nohut yemeği", emoji: "🫘" },
    sideDish: { name: "Pirinç Pilavı", description: "Tereyağlı, tel şehriyeli pilav", emoji: "🍚" },
    drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
    cuisine: "Turkish",
    id: "etli-nohut"
  },
  {
    mainDish: { name: "Fırında Köfte Patates", description: "Fırında köfte ve patates", emoji: "🥔" },
    sideDish: { name: "Ezme Salata", description: "Acılı, domatesli ezme salata", emoji: "🌶️" },
    drink: { name: "Şalgam Suyu", description: "Fermente şalgam suyu", emoji: "🥤" },
    cuisine: "Turkish",
    id: "firinda-kofte-patates"
  },
  {
    mainDish: { name: "Pırasa Yemeği", description: "Zeytinyağlı pırasa yemeği", emoji: "🥬" },
    sideDish: { name: "Bulgur Pilavı", description: "Domatesli, biberli bulgur pilavı", emoji: "🍚" },
    drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
    cuisine: "Turkish",
    id: "pirasa-yemegi"
  },
  {
    mainDish: { name: "Kabak Mücver", description: "Fırında veya kızarmış kabak mücver", emoji: "🥒" },
    sideDish: { name: "Yoğurt", description: "Sarımsaklı yoğurt", emoji: "🥣" },
    drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
    cuisine: "Turkish",
    id: "kabak-mucver"
  },
  {
    mainDish: { name: "Tavuk Çorbası", description: "Şehriyeli, nefis tavuk çorbası", emoji: "🍲" },
    sideDish: { name: "Ekmek", description: "Taze, sıcak ekmek", emoji: "🍞" },
    drink: { name: "Limonata", description: "Ev yapımı taze limonata", emoji: "🍋" },
    cuisine: "Turkish",
    id: "tavuk-corbasi"
  },
  // Kurdish Menus
  {
    mainDish: { name: "Dolma", description: "Etli, pirinçli dolma (biber, patlıcan, lahana)", emoji: "🫑" },
    sideDish: { name: "Pilav", description: "Kürt pilavı", emoji: "🍚" },
    drink: { name: "Mastaw", description: "Tuzlu yoğurt içeceği (Ava Mast)", emoji: "🥛" },
    cuisine: "Kurdish",
    id: "dolma"
  },
  {
    mainDish: { name: "Biryanî", description: "Kürt biryani - etli, baharatlı pilav", emoji: "🍛" },
    sideDish: { name: "Salata", description: "Domates, salatalık, nane salatası", emoji: "🥗" },
    drink: { name: "Çay", description: "Kürt çayı (çok şekerli)", emoji: "🍵" },
    cuisine: "Kurdish",
    id: "biryani"
  },
  {
    mainDish: { name: "Kofta", description: "Baharatlı köfte", emoji: "🧆" },
    sideDish: { name: "Pilav", description: "Kürt pilavı", emoji: "🍚" },
    drink: { name: "Dô", description: "Fermente yoğurt içeceği (Doogh)", emoji: "🥛" },
    cuisine: "Kurdish",
    id: "kofta"
  },
  {
    mainDish: { name: "Kibbeh", description: "Kızarmış bulgur ve et köftesi", emoji: "🧆" },
    sideDish: { name: "Tepsî", description: "Patlıcan, biber, kabak ve patates", emoji: "🍆" },
    drink: { name: "Mastaw", description: "Tuzlu yoğurt içeceği", emoji: "🥛" },
    cuisine: "Kurdish",
    id: "kibbeh"
  },
  {
    mainDish: { name: "Shifta", description: "Kızarmış et ve sebze köftesi", emoji: "🥩" },
    sideDish: { name: "Salata", description: "Domates, salatalık, maydanoz salatası", emoji: "🥗" },
    drink: { name: "Çay", description: "Kürt çayı (çok şekerli)", emoji: "🍵" },
    cuisine: "Kurdish",
    id: "shifta"
  },
  {
    mainDish: { name: "Kulaneh Pottage", description: "Buğdaylı, nohutlu, mercimekli çorba", emoji: "🍲" },
    sideDish: { name: "Ekmek", description: "Taze Kürt ekmeği (nan)", emoji: "🍞" },
    drink: { name: "Mastaw", description: "Tuzlu yoğurt içeceği", emoji: "🥛" },
    cuisine: "Kurdish",
    id: "kulaneh-pottage"
  },
  {
    mainDish: { name: "Dokliw", description: "Geleneksel Kürt yemeği", emoji: "🥘" },
    sideDish: { name: "Bulgur", description: "Bulgur pilavı", emoji: "🍚" },
    drink: { name: "Çay", description: "Kürt çayı (çok şekerli)", emoji: "🍵" },
    cuisine: "Kurdish",
    id: "dokliw"
  },
  {
    mainDish: { name: "Kube", description: "Etli bulgur köftesi", emoji: "🧆" },
    sideDish: { name: "Salata", description: "Taze sebze salatası", emoji: "🥗" },
    drink: { name: "Dô", description: "Fermente yoğurt içeceği", emoji: "🥛" },
    cuisine: "Kurdish",
    id: "kube"
  },
  {
    mainDish: { name: "Kelane", description: "Geleneksel Kürt ekmeği yemeği", emoji: "🥘" },
    sideDish: { name: "Yoğurt", description: "Taze yoğurt", emoji: "🥣" },
    drink: { name: "Çay", description: "Kürt çayı (çok şekerli)", emoji: "🍵" },
    cuisine: "Kurdish",
    id: "kelane"
  },
  {
    mainDish: { name: "Makluba", description: "Ters çevrilmiş sebze ve pilav yemeği", emoji: "🍛" },
    sideDish: { name: "Salata", description: "Domates, salatalık salatası", emoji: "🥗" },
    drink: { name: "Mastaw", description: "Tuzlu yoğurt içeceği", emoji: "🥛" },
    cuisine: "Kurdish",
    id: "makluba"
  },
  {
    mainDish: { name: "Gilakhe Stew", description: "Yabani ot yemeği (Gilakhe)", emoji: "🥘" },
    sideDish: { name: "Pilav", description: "Kürt pilavı", emoji: "🍚" },
    drink: { name: "Çay", description: "Kürt çayı (çok şekerli)", emoji: "🍵" },
    cuisine: "Kurdish",
    id: "gilakhe-stew"
  },
  {
    mainDish: { name: "Niskene", description: "Mercimekli, bulgurlu yemek", emoji: "🍲" },
    sideDish: { name: "Ekmek", description: "Taze Kürt ekmeği", emoji: "🍞" },
    drink: { name: "Dô", description: "Fermente yoğurt içeceği", emoji: "🥛" },
    cuisine: "Kurdish",
    id: "niskene"
  },
  {
    mainDish: { name: "Kurdish Pilau", description: "Kürt pilavı - etli, bademli", emoji: "🍛" },
    sideDish: { name: "Salata", description: "Kürt salatası", emoji: "🥗" },
    drink: { name: "Mastaw", description: "Tuzlu yoğurt içeceği", emoji: "🥛" },
    cuisine: "Kurdish",
    id: "kurdish-pilau"
  },
  {
    mainDish: { name: "Teşrîb", description: "Ekmekli, sebzeli yemek", emoji: "🥘" },
    sideDish: { name: "Yoğurt", description: "Taze yoğurt", emoji: "🥣" },
    drink: { name: "Çay", description: "Kürt çayı (çok şekerli)", emoji: "🍵" },
    cuisine: "Kurdish",
    id: "tesrib"
  },
  {
    mainDish: { name: "Parêv Tobûlî", description: "Geleneksel Kürt yemeği", emoji: "🥘" },
    sideDish: { name: "Bulgur", description: "Bulgur pilavı", emoji: "🍚" },
    drink: { name: "Mastaw", description: "Tuzlu yoğurt içeceği", emoji: "🥛" },
    cuisine: "Kurdish",
    id: "parev-tobuli"
  },
  {
    mainDish: { name: "Lentil Pottage", description: "Mercimekli, patatesli çorba", emoji: "🍲" },
    sideDish: { name: "Ekmek", description: "Taze Kürt ekmeği", emoji: "🍞" },
    drink: { name: "Dô", description: "Fermente yoğurt içeceği", emoji: "🥛" },
    cuisine: "Kurdish",
    id: "lentil-pottage"
  },
  {
    mainDish: { name: "Shilah/Maraga", description: "Kürt etli yahni", emoji: "🥘" },
    sideDish: { name: "Pilav", description: "Kürt pilavı", emoji: "🍚" },
    drink: { name: "Çay", description: "Kürt çayı (çok şekerli)", emoji: "🍵" },
    cuisine: "Kurdish",
    id: "shilah-maraga"
  },
  {
    mainDish: { name: "Kuki", description: "Etli veya sebzeli Kürt böreği", emoji: "🥧" },
    sideDish: { name: "Salata", description: "Taze sebze salatası", emoji: "🥗" },
    drink: { name: "Mastaw", description: "Tuzlu yoğurt içeceği", emoji: "🥛" },
    cuisine: "Kurdish",
    id: "kuki"
  },
  {
    mainDish: { name: "Tahdig", description: "Pilav tası - çıtır pilav", emoji: "🍚" },
    sideDish: { name: "Stew", description: "Etli yahni", emoji: "🥘" },
    drink: { name: "Çay", description: "Kürt çayı (çok şekerli)", emoji: "🍵" },
    cuisine: "Kurdish",
    id: "tahdig"
  },
  {
    mainDish: { name: "Birinç", description: "Beyaz pilav - etli veya sebzeli", emoji: "🍛" },
    sideDish: { name: "Salata", description: "Kürt salatası", emoji: "🥗" },
    drink: { name: "Dô", description: "Fermente yoğurt içeceği", emoji: "🥛" },
    cuisine: "Kurdish",
    id: "birinc"
  },
];

function App() {
  const [currentMenu, setCurrentMenu] = useState<Menu | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [history, setHistory] = useState<Menu[]>([]);
  const [menuLastSuggested, setMenuLastSuggested] = useState<Record<string, number>>({});

  // Load menu suggestion history from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('menuLastSuggested');
    if (saved) {
      try {
        setMenuLastSuggested(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading menu history:', e);
      }
    }
  }, []);

  // Save menu suggestion history to localStorage
  const saveMenuHistory = useCallback((menuId: string) => {
    const now = Date.now();
    const updated = { ...menuLastSuggested, [menuId]: now };
    setMenuLastSuggested(updated);
    localStorage.setItem('menuLastSuggested', JSON.stringify(updated));
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
        setIsAnimating(false);
      }
    }, 80);
  }, [menuLastSuggested, saveMenuHistory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex flex-col items-center justify-center p-4 sm:p-6">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-orange-200/40 text-6xl animate-pulse">
          <ChefHat size={120} strokeWidth={1} />
        </div>
        <div className="absolute bottom-20 right-10 text-amber-200/40 text-6xl animate-pulse delay-700">
          <UtensilsCrossed size={100} strokeWidth={1} />
        </div>
        <div className="absolute top-1/3 right-20 text-yellow-200/30 text-4xl animate-bounce delay-500">
          ✨
        </div>
        <div className="absolute bottom-1/3 left-20 text-orange-200/30 text-4xl animate-bounce delay-1000">
          🌟
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full shadow-lg mb-4">
            <ChefHat className="text-white" size={40} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Bu Akşam Ne Pişirsem?
          </h1>
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
                  <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${
                    currentMenu.cuisine === 'Turkish' 
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

        {/* Footer */}
        <p className="text-center text-gray-400 text-xs mt-6">
          Her öğün sevgiyle pişsin 💕
        </p>
      </div>
    </div>
  );
}

export default App;
