import { useState } from 'react';
import { ChefHat, Cookie } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DinnerMenuSuggester } from '@/components/DinnerMenuSuggester';
import { DessertSuggester } from '@/components/DessertSuggester';

function App() {
  const [activeTab, setActiveTab] = useState('dinner');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full shadow-lg mb-6">
            <ChefHat className="text-white" size={48} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Yemek Öneri Uygulaması
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Türk ve Kürt mutfağından lezzetli öneriler
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-1 shadow-lg h-auto">
            <TabsTrigger
              value="dinner"
              className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-400 data-[state=active]:to-amber-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 text-sm sm:text-base data-[state=inactive]:hover:bg-orange-50"
            >
              <ChefHat size={20} />
              Akşam Yemeği
            </TabsTrigger>
            <TabsTrigger
              value="dessert"
              className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-400 data-[state=active]:to-rose-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 text-sm sm:text-base data-[state=inactive]:hover:bg-pink-50"
            >
              <Cookie size={20} />
              Tatlı
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dinner" className="mt-0 flex justify-center">
            <DinnerMenuSuggester />
          </TabsContent>

          <TabsContent value="dessert" className="mt-0 flex justify-center">
            <DessertSuggester />
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <p className="text-center text-gray-400 text-xs mt-8">
          Her öğün sevgiyle pişsin 💕
        </p>
      </div>
    </div>
  );
}

export default App;
