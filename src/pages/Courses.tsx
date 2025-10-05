import { GraduationCap, Clock, Users, Award, CheckCircle, TrendingUp } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: 'IELTS Academic Complete',
      duration: '12 weeks',
      students: '5,000+',
      rating: '4.9',
      price: '$299',
      level: 'All Levels',
      description: 'Comprehensive preparation for IELTS Academic test covering all four modules with expert guidance.',
      features: [
        '48 live classes with expert trainers',
        '20 full-length mock tests',
        'Unlimited practice materials',
        'One-on-one speaking sessions',
        'Writing evaluation by experts',
        'Study materials and resources',
        'Certificate of completion',
        'Lifetime access to recordings',
      ],
      color: 'indigo',
    },
    {
      title: 'IELTS General Training',
      duration: '10 weeks',
      students: '3,500+',
      rating: '4.8',
      price: '$249',
      level: 'All Levels',
      description: 'Focused preparation for IELTS General Training test with practical real-world scenarios.',
      features: [
        '40 live classes with trainers',
        '15 full-length mock tests',
        'General training specific materials',
        'Speaking practice sessions',
        'Letter and essay writing guidance',
        'Personalized feedback',
        'Certificate of completion',
        'Lifetime access to content',
      ],
      color: 'yellow',
    },
    {
      title: 'Speaking Mastery Program',
      duration: '6 weeks',
      students: '4,200+',
      rating: '4.9',
      price: '$149',
      level: 'Intermediate to Advanced',
      description: 'Intensive speaking course designed to boost confidence and fluency for Band 7+ scores.',
      features: [
        '24 speaking-focused sessions',
        'Daily speaking practice tasks',
        'Pronunciation training',
        'Fluency enhancement exercises',
        'Topic-based discussions',
        'Mock speaking tests',
        'Personalized improvement plan',
        'Recording analysis',
      ],
      color: 'indigo',
    },
    {
      title: 'Writing Excellence Course',
      duration: '6 weeks',
      students: '3,800+',
      rating: '4.8',
      price: '$149',
      level: 'Intermediate to Advanced',
      description: 'Master Task 1 and Task 2 writing with proven techniques and extensive practice.',
      features: [
        '24 writing-focused classes',
        'Weekly writing assignments',
        'Expert evaluation and feedback',
        'Grammar and vocabulary building',
        'Task-specific strategies',
        'Sample essays (Band 7-9)',
        'Writing templates and guides',
        'Progress tracking',
      ],
      color: 'yellow',
    },
    {
      title: 'Fast Track Program',
      duration: '4 weeks',
      students: '2,500+',
      rating: '4.7',
      price: '$199',
      level: 'Advanced',
      description: 'Intensive crash course for students who need quick preparation with focused learning.',
      features: [
        '32 intensive classes',
        '10 full-length mock tests',
        'Daily practice assignments',
        'Fast-track study materials',
        'Priority support',
        'Score prediction analysis',
        'Exam day strategies',
        'Last-minute tips',
      ],
      color: 'indigo',
    },
    {
      title: 'Premium One-on-One',
      duration: 'Flexible',
      students: '1,200+',
      rating: '5.0',
      price: '$599',
      level: 'All Levels',
      description: 'Personalized training with dedicated IELTS expert tailored to your specific needs.',
      features: [
        '20 private sessions',
        'Customized study plan',
        'Flexible scheduling',
        'Unlimited mock tests',
        'Comprehensive evaluation',
        'Direct trainer access',
        'Priority support 24/7',
        'Success guarantee',
      ],
      color: 'yellow',
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from certified IELTS trainers with 10+ years of experience',
    },
    {
      icon: TrendingUp,
      title: '98% Success Rate',
      description: 'Our students achieve their target band scores consistently',
    },
    {
      icon: Award,
      title: 'Certified Programs',
      description: 'All courses come with official certificates of completion',
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full mb-6">
            <GraduationCap className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            IELTS Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of IELTS preparation courses designed to help you achieve your target band score.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => {
            const borderColor = course.color === 'indigo' ? 'border-indigo-600' : 'border-yellow-500';
            const bgColor = course.color === 'indigo' ? 'bg-indigo-600' : 'bg-yellow-500';
            const hoverBgColor = course.color === 'indigo' ? 'hover:bg-indigo-700' : 'hover:bg-yellow-600';

            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 ${borderColor} overflow-hidden`}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-5 h-5" />
                      <span className="text-sm">{course.students}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Level</p>
                      <p className="font-semibold text-gray-900">{course.level}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Rating</p>
                      <p className="font-semibold text-gray-900">⭐ {course.rating}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                      <span className="text-gray-600">per course</span>
                    </div>
                    <button className={`w-full ${bgColor} ${hoverBgColor} text-white px-6 py-3 rounded-lg transition-colors duration-200 font-semibold shadow-lg`}>
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Course to Choose?</h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation with our IELTS experts to find the perfect course for your goals and timeline.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg shadow-lg">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
