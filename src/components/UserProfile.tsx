import { useState } from 'react';
import { User, Camera, Edit2, X, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type UserProfile as UserProfileType } from './ProfileSetup';

interface UserProfileProps {
    profile: UserProfileType;
    onProfileUpdate: (profile: UserProfileType) => void;
    onLogout?: () => void;
}

const AVATAR_OPTIONS = [
    '👨', '👩', '👴', '👵', '🧑', '👨‍🍳', '👩‍🍳', '👨‍💼', '👩‍💼',
    '👨‍🎓', '👩‍🎓', '👨‍🔬', '👩‍🔬', '👨‍🎨', '👩‍🎨', '👨‍🚀', '👩‍🚀',
    '🐱', '🐶', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐸', '🐵'
];

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export function UserProfile({ profile, onProfileUpdate, onLogout }: UserProfileProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState(profile.name);
    const [editAvatar, setEditAvatar] = useState(profile.avatar);
    const [editPhoto, setEditPhoto] = useState(profile.photo || null);
    const [isSaving, setIsSaving] = useState(false);

    const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                alert('Lütfen geçerli bir resim dosyası seçin.');
                return;
            }

            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('Resim dosyası 5MB\'dan küçük olmalıdır.');
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result as string;
                setEditPhoto(result);
                setEditAvatar(result); // Update avatar to show the photo
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        if (!editName.trim()) return;

        setIsSaving(true);
        const updatedProfile: UserProfileType = {
            ...profile,
            name: editName.trim(),
            avatar: editPhoto || editAvatar,
            photo: editPhoto || undefined
        };

        // Store in localStorage
        localStorage.setItem('userProfile', JSON.stringify(updatedProfile));

        setTimeout(() => {
            onProfileUpdate(updatedProfile);
            setIsEditing(false);
            setIsSaving(false);
        }, 500);
    };

    const handleCancel = () => {
        setEditName(profile.name);
        setEditAvatar(profile.avatar);
        setEditPhoto(profile.photo || null);
        setIsEditing(false);
    };

    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-lg">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-orange-800 flex items-center gap-2">
                    <User size={20} />
                    Profil
                </h3>
                <div className="flex gap-2">
                    {!isEditing ? (
                        <Button
                            onClick={() => setIsEditing(true)}
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1 hover:bg-blue-50"
                        >
                            <Edit2 size={14} />
                            Düzenle
                        </Button>
                    ) : (
                        <>
                            <Button
                                onClick={handleCancel}
                                variant="outline"
                                size="sm"
                                className="flex items-center gap-1"
                            >
                                <X size={14} />
                                İptal
                            </Button>
                            <Button
                                onClick={handleSave}
                                disabled={isSaving}
                                size="sm"
                                className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600"
                            >
                                {isSaving ? (
                                    <div className="animate-spin rounded-full h-3 w-3 border border-white border-t-transparent"></div>
                                ) : (
                                    <Settings size={14} />
                                )}
                                Kaydet
                            </Button>
                        </>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
                {/* Avatar */}
                <div className="relative">
                    {isEditing ? (
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center border-2 border-orange-200 overflow-hidden">
                            {editPhoto ? (
                                <img
                                    src={editPhoto}
                                    alt="Profil resmi"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-3xl">{editAvatar}</span>
                            )}
                        </div>
                    ) : (
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                            {profile.photo ? (
                                <img
                                    src={profile.photo}
                                    alt="Profil resmi"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-3xl text-white">{profile.avatar}</span>
                            )}
                        </div>
                    )}
                    {isEditing && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                            <Camera size={12} className="text-white" />
                        </div>
                    )}
                </div>

                {/* Name and Info */}
                <div className="flex-1">
                    {isEditing ? (
                        <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                            placeholder="Adınız..."
                        />
                    ) : (
                        <h4 className="text-xl font-bold text-gray-800">{profile.name}</h4>
                    )}
                    <p className="text-sm text-gray-500">
                        Üye: {formatDate(profile.createdAt)}
                    </p>
                </div>
            </div>

            {/* Avatar Selection (when editing) */}
            {isEditing && (
                <div className="mb-4">
                    <label className="block text-sm font-medium text-orange-700 mb-2">
                        Profil Resmi
                    </label>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 rounded-full border-2 border-orange-200 overflow-hidden bg-orange-50 flex items-center justify-center">
                                {editPhoto ? (
                                    <img
                                        src={editPhoto}
                                        alt="Profil resmi"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-2xl">{editAvatar}</span>
                                )}
                            </div>
                            <div className="flex-1">
                                <label
                                    htmlFor="photo-upload-edit"
                                    className="inline-flex items-center px-3 py-2 border border-orange-300 rounded-md shadow-sm text-sm font-medium text-orange-700 bg-white hover:bg-orange-50 cursor-pointer"
                                >
                                    <Camera className="w-4 h-4 mr-2" />
                                    Fotoğraf Yükle
                                </label>
                                <input
                                    id="photo-upload-edit"
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePhotoUpload}
                                    className="hidden"
                                />
                                <p className="mt-1 text-xs text-gray-500">
                                    PNG, JPG, GIF (max 5MB)
                                </p>
                            </div>
                        </div>

                        {editPhoto && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    setEditPhoto(null);
                                    setEditAvatar('👤');
                                }}
                                className="border-orange-300 text-orange-700 hover:bg-orange-50"
                            >
                                <X className="w-4 h-4 mr-2" />
                                Fotoğrafı Kaldır
                            </Button>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-orange-700 mb-2">
                                Avatar Seçin (Fotoğraf yüklemezseniz)
                            </label>
                            <div className="grid grid-cols-8 gap-2 max-h-32 overflow-y-auto">
                                {AVATAR_OPTIONS.map((avatar) => (
                                    <button
                                        key={avatar}
                                        type="button"
                                        onClick={() => {
                                            setEditAvatar(avatar);
                                            setEditPhoto(null);
                                        }}
                                        className={`w-10 h-10 rounded-lg border-2 transition-all duration-200 flex items-center justify-center text-xl ${editAvatar === avatar && !editPhoto
                                            ? 'border-orange-500 bg-orange-50 scale-110'
                                            : 'border-orange-200 hover:border-orange-300 hover:scale-105'
                                            }`}
                                    >
                                        {avatar}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Logout Button */}
            {onLogout && !isEditing && (
                <Button
                    onClick={onLogout}
                    variant="outline"
                    size="sm"
                    className="w-full mt-4 text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
                >
                    Çıkış Yap
                </Button>
            )}
        </div>
    );
}