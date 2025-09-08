// src/pages/Home.jsx (Main sections only - excluding Navbar, Hero, Footer)
import React from 'react';
import { Heart, Users, HandHeart, ArrowRight, Calendar, BookOpen, Star, Mail, Phone, MessageCircle } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* hero section */}
<section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
          Dola Nancy Bankole | Where Faith Meets Healing
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Dola supports families, teens, and communities through counseling, art therapy, and faith-based guidance. With compassion and wisdom, she helps individuals navigate life's challenges while fostering wellness, integrity, and love.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors flex items-center justify-center">
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative">
          <div className="  p-8">
           <div className="w-90 h-90 mx-auto mb-4 overflow-hidden rounded-[8px]">
              <img 
                src="/profilepic.png" 
                alt="Dola Nancy Bankole - Professional Counselor" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

{/*    <div className="lg:w-1/2">
                  <div className="relative">
 className="w-80 h-96 mx-auto mb-4 overflow-hidden rounded-lg"
                      <div className="w-90 h-90 mx-auto mb-4 overflow-hidden">
                        <img 
                          src="/profilepic.png" 
                          alt="Dola Nancy Bankole - Professional Counselor" 
                          className="w-full h-full object-cover"
                        />
                      </div>

                  </div>
                </div> */}

    </div>
  </div>
