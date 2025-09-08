import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Dola Nancy Bankole</h3>
            <p className="text-purple-200 mb-4">
              Where Faith Meets Healing - Providing compassionate counseling services 
              rooted in faith and professional expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-purple-200 hover:text-white transition-colors">About</a></li>
              <li><a href="/services" className="text-purple-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="/programs" className="text-purple-200 hover:text-white transition-colors">Programs</a></li>
              <li><a href="/blog" className="text-purple-200 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              {/* <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-purple-300" />
                <span className="text-purple-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-purple-300" />
                <span className="text-purple-200">info@dolacounseling.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-purple-300" />
                <span className="text-purple-200">Your City, State</span>
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-8 text-center">
          <p className="text-purple-200">
            © 2024 Dola Nancy Bankole. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;