// src/app/art/paintings/chinatown/page.tsx
import Gallery from "@/components/Gallery";
// import GalleryServer from '@/components/GalleryServer';

const StreetVendorsPage = () => {
  return (
    <div>
      <h2>Street Vendors</h2>
      <Gallery
        series="street_vendors_123"
        description={`A series of paintings celebrating Street Vendors in NYC.

A portion of the sales of the original paintings and postcards support the Street Vendor Project, a membership-led organization that provides business, legal, and advocacy support to the 20,000+ street vendors in New York City.`}
      />
    </div>
  );
};

export default StreetVendorsPage;
