import React from "react";

function Resources() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore the Transformative Power of Dola Nancy Bankole Books & Tools
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Dive into a carefully curated collection of books and practical
            tools designed to inspire, educate, and empower you. From insightful
            guides to actionable resources, Dola Nancy Bankole provides everything you need to
            unlock your potential and achieve meaningful growth.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <a
            href="https://a.co/d/11p91tA"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white border border-gray-100 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow"
          >
            <div className="w-full mb-4 overflow-hidden">
              <img
                src="/the_seed.png"
                alt="Family & Marriage Counseling"
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
              The S.E.E.D. Strategy
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Revolutionise Your Child's Future With These Proven Tips &
              Parental Pointers
            </p>
            <div className="inline-flex items-center border-2 border-gray-200 text-black px-8 py-2 rounded-lg font-semibold hover:bg-purple-800 hover:text-white transition-colors text-sm sm:text-base">
              View on Amazon
            </div>
          </a>
          <a
            href="https://a.co/d/amBkxsi"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white border border-gray-100 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow"
          >
            <div className="w-full mb-4 overflow-hidden">
              <img
                src="/hug.png"
                alt="Family & Marriage Counseling"
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
              HUG (Healing, Understanding and Gratitude)
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              A Simple Gesture, A Profound Impact
            </p>
            <div className="inline-flex items-center border-2 border-gray-200 text-black px-8 py-2 rounded-lg font-semibold hover:bg-purple-800 hover:text-white transition-colors text-sm sm:text-base">
              Get the Book
            </div>
          </a>
          <a
            href="https://a.co/d/11p91tA"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white border border-gray-100 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow"
          >
            <div className="w-full mb-4 overflow-hidden">
              <img
                src="/the_seed.png"
                alt="Family & Marriage Counseling"
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
              The S.E.E.D. Strategy
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Revolutionise Your Child's Future With These Proven Tips &
              Parental Pointers
            </p>
            {/* Button*/}
            <div className="inline-flex items-center border-2 border-gray-200 text-black px-8 py-2 rounded-lg font-semibold hover:bg-purple-800 hover:text-white transition-colors text-sm sm:text-base">
              View on Amazon
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resources;
