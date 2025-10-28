import { useState, useEffect } from 'react';
import { loadImageFromPath, removeBackground } from '@/utils/removeBackground';

interface ProcessedIconProps {
  src: string;
  alt: string;
  className?: string;
}

const ProcessedIcon = ({ src, alt, className = "w-8 h-8" }: ProcessedIconProps) => {
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processIcon = async () => {
      try {
        setIsProcessing(true);
        const img = await loadImageFromPath(src);
        const blob = await removeBackground(img);
        const url = URL.createObjectURL(blob);
        setProcessedUrl(url);
        setError(null);
      } catch (err) {
        console.error('Error processing icon:', err);
        setError('Failed to process icon');
        // Fallback to original image
        setProcessedUrl(src);
      } finally {
        setIsProcessing(false);
      }
    };

    processIcon();

    // Cleanup
    return () => {
      if (processedUrl && processedUrl.startsWith('blob:')) {
        URL.revokeObjectURL(processedUrl);
      }
    };
  }, [src]);

  if (isProcessing) {
    return (
      <div className={`${className} animate-pulse bg-gold/20 rounded`} />
    );
  }

  if (error || !processedUrl) {
    return <img src={src} alt={alt} className={`${className} object-contain`} />;
  }

  return <img src={processedUrl} alt={alt} className={`${className} object-contain`} />;
};

export default ProcessedIcon;
