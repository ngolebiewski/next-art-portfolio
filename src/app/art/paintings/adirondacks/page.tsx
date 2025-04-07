import Gallery from "@/components/Gallery";

const AdirondacksPage = () => {
  return (
    <div>
      <h2>Adirondacks</h2>
      <Gallery
        series="adk"
        description={`Watercolor paintings, mostly plein air, from the Adirondack Mountains, 4-6 hours north of NYC.`}
      />
    </div>
  );
};

export default AdirondacksPage;
