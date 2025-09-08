import React from 'react';
import {
  ArrowRight,
} from "lucide-react";
const propheticParentingImg = '/hands.png';
const womenAndChildrenConfImg = '/hands.png';
const blessedMumAltarsImg = '/hands.png';
const missionImage1 = '/hands.png';
const missionImage2 = '/hands.png';
const missionImage3 = '/hands.png';

const Events = () => {
  return (
    <div className="bg-white">
      {/* Upcoming Events & Programs Section */}
      <section className='py-16 bg-white'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Upcoming Events & Programs
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          Join Dola Nancy Bankole in these life-changing gatherings designed to strengthen families, empower women, and nurture faith. These are the cornerstone programs of her ministry, open to all who seek growth and connection.
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Event Card 1 */}
          <div className="flex flex-col rounded-lg shadow-md overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={propheticParentingImg} alt="Prophetic Parenting Prayer" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-xl font-semibold text-gray-900">
                  Prophetic Parenting Prayer
                </p>
                <p className="mt-3 text-base text-gray-500">
                  A powerful prayer gathering dedicated to guiding parents in raising children with wisdom, faith, and blessings. Together, we intercede for families and future generations.
                </p>
              </div>
              <div className="mt-6">
                <a href="#" className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
                  Join Prayer
                </a>
              </div>
            </div>
          </div>
          {/* Event Card 2 */}
          <div className="flex flex-col rounded-lg shadow-md overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={womenAndChildrenConfImg} alt="Women & Children Conference" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-xl font-semibold text-gray-900">
                  Women & Children Conference
                </p>
                <p className="mt-3 text-base text-gray-500">
                  An annual conference where women and children are equipped through teaching, worship, and fellowship. This event inspires women to embrace their calling and empowers children to walk boldly in faith.
                </p>
              </div>
              <div className="mt-6">
                <a href="#" className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          {/* Event Card 3 */}
          <div className="flex flex-col rounded-lg shadow-md overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={blessedMumAltarsImg} alt="Prayers for Blessed Mum Altars" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-xl font-semibold text-gray-900">
                  Prayers for Blessed Mum Altars
                </p>
                <p className="mt-3 text-base text-gray-500">
                  A weekly online prayer session for mothers seeking strength, encouragement, and a deeper connection with God. Together, we lift families and communities in prayer.
                </p>
              </div>
              <div className="mt-6">
                <a href="#" className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
                  Join Prayer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Women & World Mission Section */}
      <section className='py-16 bg-[#FAFAFA]'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Women & Ward Mission
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          Empowering women and transforming communities through faith, education, and outreach. Women & World Mission is dedicated to uplifting women and children, providing resources, counseling, and programs that foster healing, growth, and global impact.
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Mission Card 1 */}
          <div className="flex flex-col rounded-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-64 w-full object-cover" src={missionImage1} alt="Our Mission" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between text-center">
              <p className="text-xl font-semibold text-gray-900">
                Our Mission
              </p>
              <p className="mt-3 text-base text-gray-500">
                Guided by faith, we empower women to lead and thrive.
              </p>
            </div>
          </div>
          {/* Mission Card 2 */}
          <div className="flex flex-col rounded-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-64 w-full object-cover" src={missionImage2} alt="Our Work" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between text-center">
              <p className="text-xl font-semibold text-gray-900">
                Our Work
              </p>
              <p className="mt-3 text-base text-gray-500">
                Programs focused on family support, education, and community outreach.
              </p>
            </div>
          </div>
          {/* Mission Card 3 */}
          <div className="flex flex-col rounded-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-64 w-full object-cover" src={missionImage3} alt="Get Involved" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between text-center">
              <p className="text-xl font-semibold text-gray-900">
                Get Involved
              </p>
              <p className="mt-3 text-base text-gray-500">
                Partner with us to support women and children across the globe.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="mt-12">
          <a href="https://share.google/kVI8UBFAZcyjGPwmb" target='blank' className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
            Learn More on DolaStar
          </a>
        </div> */}
         <div className="flex flex-col sm:flex-row gap-6 justify-center lg:mt-8">
            <a href="https://share.google/kVI8UBFAZcyjGPwmb" target='blank' className="border-2 border-gray-200 text-black px-8 py-2 rounded-lg font-semibold hover:bg-purple-800 hover:text-white transition-colors flex items-center justify-center">
              Learn More
            </a>

            <a href="https://share.google/yZOei4odPboL5UB61" target='blank' className="text-purple-800 px-8 py-2 rounded-lg font-semibold hover:text-grey-500 transition-colors flex items-center justify-center">
              Sign Up
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

      </div>
      </section>
    </div>
  );
};

export default Events;