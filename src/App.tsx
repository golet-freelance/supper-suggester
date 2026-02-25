import { useState, useEffect } from 'react';
import { ChefHat, Cookie } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { DinnerMenuSuggester } from '@/components/DinnerMenuSuggester';
import { DessertSuggester } from '@/components/DessertSuggester';
import { ProfileSetup, type UserProfile } from '@/components/ProfileSetup';
import { UserProfile as UserProfileComponent } from '@/components/UserProfile';

function App() {
  const [activeTab, setActiveTab] = useState('dinner');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user profile from localStorage on app start
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      try {
        const profile = JSON.parse(savedProfile);
        setUserProfile(profile);
      } catch (error) {
        console.error('Error loading profile:', error);
        localStorage.removeItem('userProfile');
      }
    }
    setIsLoading(false);
  }, []);

  const handleProfileComplete = (profile: UserProfile) => {
    setUserProfile(profile);
  };

  const handleProfileUpdate = (profile: UserProfile) => {
    setUserProfile(profile);
  };

  const handleLogout = () => {
    localStorage.removeItem('userProfile');
    setUserProfile(null);
  };

  // Show loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-200 border-t-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  // Show profile setup if no profile exists
  if (!userProfile) {
    return <ProfileSetup onProfileComplete={handleProfileComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating Food Icons */}
        <div className="absolute top-20 left-10 animate-bounce delay-100">
          <div className="text-orange-200/30 text-4xl">🍽️</div>
        </div>
        <div className="absolute top-32 right-20 animate-bounce delay-300">
          <div className="text-amber-200/30 text-3xl">🥘</div>
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce delay-500">
          <div className="text-yellow-200/30 text-4xl">🍛</div>
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce delay-700">
          <div className="text-orange-200/30 text-3xl">🫕</div>
        </div>
        <div className="absolute top-1/2 left-5 animate-pulse delay-200">
          <div className="text-pink-200/20 text-2xl">✨</div>
        </div>
        <div className="absolute top-1/3 right-5 animate-pulse delay-400">
          <div className="text-rose-200/20 text-2xl">🌟</div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-r from-orange-200/20 to-amber-200/20 rounded-full blur-xl animate-pulse delay-100"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-200/15 to-rose-200/15 rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r from-yellow-200/25 to-orange-200/25 rounded-full blur-lg animate-pulse delay-500"></div>

        {/* Floating Hearts */}
        <div className="absolute top-16 right-1/3 animate-bounce delay-200">
          <div className="text-red-200/30 text-xl">💖</div>
        </div>
        <div className="absolute bottom-32 left-1/3 animate-bounce delay-600">
          <div className="text-pink-200/30 text-xl">💕</div>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* Profile Button - Top Right */}
        <div className="absolute top-4 right-6 z-20">
          <Button
            onClick={() => setActiveTab('profile')}
            variant="outline"
            size="sm"
            className="bg-white/90 backdrop-blur-sm border-orange-200 hover:bg-orange-50 hover:border-orange-300 shadow-lg flex items-center gap-2 px-3 py-2"
          >
            <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center overflow-hidden">
              {userProfile.photo ? (
                <img src={userProfile.photo} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="text-xs text-white">{userProfile.avatar}</span>
              )}
            </div>
            <span className="hidden sm:inline text-orange-700 font-medium">{userProfile.name}</span>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up pt-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full shadow-lg mb-6 hover:scale-105 transition-transform duration-300 animate-bounce-gentle">
            <ChefHat className="text-white" size={48} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 animate-slide-in-left">
            Merhaba, {userProfile.name}! 👋
          </h1>
          <p className="text-gray-500 text-sm sm:text-base animate-slide-in-right delay-200">
            Türk ve Kürt mutfağından lezzetli öneriler
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-1 shadow-lg h-auto hover:shadow-xl transition-shadow duration-300">
            <TabsTrigger
              value="dinner"
              className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-400 data-[state=active]:to-amber-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 text-sm sm:text-base data-[state=inactive]:hover:bg-orange-50 data-[state=inactive]:hover:scale-105 data-[state=inactive]:hover:shadow-md"
            >
              <ChefHat size={20} className="transition-transform duration-300 group-hover:scale-110" />
              Akşam Yemeği
            </TabsTrigger>
            <TabsTrigger
              value="dessert"
              className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-400 data-[state=active]:to-rose-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 text-sm sm:text-base data-[state=inactive]:hover:bg-pink-50 data-[state=inactive]:hover:scale-105 data-[state=inactive]:hover:shadow-md"
            >
              <Cookie size={20} className="transition-transform duration-300 group-hover:scale-110" />
              Tatlı
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dinner" className="mt-0 flex justify-center">
            <DinnerMenuSuggester />
          </TabsContent>

          <TabsContent value="dessert" className="mt-0 flex justify-center">
            <DessertSuggester />
          </TabsContent>

          <TabsContent value="profile" className="mt-0 flex justify-center">
            <div className="w-full max-w-lg">
              <UserProfileComponent
                profile={userProfile}
                onProfileUpdate={handleProfileUpdate}
                onLogout={handleLogout}
              />
            </div>
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
