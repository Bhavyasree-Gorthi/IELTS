import { Mic, Clock, Users, Award, CheckCircle, Play } from 'lucide-react';

export default function SpeakingPractice() {
  const benefits = [
    'One-on-one sessions with certified IELTS trainers',
    'Real exam-style questions and scenarios',
    'Personalized feedback and improvement strategies',
    'Pronunciation and fluency enhancement',
    'Confidence building techniques',
    'Recording and playback for self-assessment',
  ];

  const sessions = [
    {
      title: 'Part 1: Introduction & Interview',
      duration: '4-5 minutes',
      description: 'Practice answering questions about yourself, family, work, studies, and interests.',
    },
    {
      title: 'Part 2: Individual Long Turn',
      duration: '3-4 minutes',
      description: 'Learn to speak for 2 minutes on a given topic with 1 minute preparation time.',
    },
    {
      title: 'Part 3: Two-way Discussion',
      duration: '4-5 minutes',
      description: 'Develop skills to discuss abstract topics and express complex ideas.',
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full mb-6">
            <Mic className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Speaking Practice
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the IELTS Speaking test with expert guidance, personalized feedback, and realistic practice sessions designed to boost your confidence and fluency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Get</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Session Details</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6" />
                  <span className="text-lg">30-45 minutes per session</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6" />
                  <span className="text-lg">Expert IELTS trainers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6" />
                  <span className="text-lg">Certificate upon completion</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Rate</h3>
              <p className="text-4xl font-bold text-indigo-600 mb-2">92%</p>
              <p className="text-gray-700">
                of our students achieve Band 7+ in Speaking after completing this program
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Three-Part Speaking Test
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sessions.map((session, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-indigo-600"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{session.title}</h3>
                  <Play className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="flex items-center space-x-2 text-indigo-600 mb-4">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">{session.duration}</span>
                </div>
                <p className="text-gray-600">{session.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-indigo-600 text-white px-12 py-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl">
            Book Your Speaking Session
          </button>
        </div>
      </div>
    </div>
  );
}
