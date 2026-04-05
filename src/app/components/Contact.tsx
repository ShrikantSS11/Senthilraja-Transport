import { useState } from "react";
import { Phone, Mail, MapPin, Send, X } from "lucide-react";
import contactImage from "../../assets/55a0783dfb862e46f91b370012f363c05589f4d5.png";
import heroImage from "../../assets/99aa4f5325baba04b2d33ceba5795d93b6093b4a.png";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    destination: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", source: "", destination: "", service: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Senthilraja Transports Fleet"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-blue-600/40 bg-[#00000066]"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with us for all your transportation needs
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Main Address</h3>
                    <p className="text-gray-600">4/19 ALLANKATTU PUDUR<br />ATHANUR<br />RASIPURAM, THENGALPALAYAM<br />NAMAKKAL-636301</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">K.S.R. Kalvi Nagar Varapalayam,<br />Tiruchengode - 637 215<br />Namakkal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 99940 49209<br />+91 94888 49209</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:arpsenthilrajatransports@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">arpsenthilrajatransports@gmail.com</a>
                    
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              
              
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden flex items-start justify-center">
                <a 
                  href="https://maps.app.goo.gl/1MxdxsrJ8W47PmMk6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="relative h-96 w-full">
                    <img 
                      src="https://images.unsplash.com/photo-1722082839841-45473f5a15cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBzYXRlbGxpdGUlMjBtYXAlMjBsb2NhdGlvbnxlbnwxfHx8fDE3NzQyNTU3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Location Map - Namakkal, Tamil Nadu"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                        <p className="text-sm font-semibold text-gray-900">Visit in Map</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Immediate Assistance?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is ready to help you with any urgent transportation needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowCallPopup(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg inline-flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </button>
              <a
                href="https://mail.google.com/mail/?view=cm&to=arpsenthilrajatransports@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 font-semibold py-3 px-8 rounded-lg inline-flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call Popup Modal */}
      {showCallPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowCallPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Call Us Now</h3>
              <p className="text-gray-600 mb-6">We're here to help with your transportation needs</p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-3xl font-bold text-blue-600">+91 99940 49209, +91 94888 49209</p>
              </div>
              
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+919994049209"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <button
                  onClick={() => setShowCallPopup(false)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}