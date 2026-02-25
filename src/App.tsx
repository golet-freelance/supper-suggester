import { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { MainApp } from '@/components/MainApp';
import { ProfileSetup, type UserProfile } from '@/components/ProfileSetup';

function App() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

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

  // Show welcome screen when no profile exists
  useEffect(() => {
    if (!isLoading && !userProfile) {
      setShowWelcome(true);
    }
  }, [isLoading, userProfile]);

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

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Show welcome screen for users without profile
  if (showWelcome) {
    return <WelcomeScreen onComplete={handleWelcomeComplete} />;
  }

  // Show profile setup if no profile exists
  if (!userProfile) {
    return <ProfileSetup onProfileComplete={handleProfileComplete} />;
  }

  // Show main app
  return (
    <MainApp
      userProfile={userProfile}
      onProfileUpdate={handleProfileUpdate}
      onLogout={handleLogout}
    />
  );
}

export default App;
