import { ImageWithFallback } from "./figma/ImageWithFallback";
import fleetImage from "../../assets/4bba0a2b2d711d63b599bdba99e0cdb9d5b2ad12.png";
import heroImage from "../../assets/99aa4f5325baba04b2d33ceba5795d93b6093b4a.png";

export function Fleet() {
  const trucks = [
    {
      name: "Light Commercial Vehicles",
      capacity: "Up to 2 Tons",
      description: "Ideal for small loads and city deliveries with easy maneuverability.",
      features: ["Compact size", "Fuel efficient", "Perfect for urban areas", "Quick loading/unloading"],
    },
    {
      name: "Medium Trucks",
      capacity: "3-7 Tons",
      description: "Versatile trucks suitable for regional transportation and medium-sized cargo.",
      features: ["Balanced capacity", "Regional coverage", "Good fuel economy", "Reliable performance"],
    },
    {
      name: "Heavy-Duty Trucks",
      capacity: "10-16 Tons",
      description: "Powerful vehicles for large shipments and long-haul interstate transportation.",
      features: ["High capacity", "Long distance capable", "Advanced safety features", "GPS equipped"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Senthilraja Transports Fleet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Modern, well-maintained vehicles for all your transportation needs
          </p>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Diverse Fleet for Every Need</h2>
            <p className="text-xl text-gray-600">
              Senthilraja Transport Service is a reliable truck transportation service operating across Salem, Erode, Tiruchengode, and Sivakasi. We specialize in safe, timely, and secure delivery of goods, ensuring customer satisfaction with every shipment. With well-maintained vehicles and experienced drivers, we are committed to providing efficient logistics solutions and building long-term trust with our clients.
            </p>
          </div>

          {/* Trucks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trucks.map((truck, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Service Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-700">Total Vehicles</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700">GPS Enabled</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-700">Maintenance Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Safety */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Maintenance & Safety Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  All vehicles undergo scheduled maintenance checks to ensure optimal performance and safety.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Daily pre-trip inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Monthly comprehensive servicing</span>
                  </li>
                  
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Features</h3>
                <p className="text-gray-600 mb-4">
                  Equipped with modern safety systems to protect cargo and ensure driver safety.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>GPS tracking and monitoring</span>
                  </li>
                  
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Fire suppression systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}