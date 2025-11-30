// src/pages/Home.jsx (Main sections only - excluding Navbar, Hero, Footer)
import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Users,
  HandHeart,
  ArrowRight,
  Calendar,
  BookOpen,
  Star,
  Mail,
  Phone,
  MessageCircle,
  CircleCheck,
} from "lucide-react";
const eventsImage = "/holdhands.png";
const missionsImage = "/holdhands.png";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-12 md:py-20 lg:py-28 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
            {/* Content Section */}
            <div className="lg:w-1/2 text-center lg:text-left space-y-6 md:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-purple-100">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-gray-600 font-medium">
                  Professional Counseling Services
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                  Dola Nancy Bankole
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-600 leading-snug">
                  Where Faith Meets Healing
                </p>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Experience compassionate, faith-based counseling that nurtures
                your mental, emotional, and spiritual well-being. Supporting
                individuals, families, and leaders on their journey to
                wholeness.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span>Licensed Counselor</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Faith-Based Approach</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link
                  to="/booking"
                  className="group bg-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    Book a Session
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Link>
                <Link
                  to="/resources"
                  className="group border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    Explore Resources
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Decorative ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-2xl"></div>

                {/* Image container */}
                <div className="relative rounded-full overflow-hidden shadow-2xl w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 ring-4 ring-white ring-offset-4 ring-offset-purple-50">
                  <img
                    src="/pppp.png"
                    alt="Dola Nancy Bankole - Professional Counselor offering faith-based therapy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full px-6 py-3 shadow-lg border-4 border-purple-50">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">10+</p>
                    <p className="text-xs text-gray-600 font-medium">Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
  
      {/* Services Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Enhanced */}
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-purple-700">Our Services</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Comprehensive Counseling Services
            </h2>
            
            <p className="text-lg sm:text-xl text-purple-700 font-semibold max-w-2xl mx-auto">
              Healing hearts, restoring hope, and nurturing wholeness
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how faith-based counseling can transform your life through our specialized services designed to meet your unique needs and circumstances.
            </p>
          </div>

          {/* Service Cards - Enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Family & Marriage Counseling */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/img4.png"
                  alt="Family & Marriage Counseling"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-600 transition-colors duration-300">
                    <Heart className="h-5 w-5 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    Family & Marriage Counseling
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Rebuild connection, improve communication, and heal together through faith-centered relationship guidance.
                </p>
                
                <div className="pt-2">
                  <a
                    href="/booking"
                    className="inline-flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-900 group/link"
                  >
                    <span>Book a Session</span>
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Mental Health Counseling */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/img3.png"
                  alt="Mental Health Counseling"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-600 transition-colors duration-300">
                    <Star className="h-5 w-5 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    Mental Health Counseling
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Navigate anxiety, trauma, depression, and emotional struggles with compassion, prayer, and clarity.
                </p>
                
                <div className="pt-2">
                  <a
                    href="/booking"
                    className="inline-flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-900 group/link"
                  >
                    <span>Book a Session</span>
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Youth & Teen Counseling */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/img5.png"
                  alt="Children, Teen & Youth Counseling"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-600 transition-colors duration-300">
                    <Users className="h-5 w-5 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    Children, Teen & Youth Counseling
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Guiding young people through identity, confidence, and purpose with Christ-centered wisdom.
                </p>
                
                <div className="pt-2">
                  <a
                    href="/booking"
                    className="inline-flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-900 group/link"
                  >
                    <span>Book a Session</span>
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops & Programs Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <Calendar className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-semibold text-orange-700">Interactive Programs</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Workshops & Programs
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Practical steps on your journey to emotional and spiritual wellness. Each session creates space for reflection, connection, and breakthrough.
            </p>
          </div>

          {/* Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Card 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="mb-6 inline-flex p-4 bg-orange-50 rounded-2xl group-hover:bg-orange-100 transition-colors duration-300">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Parenting with Purpose
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                Faith-based parenting strategies and family dynamics workshops designed to strengthen family bonds.
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-sm font-medium text-purple-600">
                  Next session: Coming soon
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="mb-6 inline-flex p-4 bg-orange-50 rounded-2xl group-hover:bg-orange-100 transition-colors duration-300">
                <Users className="h-8 w-8 text-orange-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Faith-Centered Connection
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                Every session blends professional counseling methods with biblical principles and prayer.
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-sm font-medium text-purple-600">
                  Weekly sessions available
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="mb-6 inline-flex p-4 bg-orange-50 rounded-2xl group-hover:bg-orange-100 transition-colors duration-300">
                <HandHeart className="h-8 w-8 text-orange-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Healing Circle for Women
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                Women's support group focusing on healing, empowerment, and spiritual growth.
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-sm font-medium text-purple-600">
                  Monthly gatherings
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/programs"
              className="group inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/signup"
              className="group inline-flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              <span>Sign Up Today</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Book Section  */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-pink-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold text-purple-700">Featured Publication</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Transformative Books
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover wisdom and healing through faith-inspired literature
            </p>
          </div>

          {/* Book Display - Enhanced */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 p-8 md:p-12 lg:p-16">
              {/* Book Image */}
              <div className="md:w-2/5 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
                  <img
                    src="/the_seed.png"
                    alt="Healing Power by Dola Nancy Bankole"
                    className="relative w-64 md:w-72 lg:w-80 h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Book Details */}
              <div className="md:w-3/5 text-center md:text-left space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Healing Power
                  </h3>
                  <p className="text-base text-gray-500 font-medium">
                    By Dola Nancy Bankole
                  </p>
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Discover how faith, wisdom, and practical guidance can bring healing, restoration, and renewed hope to every step of your journey.
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <CircleCheck className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Faith-based healing strategies</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <CircleCheck className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Personal transformation stories</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <CircleCheck className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Practical guidance for daily life</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a
                    href="/resources"
                    className="group inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-300"
                  >
                    <span>View All Books</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* world mission and event */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-purple-700">Global Impact</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Events & Global Reach
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the heart of our ministry through empowering gatherings and impactful worldwide initiatives.
            </p>
          </div>

          {/* Event Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {/* Upcoming Events Card */}
            <div className="group relative bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-l-4 border-purple-600 overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Upcoming Events & Programs
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 group/item">
                    <CircleCheck className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <div>
                      <span className="text-gray-900 font-medium">Prophetic Parenting Prayer</span>
                      <p className="text-sm text-gray-500 mt-1">Monthly prayer sessions for parents</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <CircleCheck className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <div>
                      <span className="text-gray-900 font-medium">Women & Children Conference</span>
                      <p className="text-sm text-gray-500 mt-1">Annual empowerment gathering</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <CircleCheck className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <div>
                      <span className="text-gray-900 font-medium">Prayers for Blessed Mum Altars</span>
                      <p className="text-sm text-gray-500 mt-1">Special prayer services</p>
                    </div>
                  </li>
                </ul>

                <div className="pt-4">
                  <a
                    href="/events"
                    className="group/btn inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-purple-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
                  >
                    <span>View All Events</span>
                    <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Women & Ward Mission Card */}
            <div className="group relative bg-gradient-to-br from-white to-pink-50 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-l-4 border-purple-600 overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-pink-100 rounded-xl">
                    <HandHeart className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Women & Ward Mission
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 group/item">
                    <CircleCheck className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <div>
                      <span className="text-gray-900 font-medium">Empowering women to lead and thrive</span>
                      <p className="text-sm text-gray-500 mt-1">Leadership development programs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <CircleCheck className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <div>
                      <span className="text-gray-900 font-medium">Focus on family support and outreach</span>
                      <p className="text-sm text-gray-500 mt-1">Community engagement initiatives</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <CircleCheck className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <div>
                      <span className="text-gray-900 font-medium">Partner with us for global impact</span>
                      <p className="text-sm text-gray-500 mt-1">International mission opportunities</p>
                    </div>
                  </li>
                </ul>

                <div className="pt-4">
                  <a
                    href="/mission"
                    className="group/btn inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-purple-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
    <section className="bg-gradient-to-br from-purple-700 to-purple-900 px-6 py-20 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* Left Content */}
        <div className="text-white text-center md:text-left md:flex-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Support Our Life-Changing Mission
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 leading-relaxed max-w-xl mx-auto md:mx-0">
            Help us make healing accessible. Your gift supports families and communities in need.
          </p>
        </div>

        {/* Right Content - Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:flex-shrink-0">
          <button className="group bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300">
            <span className="flex items-center justify-center gap-2">
              Donate Now
              <Heart className="w-5 h-5 fill-current" />
            </span>
          </button>
          
          <button className="group bg-transparent border-2 border-white hover:bg-white hover:text-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300">
            <span className="flex items-center justify-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
   
    </div>
  );
};

export default Home;
