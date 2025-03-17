// src/app/art/paintings/chinatown/page.tsx
import Gallery from '@/components/Gallery';
// import GalleryServer from '@/components/GalleryServer';

const ChinatownPage = () => {
  return (
    <div>
      <h2>Chinatown Series</h2>
      <Gallery series="chinatown" description="A series of paintings inspired by the vibrant streets of Chinatown." />
      {/* <GalleryServer series="chinatown" description="A series of paintings inspired by the vibrant streets of Chinatown." /> */}

    </div>
  );
};

export default ChinatownPage;