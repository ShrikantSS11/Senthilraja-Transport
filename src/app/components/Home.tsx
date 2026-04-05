import image_f3fd44dce54857b06b57e87f52796c8088dd9ec6 from "../../assets/f3fd44dce54857b06b57e87f52796c8088dd9ec6.png";
import { Link } from "react-router";
import { ArrowRight, Truck, Clock, Shield, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "../../assets/3e7c995cbc3eadeafc6dce80dcf5565daa6b612f.png";
import truckAnimation from "../../assets/c2346e4cab8d0f7e74632b3a07db8c122f5cf518.png";
import { motion } from "motion/react";

export function Home() {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "On-Time Delivery",
      description: "We guarantee timely delivery of your goods with our efficient logistics network.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe & Secure",
      description: "Your cargo is insured and handled with utmost care throughout the journey.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Modern Fleet",
      description: "Well-maintained trucks equipped with GPS tracking for real-time monitoring.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Experienced Team",
      description: "Professional drivers and staff with years of experience in goods transportation.",
    },
  ];

  // ✅ Stats
  const stats = [
    { label: "Years of Experience", value: "15+" },
    { label: "Happy Clients", value: "500+" },
    { label: "Trucks in Fleet", value: "5+" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImage}
            alt="Trucks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="relative">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              SENTHILRAJA TRANSPORTS
            </h1>

            {/* Truck Animation */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-32 md:w-48 pointer-events-none"
              initial={{ x: "-100vw" }}
              animate={{ x: "100vw" }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <img src={truckAnimation} alt="Truck" />
            </motion.div>
          </div>

          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Your trusted partner for safe, secure, and timely delivery across
            Sivakasi, Tiruchengode, Salem, Erode
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 justify-center"
            >
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/fleet"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold"
            >
              View Our Fleet
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Stats Section FIXED */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="min-w-[150px]">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ImageWithFallback
            src={image_f3fd44dce54857b06b57e87f52796c8088dd9ec6}
            alt="Truck"
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}