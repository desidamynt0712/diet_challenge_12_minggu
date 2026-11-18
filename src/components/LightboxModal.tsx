import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, ImageOff } from 'lucide-react';
import { LightboxItem } from '../config/images';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  onClick?: () => void;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  onClick,
}) => {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed) {
    return (
      <div
        onClick={onClick}
        className={`flex flex-col items-center justify-center bg-[#F3EFE6] border border-[#D5E0D7] text-[#4A6B53] p-6 text-center ${className}`}
      >
        <ImageOff className="w-8 h-8 mb-2 opacity-70" />
        <p className="text-sm font-semibold text-[#1F2937]">{fallbackTitle || alt}</p>
        <p className="text-xs text-[#4B5563] mt-1">Pratinjau gambar tidak tersedia</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      onClick={onClick}
      className={className}
      loading="lazy"
    />
  );
};

interface LightboxModalProps {
  item: LightboxItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    setZoomed(false);
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F2937]/85 backdrop-blur-sm p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col max-w-6xl w-full max-h-[92vh] bg-[#FAF6F0] rounded-2xl border border-[#D5E0D7] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3.5 bg-white border-b border-[#D5E0D7]">
          <div className="min-w-0">
            <h3 className="text-sm sm:text-base font-semibold text-[#1F2937] truncate">
              {item.title}
            </h3>
            {item.caption && (
              <p className="text-xs text-[#4B5563] truncate mt-0.5">{item.caption}</p>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setZoomed((z) => !z)}
              className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[40px] text-xs font-medium text-[#1F2937] bg-[#F3EFE6] hover:bg-[#E7E1D4] border border-[#D5E0D7] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              {zoomed ? (
                <>
                  <ZoomOut className="w-4 h-4" />
                  <span>Perkecil</span>
                </>
              ) : (
                <>
                  <ZoomIn className="w-4 h-4" />
                  <span>Perbesar</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup pratinjau"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#F3EFE6] hover:bg-[#9E525D] hover:text-white text-[#1F2937] border border-[#D5E0D7] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-3 sm:p-6 flex items-start justify-center bg-[#F3EFE6]">
          <img
            src={item.src}
            alt={item.title}
            referrerPolicy="no-referrer"
            onClick={() => setZoomed((z) => !z)}
            className={`rounded-xl border border-[#D5E0D7] bg-white shadow-sm transition-transform duration-200 cursor-zoom-in ${
              zoomed ? 'w-[140%] max-w-none cursor-zoom-out' : 'max-w-full max-h-[74vh] object-contain'
            }`}
          />
        </div>
      </div>
    </div>
  );
};
