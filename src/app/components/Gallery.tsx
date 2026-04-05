import { useState } from "react";
import { X } from "lucide-react";

// ✅ Correct image imports
import img1 from "../../assets/6d90b3528200a5de0d3e9309e5dc12babddc5bca.png";
import img2 from "../../assets/e33519985194a528bb0fbab36a7882ff5dc6cdee.png";
import img3 from "../../assets/0abce1b672a4844287c0d9c5faba440d630e6690.png";
import img4 from "../../assets/fcab398356d592a41a2ff2dc72e400e544d864ef.png";
import img5 from "../../assets/99aa4f5325baba04b2d33ceba5795d93b6093b4a.png";
import img6 from "../../assets/55ca3eae0b61a521c73e04c0bee3216fc43038e4.png";

// ✅ Type
interface GalleryImage {
  id: string;
  src: string;
  title: string;
  date: string;
}

// ✅ Data
const galleryImages: GalleryImage[] = [
  { id: "1", src: img1, title: "Vintage Goods Carrier", date: "Heritage Vehicle" },
  { id: "2", src: img2, title: "Decorated Transport Truck", date: "Special Occasion" },
  { id: "3", src: img3, title: "Ashok Leyland Fleet", date: "Modern Fleet" },
  { id: "4", src: img4, title: "Fleet at Work Site", date: "Operations" },
  { id: "5", src: img5, title: "Complete Fleet Lineup", date: "Our Vehicles" },
  { id: "6", src: img6, title: "Vehicle Registration Detail", date: "TN 28 AH8357" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our fleet, operations, and successful deliveries
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{image.title}</h3>
                  <p className="text-sm text-gray-500">{image.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-white rounded-lg overflow-hidden">
              <div className="max-h-[70vh] flex items-center justify-center bg-gray-100">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-500">{selectedImage.date}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}