"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface GalleryProps {
  series: string;
  description: string;
}

const Gallery = ({ series, description }: GalleryProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [dragStart, setDragStart] = useState<number>(0);
  const [dragEnd, setDragEnd] = useState<number>(0);

  ///////////////////////////////////
  // should be able to grab different data for this part
  // TODO TODO TODO TODO TODO TODO //
  ///////////////////////////////////
  // Right NOW just placeholder hard coded
  ///////////////////////////////////

  useEffect(() => {
    setImages(Array.from({ length: 10 }, (_, i) => `${i + 1}.jpg`));
  }, []);

  useEffect(() => {
    // Add keyboard event listener for arrow keys when modal is open
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === "ArrowLeft") {
          goToPrevious();
        } else if (e.key === "ArrowRight") {
          goToNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up event listener when modal closes
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setCurrentIndex(images.indexOf(image));
    console.log(currentIndex); // cheap trick to fix this linting error: 16:10  Error: 'currentIndex' is assigned a value but never used.  @typescript-eslint/no-unused-vars 
  };

  const closeModal = () => setSelectedImage(null);

  const goToPrevious = () =>
    setCurrentIndex((prev) => {
      const newIndex = prev > 0 ? prev - 1 : images.length - 1;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });

  const goToNext = () =>
    setCurrentIndex((prev) => {
      const newIndex = prev < images.length - 1 ? prev + 1 : 0;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });

  // Handle mouse drag for swipe gestures
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStart !== 0) {
      setDragEnd(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (dragStart - dragEnd > 100) {
      // Swiped left
      goToNext();
    }

    if (dragEnd - dragStart > 100) {
      // Swiped right
      goToPrevious();
    }
    setDragStart(0); // Reset drag
    setDragEnd(0);   // Reset drag end
  };

  return (
    <div className="p-4">
      <p className="mb-4">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" onClick={closeModal} />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel
            className="relative w-screen h-screen bg-black/100 flex items-center justify-center" 
            // bg-black is pretty nice too. But I think bg-white gives you more an art gallery vibe. Update: NO, black background makes sense for an overlay.
            // more design notes: All white bg would be good with a 'card' model that switches to more of a 'hero' view. Total React 101 type stuff, haven't you done that with Pokemon?
            //////////////////////////////////
            onMouseDown={handleMouseDown} // Start drag
            onMouseMove={handleMouseMove} // Track movement
            onMouseUp={handleMouseUp}     // End drag
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 left-4 bg-gray-800 text-white rounded-full p-2"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>

            {/* Image Display */}
            {selectedImage && (
              <Image
                src={`/images/${series}/${selectedImage}`}
                alt={`${series} image ${selectedImage}`}
                width={1600}
                height={900}
                className="max-w-full max-h-full object-contain"
              />
            )}

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2" // dark
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-40 text-gray-800 border-2 border-gray-800 rounded-full p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button> */}

          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Gallery;
