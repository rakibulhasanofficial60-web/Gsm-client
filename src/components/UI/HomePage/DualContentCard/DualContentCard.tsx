import React from 'react';

const DualContentCard = () => {
  return (
    <div className="flex w-full max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden md:mt-8">
      
      {/* 1. Podcast Section */}
      <div 
        className="relative flex-1 p-12 flex items-center justify-center min-h-64 
                   bg-gradient-to-r from-purple-900 to-red-900 
                   text-white cursor-pointer transition duration-300 ease-in-out hover:opacity-90"
      >
        {/* Background Image/Overlay Mimic: Use a realistic image in production */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" 
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511192336577-041f0a993700?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center space-x-4">
          {/* Podcast Icon (using a generic microphone for simplicity or a custom icon) */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 text-white" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 2a3 3 0 00-3 3v8a3 3 0 006 0V5a3 3 0 00-3-3zm0 18a5 5 0 005-5h-2a3 3 0 01-6 0H7a5 5 0 005 5zm9-5h-2a7 7 0 01-14 0H3a9 9 0 009 9 9 9 0 009-9z" />
          </svg>
          <span className="text-4xl font-semibold">Podcast</span>
        </div>
      </div>

      {/* 2. Video Section */}
      <div 
        className="relative flex-1 p-12 flex items-center justify-center min-h-64 
                   bg-gray-800 text-white cursor-pointer transition duration-300 ease-in-out hover:opacity-90"
      >
        {/* Background Image/Overlay Mimic: Use a realistic image in production */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" 
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1594935293427-142ef598404a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center space-x-4">
          {/* Video Icon (Play Button) */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 text-white" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M6 3L18 12L6 21V3Z" />
          </svg>
          <span className="text-4xl font-semibold">video</span>
        </div>
      </div>
    </div>
  );
};

export default DualContentCard;

// Note: I used placeholder images from Unsplash to mimic the background visuals. 
// You should replace these with your actual background images for the best results.