</section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Comprehensive Counseling Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how faith-based counseling can transform your life through our specialized services 
              designed to meet your unique needs and circumstances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-purple-700 mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Family & Marriage Counseling
              </h3>
              <p className="text-gray-600 mb-6">
                Strengthen relationships and build lasting bonds through faith-centered guidance and therapeutic support.
              </p>
              <button className="text-purple-700 font-semibold flex items-center hover:text-purple-800 transition-colors">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-purple-700 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mental Health Counseling
              </h3>
              <p className="text-gray-600 mb-6">
                Professional mental health support integrating spiritual principles with evidence-based therapeutic approaches.
              </p>
              <button className="text-purple-700 font-semibold flex items-center hover:text-purple-800 transition-colors">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-purple-700 mb-4">
                <HandHeart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Children, Teen & Youth Counseling
              </h3>
              <p className="text-gray-600 mb-6">
                Specialized care for young people, helping them navigate challenges while building strong spiritual foundations.
              </p>
              <button className="text-purple-700 font-semibold flex items-center hover:text-purple-800 transition-colors">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops & Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Workshops & Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dola’s workshops and programs are designed as practical steps on your journey to emotional and spiritual wellness. Each session creates space for reflection, connection, and breakthrough whether you’re navigating parenting, mental health, or personal transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Parenting with Purpose
              </h3>
              <p className="text-gray-600 mb-4">
                Faith-based parenting strategies and family dynamics workshops designed to strengthen family bonds.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-purple-700 font-medium">6 weeks</span>
                <span className="text-sm text-gray-500">Next: March 15</span>
              </div>
              <button className="w-full bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors">
                Register Now
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Faith-Centered Connection
              </h3>
              <p className="text-gray-600 mb-4">
                Couples enrichment and relationship strengthening program rooted in spiritual principles.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-purple-700 font-medium">8 weeks</span>
                <span className="text-sm text-gray-500">Next: March 22</span>
              </div>
              <button className="w-full bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors">
                Register Now
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Healing Circle for Women
              </h3>
              <p className="text-gray-600 mb-4">
                Women's support group focusing on healing, empowerment, and spiritual growth.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-purple-700 font-medium">Ongoing</span>
                <span className="text-sm text-gray-500">Thursdays 7PM</span>
              </div>
              <button className="w-full bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors">
                Join Group
              </button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Upcoming Events & Programs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 text-purple-700 mr-2" />
                    <span className="text-sm text-gray-600">March 15, 2024</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Spring Renewal Workshop
                  </h4>
                  <p className="text-gray-600 mb-4">
                    A day of reflection, renewal, and spiritual refreshment for your journey ahead.
                  </p>
                  <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-r from-green-400 to-blue-400"></div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 text-purple-700 mr-2" />
                    <span className="text-sm text-gray-600">March 25, 2024</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Youth Leadership Summit
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Empowering young people to become leaders in their communities through faith.
                  </p>
                  <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-r from-yellow-400 to-red-400"></div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 text-purple-700 mr-2" />
                    <span className="text-sm text-gray-600">April 5, 2024</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Healing from Trauma Seminar
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Professional insights on trauma recovery with faith-based healing approaches.
                  </p>
                  <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book/Resources Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore the Transformative Power of Dola's Books & Spirit
            </h2>
            <p className="text-lg text-gray-600">
              Faith-based guides for healing, parenting, and spiritual growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-32 h-40 bg-gradient-to-b from-purple-400 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Healing Hearts</h3>
              <p className="text-sm text-gray-600 mb-4">
                Faith-based guides for healing emotional wounds and finding peace.
              </p>
              <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors text-sm">
                Get Book
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-32 h-40 bg-gradient-to-b from-green-400 to-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Parenting with Faith</h3>
              <p className="text-sm text-gray-600 mb-4">
                Practical wisdom for raising children with strong spiritual foundations.
              </p>
              <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors text-sm">
                Get Book
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-32 h-40 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Marriage Blessings</h3>
              <p className="text-sm text-gray-600 mb-4">
                Building stronger marriages through faith-centered principles and love.
              </p>
              <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors text-sm">
                Get Book
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-32 h-40 bg-gradient-to-b from-pink-400 to-pink-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Women of Purpose</h3>
              <p className="text-sm text-gray-600 mb-4">
                Empowering women to discover their calling and walk in purpose.
              </p>
              <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors text-sm">
                Get Book
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Discover the Transformative Power
            </h2>
            <p className="text-xl text-purple-200">
              of Dola's Faith & Spirit
            </p>
            <p className="text-purple-200 mt-2">
              Hear from those whose lives have been touched by faith-based counseling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-700 font-semibold">MJ</span>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Dola's approach helped me find peace during my darkest moments. Her faith-based counseling 
                provided exactly what I needed - professional guidance wrapped in spiritual love."
              </p>
              <p className="font-semibold text-gray-900">Maria Johnson</p>
              <p className="text-sm text-gray-500">Individual Counseling Client</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-700 font-semibold">DS</span>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Our marriage was saved through Dola's counseling. She helped us rediscover our love 
                and build it on a foundation of faith that continues to sustain us."
              </p>
              <p className="font-semibold text-gray-900">David & Sarah Miller</p>
              <p className="text-sm text-gray-500">Marriage Counseling Clients</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-700 font-semibold">LT</span>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "As a teenager struggling with identity and purpose, Dola helped me understand who I am 
                in God's eyes. Her counseling changed the trajectory of my entire life."
              </p>
              <p className="font-semibold text-gray-900">Lisa Thompson</p>
              <p className="text-sm text-gray-500">Youth Counseling Client</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-purple-200 mb-6">
              Join hundreds of others who have found healing and hope through faith-based counseling
            </p>
            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Share Your Story
            </button>
          </div>
        </div>
      </section>

      {/* Support/Newsletter Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
              <div className="w-48 h-48 mx-auto lg:mx-0 bg-purple-200 rounded-full mb-6 flex items-center justify-center">
                <div className="text-4xl text-purple-700 font-bold">DN</div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Connected with Dola
              </h2>
              <p className="text-gray-600 mb-6">
                Join our community for regular updates, inspirational content, prayer requests, and access to exclusive resources 
                that support your healing journey. Receive weekly devotions, counseling tips, and early access to workshops.
              </p>
              
              <form className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="flex items-center">
                  <input type="checkbox" id="prayer" className="mr-2" />
                  <label htmlFor="prayer" className="text-sm text-gray-600">
                    Send me prayer requests and spiritual encouragement
                  </label>
                </div>
                <button className="w-full bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors">
                  Join Our Community
                </button>
              </form>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Mail className="h-6 w-6 mx-auto text-purple-700 mb-2" />
                  <p className="text-sm font-medium text-gray-900">Weekly Newsletter</p>
                </div>
                <div>
                  <MessageCircle className="h-6 w-6 mx-auto text-purple-700 mb-2" />
                  <p className="text-sm font-medium text-gray-900">Prayer Support</p>
                </div>
                <div>
                  <Calendar className="h-6 w-6 mx-auto text-purple-700 mb-2" />
                  <p className="text-sm font-medium text-gray-900">Event Updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-purple-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Take the First Step Today
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Begin your journey toward healing and growth with compassionate, faith-based counseling support. 
            Your breakthrough is just one conversation away.
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
            Free 15-minute consultation available • Insurance accepted • Flexible scheduling
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;