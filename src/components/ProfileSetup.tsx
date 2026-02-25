import { useState } from 'react';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface UserProfile {
    name: string;
    avatar: string;
    createdAt: string;
}

interface ProfileSetupProps {
    onProfileComplete: (profile: UserProfile) => void;
}

const AVATAR_OPTIONS = [
    '👨', '👩', '👴', '👵', '🧑', '👨‍🍳', '👩‍🍳', '👨‍💼', '👩‍💼',
    '👨‍🎓', '👩‍🎓', '👨‍🔬', '👩‍🔬', '👨‍🎨', '👩‍🎨', '👨‍🚀', '👩‍🚀',
    '🐱', '🐶', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐸', '🐵'
];

export function ProfileSetup({ onProfileComplete }: ProfileSetupProps) {
    const [name, setName] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState(AVATAR_OPTIONS[0]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        setIsSubmitting(true);
        const profile: UserProfile = {
            name: name.trim(),
            avatar: selectedAvatar,
            createdAt: new Date().toISOString()
        };

        // Store in localStorage
        localStorage.setItem('userProfile', JSON.stringify(profile));

        setTimeout(() => {
            onProfileComplete(profile);
            setIsSubmitting(false);
        }, 500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
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

                <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-r from-orange-200/20 to-amber-200/20 rounded-full blur-xl animate-pulse delay-100"></div>
                <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-200/15 to-rose-200/15 rounded-full blur-xl animate-pulse delay-300"></div>
                <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r from-yellow-200/25 to-orange-200/25 rounded-full blur-lg animate-pulse delay-500"></div>

                <div className="absolute top-16 right-1/3 animate-bounce delay-200">
                    <div className="text-red-200/30 text-xl">💖</div>
                </div>
                <div className="absolute bottom-32 left-1/3 animate-bounce delay-600">
                    <div className="text-pink-200/30 text-xl">💕</div>
                </div>
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full shadow-lg mb-4">
                        <User className="text-white" size={32} />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                        Hoş Geldiniz!
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base">
                        Profil oluşturmak için bilgilerinizi girin
                    </p>
                </div>

                {/* Profile Form */}
                <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8">
                    {/* Name Input */}
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Adınız
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Adınızı girin..."
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                            required
                        />
                    </div>

                    {/* Avatar Selection */}
                    <div className="mb-8">
                        <label className="block text-sm font-semibold text-gray-700 mb-4">
                            Profil Resmi Seçin
                        </label>
                        <div className="grid grid-cols-6 gap-3 max-h-48 overflow-y-auto">
                            {AVATAR_OPTIONS.map((avatar) => (
                                <button
                                    key={avatar}
                                    type="button"
                                    onClick={() => setSelectedAvatar(avatar)}
                                    className={`w-12 h-12 rounded-xl border-2 transition-all duration-200 flex items-center justify-center text-2xl ${selectedAvatar === avatar
                                        ? 'border-orange-500 bg-orange-50 scale-110 shadow-lg'
                                        : 'border-gray-200 hover:border-gray-300 hover:scale-105'
                                        }`}
                                >
                                    {avatar}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={!name.trim() || isSubmitting}
                        className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400 hover:from-orange-500 hover:via-amber-600 hover:to-orange-500 text-white rounded-2xl shadow-lg shadow-orange-200 transition-all duration-300 hover:shadow-xl hover:shadow-orange-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center gap-2">
                                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                                Profil Oluşturuluyor...
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                <User size={20} />
                                Profil Oluştur
                            </span>
                        )}
                    </Button>
                </form>

                {/* Footer */}
                <p className="text-center text-gray-400 text-xs mt-6">
                    Bilgileriniz sadece cihazınızda saklanır
                </p>
            </div>
        </div>
    );
}