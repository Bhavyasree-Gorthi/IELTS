import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-yellow-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              <span>Rated 4.9/5 by 2000+ Students</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              Achieve Your Dream
              <span className="text-indigo-600"> IELTS Score</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Expert-led training with personalized coaching, AI-powered practice tests,
              and proven strategies to help you succeed in your IELTS journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/enroll">
                <button className="group bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/courses">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold border-2 border-gray-200">
                  View Courses
                </button>
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">15,000+</p>
                <p className="text-sm text-gray-600">Students Trained</p>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">8.5+</p>
                <p className="text-sm text-gray-600">Average Band Score</p>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">98%</p>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-2xl blur-3xl opacity-10"></div>
            <img
              src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Students studying IELTS"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Star className="w-6 h-6 text-yellow-600 fill-current" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">Band 8+</p>
                  <p className="text-sm text-gray-600">Guaranteed Results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
