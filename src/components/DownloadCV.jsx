import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';

const DownloadCV = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Fetch the file from the public folder
      const response = await fetch('/data/basimnawaz.pdf');
      
      if (!response.ok) throw new Error('File not found');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'basimnawaz.pdf';
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab if download fails
      window.open('/data/basimnawaz.pdf', '_blank');
    }
    setIsDownloading(false);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="group flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-neon-green/40 rounded-lg font-mono text-sm text-gray-400 hover:text-neon-green transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <FiDownload className={`group-hover:translate-y-0.5 transition-transform ${isDownloading ? 'animate-spin' : ''}`} />
      {isDownloading ? 'DOWNLOADING...' : 'DOWNLOAD CV'}
    </button>
  );
};

export default DownloadCV;
