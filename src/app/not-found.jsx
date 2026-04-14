import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
            <h1 className="text-9xl font-bold text-[#1a535c]">404</h1>
            
            <h2 className="text-3xl font-semibold mt-4 text-gray-800">
                Page Not Found
            </h2>
            
            <p className="text-gray-500 mt-2 max-w-md">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>

            <Link 
                href="/" 
                className="mt-6 px-6 py-3 bg-[#1a535c] text-white rounded-lg font-medium hover:bg-[#14424a] transition-all active:scale-95 shadow-lg"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;