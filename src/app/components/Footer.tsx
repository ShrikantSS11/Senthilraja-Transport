import { Link } from "react-router";
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-white">Senthilraja Transports</div>
            </div>
            <p className="text-sm">Your trusted partner for safe and timely goods transportation across Salem, Erode, Tiruchengode, and Sivakasi.</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-blue-400 transition-colors">Services</Link>
              </li>
              <li>
                
              </li>
              <li>
                <Link to="/gallery" className="hover:text-blue-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>Sivakasi</li>
              <li>Tiruchengode</li>
              <li>Salem</li>
              <li>Erode</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>4/19 ALLANKATTU PUDUR
ATHANUR
RASIPURAM, THENGALPALAYAM
NAMAKKAL-636301</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 99940 49209</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span><span className="font-bold">arpsenthilrajatransports@gmail.com</span></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; Senthilraja Transports. </p>
        </div>
      </div>
    </footer>
  );
}