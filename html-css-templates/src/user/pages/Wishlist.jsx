// pages/Wishlist.jsx
import { useWishlist } from "../context/WishlistContext";
import TemplateCard from "../components/TemplateCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <>
      <Navbar />
      <section className="pt-32 px-8 min-h-screen bg-white">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">❤️ Your Bookmarks</h1>
          {wishlist.length === 0 ? (
            <p className="text-gray-600 text-center py-8">No templates saved yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
              {wishlist.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Wishlist;
