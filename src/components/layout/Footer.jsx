import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Heart,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // subscription logic
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-b from-purple-50 to-purple-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
         

            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-12">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/dola.agbato"
                  target="blank"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-purple-600 hover:border-purple-600 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/dolanancybankole/"
                  target="blank"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-purple-600 hover:border-purple-600 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dola-nancy-bankole-492907319"
                  target="blank"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-purple-600 hover:border-purple-600 transition-all duration-300"
                  aria-label="Linkedin"
                >
                  <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCKxRsE-xk5NEtSBW5ub9mBg"
                  target="blank"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-purple-600 hover:border-purple-600 transition-all duration-300"
                  aria-label="Linkedin"
                >
                  <Youtube className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+17133916468"
                className="group flex items-start gap-3 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <Phone className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-0.5">
                    Call Us
                  </p>
                  <p className="font-medium">+1 (713) 391-6468</p>
                </div>
              </a>

              <a
                href="mailto:info@dolacounseling.com"
                className="group flex items-start gap-3 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <Mail className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-0.5">
                    Email Us
                  </p>
                  <p className="font-medium text-sm break-all">
                    info@dolacounseling.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-gray-600">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-0.5">
                    Location
                  </p>
                  <p className="font-medium">Houston, Texas</p>
                </div>
              </div>
            </div>
          </div>

           {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Stay Connected
              </h3>
              <p className="text-gray-600 text-sm">
                Subscribe for healing insights, upcoming events, and faith-based
                resources.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 max-w-md px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm placeholder:text-gray-400"
                />
                <button
                  onClick={handleSubscribe}
                  className="group bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold focus:outline-none focus:ring-4 focus:ring-purple-300 whitespace-nowrap"
                >
                  <span className="flex items-center justify-center gap-2">
                    Subscribe
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Social Links */}
            {/* <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-700">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/dola.agbato"
                  target="blank"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-purple-600 hover:border-purple-600 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/dolanancybankole/"
                  target="blank"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-purple-600 hover:border-purple-600 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dola-nancy-bankole-492907319"
                  target="blank"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-purple-600 hover:border-purple-600 transition-all duration-300"
                  aria-label="Linkedin"
                >
                  <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCKxRsE-xk5NEtSBW5ub9mBg"
                  target="blank"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-purple-600 hover:border-purple-600 transition-all duration-300"
                  aria-label="Linkedin"
                >
                  <Youtube className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div> */}
          </div>
         
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-purple-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © 2025 Dola Nancy Bankole. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for healing and hope</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
