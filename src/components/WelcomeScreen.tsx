import { ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WelcomeScreenProps {
    onComplete: () => void;
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 animate-bounce delay-100">
                    <div className="text-orange-200/30 text-6xl">🍽️</div>
                </div>
                <div className="absolute top-32 right-20 animate-bounce delay-300">
                    <div className="text-amber-200/30 text-5xl">🥘</div>
                </div>
                <div className="absolute bottom-40 left-20 animate-bounce delay-500">
                    <div className="text-yellow-200/30 text-6xl">🍛</div>
                </div>
                <div className="absolute bottom-20 right-10 animate-bounce delay-700">
                    <div className="text-orange-200/30 text-5xl">🫕</div>
                </div>
                <div className="absolute top-1/2 left-5 animate-pulse delay-200">
                    <div className="text-pink-200/20 text-4xl">✨</div>
                </div>
                <div className="absolute top-1/3 right-5 animate-pulse delay-400">
                    <div className="text-rose-200/20 text-4xl">🌟</div>
                </div>

                {/* Animated Gradient Orbs */}
                <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-r from-orange-200/20 to-amber-200/20 rounded-full blur-xl animate-pulse delay-100"></div>
                <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-200/15 to-rose-200/15 rounded-full blur-xl animate-pulse delay-300"></div>
                <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r from-yellow-200/25 to-orange-200/25 rounded-full blur-lg animate-pulse delay-500"></div>

                {/* Floating Hearts */}
                <div className="absolute top-16 right-1/3 animate-bounce delay-200">
                    <div className="text-red-200/30 text-3xl">💖</div>
                </div>
                <div className="absolute bottom-32 left-1/3 animate-bounce delay-600">
                    <div className="text-pink-200/30 text-3xl">💕</div>
                </div>
            </div>

            <div className="w-full max-w-4xl mx-auto relative z-10 text-center">
                {/* Welcome Header */}
                <div className="mb-12 animate-fade-in-up">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full shadow-2xl mb-8 hover:scale-110 transition-transform duration-500 animate-bounce-gentle">
                        <ChefHat className="text-white" size={64} />
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-4 animate-slide-in-left">
                        Hoş Geldiniz! 🎉
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 mb-2 animate-slide-in-right delay-200">
                        Türk ve Kürt Mutfağına
                    </p>
                    <p className="text-lg sm:text-xl text-orange-600 font-semibold animate-fade-in-up delay-400">
                        Lezzetli Bir Yolculuğa Hazır mısınız?
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in-up delay-600">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <div className="text-5xl mb-4">🍽️</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Akşam Yemekleri</h3>
                        <p className="text-gray-600">Geleneksel Türk ve Kürt akşam yemekleri ile sofranızı şenlendirin</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-pink-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <div className="text-5xl mb-4">🍰</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Tatlılar</h3>
                        <p className="text-gray-600">Nefis Türk ve Kürt tatlıları ile gününüzü tatlandırın</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <div className="text-5xl mb-4">👤</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Kişisel Profil</h3>
                        <p className="text-gray-600">Profilinizi oluşturun ve deneyiminizi kişiselleştirin</p>
                    </div>
                </div>

                {/* Welcome Button */}
                <div className="animate-fade-in-up delay-800">
                    <Button
                        onClick={onComplete}
                        className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-12 py-4 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-pulse-gentle"
                    >
                        Başlayalım! 🚀
                    </Button>
                    <p className="text-gray-500 text-sm mt-4">
                        Bu yolculukta size eşlik etmek için sabırsızlanıyoruz
                    </p>
                </div>
            </div>
        </div>
    );
}