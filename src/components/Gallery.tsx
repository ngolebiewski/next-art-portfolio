// src/components/Gallery.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface GalleryProps {
  series: string;
  description: string;
}

const Gallery = ({ series, description }: GalleryProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const imageList = Array.from({ length: 10 }, (_, i) => `${i + 1}.jpg`);
    setImages(imageList);
  }, []);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setCurrentIndex(images.indexOf(image));
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    setSelectedImage(images[(currentIndex > 0 ? currentIndex - 1 : images.length - 1)]);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    setSelectedImage(images[(currentIndex < images.length - 1 ? currentIndex + 1 : 0)]);
  };

  return (
    <div className="p-4">
      <p className="mb-4">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image} className="cursor-pointer" onClick={() => openModal(image)}>
            <Image
              src={`/images/${series}/${image}`}
              alt={`${series} image ${image}`}
              width={500}
              height={300}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-gray-200 rounded-full p-2"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <div className="relative">
              {selectedImage && (
                <Image
                  src={`/images/${series}/${selectedImage}`}
                  alt={`${series} image ${selectedImage}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              )}
              <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-0 ml-4 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute top-1/2 right-0 mr-4 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Gallery;