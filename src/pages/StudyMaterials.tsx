import { BookOpen, Download, Video, FileText, Headphones, Users, Lock } from 'lucide-react';

export default function StudyMaterials() {
  const materialCategories = [
    {
      icon: FileText,
      title: 'Reading Materials',
      count: '200+',
      items: [
        'Academic reading passages',
        'General training texts',
        'Practice questions with answers',
        'Reading strategies guide',
        'Vocabulary building exercises',
      ],
      color: 'indigo',
    },
    {
      icon: Headphones,
      title: 'Listening Resources',
      count: '150+',
      items: [
        'Audio recordings with transcripts',
        'Conversation practice files',
        'Lecture and monologue samples',
        'Multiple accent exposure',
        'Note-taking templates',
      ],
      color: 'yellow',
    },
    {
      icon: FileText,
      title: 'Writing Templates',
      count: '100+',
      items: [
        'Task 1 & Task 2 templates',
        'Sample essays (Band 7-9)',
        'Grammar reference guides',
        'Linking words and phrases',
        'Common topics and questions',
      ],
      color: 'indigo',
    },
    {
      icon: Video,
      title: 'Video Lessons',
      count: '80+',
      items: [
        'Expert technique tutorials',
        'Speaking test demonstrations',
        'Writing task walkthroughs',
        'Tips and tricks videos',
        'Common mistakes to avoid',
      ],
      color: 'yellow',
    },
  ];

  const features = [
    {
      icon: Download,
      title: 'Downloadable Content',
      description: 'Access all materials offline with PDF downloads and audio files.',
    },
    {
      icon: Users,
      title: 'Study Groups',
      description: 'Join online study groups and discussion forums with fellow learners.',
    },
    {
      icon: Video,
      title: 'Video Library',
      description: 'Comprehensive video lessons covering all aspects of IELTS preparation.',
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full mb-6">
            <BookOpen className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Study Materials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive library of IELTS preparation materials, including practice tests, video lessons, study guides, and downloadable resources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {materialCategories.map((category, index) => {
            const Icon = category.icon;
            const bgColor = category.color === 'indigo' ? 'bg-indigo-100' : 'bg-yellow-100';
            const textColor = category.color === 'indigo' ? 'text-indigo-600' : 'text-yellow-600';
            const borderColor = category.color === 'indigo' ? 'border-indigo-600' : 'border-yellow-500';

            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-l-4 ${borderColor}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`${bgColor} w-14 h-14 rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 ${textColor}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className={`text-sm font-semibold ${textColor}`}>{category.count} Resources</p>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className={`${textColor} font-bold mt-1`}>•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full mt-6 ${category.color === 'indigo' ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-yellow-500 hover:bg-yellow-600'} text-white px-6 py-3 rounded-lg transition-colors duration-200 font-semibold flex items-center justify-center space-x-2`}>
                  <Download className="w-5 h-5" />
                  <span>Access Materials</span>
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-2xl p-12 mb-20 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Premium Content Library</h2>
            <p className="text-indigo-100 text-lg">
              Get unlimited access to all study materials with our premium membership
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-indigo-100">Practice Questions</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">80+</p>
              <p className="text-indigo-100">Video Lessons</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-indigo-100">Sample Essays</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">200+</p>
              <p className="text-indigo-100">Audio Files</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Everything You Need to Succeed
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Our comprehensive study materials are designed by IELTS experts and updated regularly to reflect the latest exam patterns and trends.
              </p>
              <ul className="space-y-4">
                {[
                  'Updated monthly with new content',
                  'Mobile-friendly for study on-the-go',
                  'Organized by difficulty level',
                  'Includes answer keys and explanations',
                  'Compatible with all devices',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-indigo-600 font-bold text-xl">✓</span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-indigo-50 rounded-xl p-8 border-2 border-indigo-200">
              <div className="flex items-center justify-center mb-6">
                <Lock className="w-12 h-12 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Unlock Full Access
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Join thousands of successful students and get access to all premium study materials.
              </p>
              <button className="w-full bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-semibold text-lg shadow-lg">
                Get Premium Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
