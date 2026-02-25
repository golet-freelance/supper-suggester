
interface LoadingScreenProps {
    message?: string;
}

export function LoadingScreen({ message = "Yükleniyor..." }: LoadingScreenProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-200 border-t-orange-500 mx-auto mb-4"></div>
                <p className="text-gray-600">{message}</p>
            </div>
        </div>
    );
}