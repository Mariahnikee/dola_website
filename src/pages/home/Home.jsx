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
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-20 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* reverse only on large screen */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left space-y-6 order-1 lg:order-none">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Dola Nancy Bankole <br />
                <span className="text-purple-700">
                  Where Faith Meets Healing
                </span>
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                Dola Nancy Bankole supports families, teens, and communities
                through counseling, art therapy, and faith-based guidance. With
                compassion and wisdom, she helps individuals navigate life's
                challenges while fostering wellness, integrity, and love.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link
                  to="/booking"
                  className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors flex items-center justify-center"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/resources"
                  className="border-2 border-purple-700 text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 hover:text-white transition-colors flex items-center justify-center"
                >
                  Explore Resources
                </Link>
              </div>
            </div>

            {/* Right Content (Image) */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end items-center order-2 lg:order-none relative">
              <div className="relative w-60 h-60 md:w-80 md:h-80">
                {/* glowing halo background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 via-pink-200 to-yellow-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>

                {/* circular image with slight tilt and hover animation */}
                <img
                  src="/pppp.png"
                  alt="Dola Nancy Bankole - Professional Counselor"
                  className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl transform hover:scale-105 hover:rotate-1 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* Services Section */}
<section className="py-20 bg-gradient-to-b from-white to-purple-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
        Explore Our Comprehensive Counseling Services
      </h2>
      <p className="text-purple-700 font-medium mb-4">
        Healing hearts, restoring hope, and nurturing wholeness.
      </p>
      <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
        Discover how faith-based counseling can transform your life through 
        our specialized services designed to meet your unique needs 
        and circumstances.
      </p>
    </div>

    {/* Service Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Family & Marriage Counseling */}
      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-full h-48 mb-5 overflow-hidden rounded-xl">
          <img
            src="/img4.png"
            alt="Family & Marriage Counseling"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex items-center mb-3">
          <Heart className="h-5 w-5 text-purple-600 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900">
            Family & Marriage Counseling
          </h3>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Rebuild connection, improve communication, and heal together 
          through faith-centered relationship guidance.
        </p>
        <Link
          to="/booking"
          className="text-purple-700 font-semibold hover:underline flex items-center"
        >
          Book a Session
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      {/* Mental Health Counseling */}
      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-full h-48 mb-5 overflow-hidden rounded-xl">
          <img
            src="/img3.png"
            alt="Mental Health Counseling"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex items-center mb-3">
          <Star className="h-5 w-5 text-purple-600 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900">
            Mental Health Counseling
          </h3>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Navigate anxiety, trauma, depression, and emotional struggles 
          with compassion, prayer, and clarity.
        </p>
        <Link
          to="/booking"
          className="text-purple-700 font-semibold hover:underline flex items-center"
        >
          Book a Session
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      {/* Youth & Teen Counseling */}
      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-full h-48 mb-5 overflow-hidden rounded-xl">
          <img
            src="/img5.png"
            alt="Children, Teen & Youth Counseling"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex items-center mb-3">
          <Users className="h-5 w-5 text-purple-600 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900">
            Children, Teen & Youth Counseling
          </h3>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Guiding young people through identity, confidence, and 
          purpose with Christ-centered wisdom.
        </p>
        <Link
          to="/booking"
          className="text-purple-700 font-semibold hover:underline flex items-center"
        >
          Book a Session
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Workshops & Programs Section */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Workshops & Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dola Nancy Bankole workshops and programs are designed as
              practical steps on your journey to emotional and spiritual
              wellness. Each session creates space for reflection, connection,
              and breakthrough whether you’re navigating parenting, mental
              health, or personal transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white   rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4 text-[#F97D1C]">
                <Heart className="h-8 w-8" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Parenting with Purpose
              </h3>
              <p className="text-gray-600">
                Faith-based parenting strategies and family dynamics workshops
                designed to strengthen family bonds.
              </p>
            </div>

            <div className="bg-white  rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4 text-[#F97D1C]">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Faith-Centered Connection
              </h3>
              <p className="text-gray-600 mb-6">
                Every session blends professional counseling methods with
                biblical principles and prayer.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4 text-[#F97D1C]">
                <HandHeart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Healing Circle for Women
              </h3>
              <p className="text-gray-600 mb-6">
                Women's support group focusing on healing, empowerment, and
                spiritual growth.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:mt-8">
            <button className="border-2 border-gray-200 text-black px-8 py-2 rounded-lg font-semibold hover:bg-purple-800 hover:text-white transition-colors flex items-center justify-center">
              Learn More
            </button>

            <button className="text-purple-800 px-8 py-2 rounded-lg font-semibold hover:text-grey-500 transition-colors flex items-center justify-center">
              Sign Up
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="bg-[#E9D9F2] py-8">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore the Transformative Power of Dola Nancy Bankole Books
            </h2>
          </div>
          {/* Book Display */}
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-24 justify-center">
            <img
              src="/the_seed.png"
              alt="Healing Power by Dola Bankole"
              className="w-52 md:w-60 h-auto rounded-lg shadow-md"
            />
            <div className="text-center md:text-left max-w-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Healing Power
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                By Dola Nancy Bankole
              </p>
              <p className="text-gray-700 mb-6">
                Discover how faith, wisdom, and practical guidance can bring
                healing, restoration, and renewed hope to every step of your
                journey
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  to="/Resources"
                  className="inline-flex items-center border-2 border-gray-400 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-purple-700 hover:text-white hover:border-purple-700 transition"
                >
                  View All Books
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* world mission and event */}
      <section className="py-16 bg-white sm:py-20 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Events & Global Reach
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover the heart of our ministry through empowering gatherings
              and impactful worldwide initiatives.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Upcoming Events & Programs Card */}
            <div className="bg-white border-l-4 border-purple-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Upcoming Events & Programs
              </h3>
              <ul className="mt-4 space-y-3 text-gray-700 list-none">
                <li className="flex items-center">
                  <CircleCheck className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span>Prophetic Parenting Prayer</span>
                </li>
                <li className="flex items-center">
                  <CircleCheck className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span>Women & Children Conference</span>
                </li>
                <li className="flex items-center">
                  <CircleCheck className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span>Prayers for Blessed Mum Altars</span>
                </li>
              </ul>
              <div className="mt-8 flex justify-center">
                <Link
                  to="/event"
                  className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  View All Events
                </Link>
              </div>
            </div>

            {/* Women & Ward Mission Card */}
            <div className="bg-white border-l-4 border-purple-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Women & Ward Mission
              </h3>
              <ul className="mt-4 space-y-3 text-gray-700 list-none">
                <li className="flex items-center">
                  <CircleCheck className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span>Empowering women to lead and thrive.</span>
                </li>
                <li className="flex items-center">
                  <CircleCheck className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span>Focus on family support and outreach.</span>
                </li>
                <li className="flex items-center">
                  <CircleCheck className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span>Partner with us for global impact.</span>
                </li>
              </ul>
              <div className="mt-8 flex justify-center">
                <Link
                  to="/event"
                  className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 bg-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Discover the Transformative Power
            </h2>
            <p className="text-xl text-purple-200">of Dola's Faith & Spirit</p>
            <p className="text-purple-200 mt-2">
              Hear from those whose lives have been touched by faith-based
              counseling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-700 font-semibold">MJ</span>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Dola's approach helped me find peace during my darkest moments.
                Her faith-based counseling provided exactly what I needed -
                professional guidance wrapped in spiritual love."
              </p>
              <p className="font-semibold text-gray-900">Maria Johnson</p>
              <p className="text-sm text-gray-500">
                Individual Counseling Client
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-700 font-semibold">DS</span>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Our marriage was saved through Dola's counseling. She helped us
                rediscover our love and build it on a foundation of faith that
                continues to sustain us."
              </p>
              <p className="font-semibold text-gray-900">
                David & Sarah Miller
              </p>
              <p className="text-sm text-gray-500">
                Marriage Counseling Clients
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-700 font-semibold">LT</span>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "As a teenager struggling with identity and purpose, Dola helped
                me understand who I am in God's eyes. Her counseling changed the
                trajectory of my entire life."
              </p>
              <p className="font-semibold text-gray-900">Lisa Thompson</p>
              <p className="text-sm text-gray-500">Youth Counseling Client</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-purple-200 mb-6">
              Join hundreds of others who have found healing and hope through
              faith-based counseling
            </p>
            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Share Your Story
            </button>
          </div>
        </div>
      </section> */}

      {/* Support/Newsletter Section */}
      <div className="bg-[#6B3FA0] px-8 py-16 md:py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="text-white mb-8 md:mb-0 md:mr-12">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4 leading-tight">
              Support Our Life-Changing Mission
            </h1>
          </div>

          {/* Right Content */}
          <div className="text-white max-w-md">
            <p className="text-lg mb-6 leading-relaxed">
              Help us make healing accessible. Your gift supports families and
              communities in need.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#F97D1C] hover:bg-orange-500 text-white font-semibold px-4 py-3 rounded transition-colors duration-200">
                Donate Now
              </button>
              <button className="bg-transparent border-1 border-black hover:bg-white hover:text-black text-white font-semibold px-4 py-3 rounded transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      {/* <section className="bg-purple-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Take the First Step Today
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Begin your journey toward healing and growth with compassionate,
            faith-based counseling support. Your breakthrough is just one
            conversation away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Your Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors">
              Learn About Our Services
            </button>
          </div>
          <p className="text-purple-200 mt-4 text-sm">
            Free 15-minute consultation available • Insurance accepted •
            Flexible scheduling
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
