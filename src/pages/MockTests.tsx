import { FileText, Headphones, Mic, PenTool, Clock, BarChart, Target, Award } from 'lucide-react';

export default function MockTests() {
  const modules = [
    {
      icon: Headphones,
      title: 'Listening',
      duration: '30 minutes',
      questions: '40 questions',
      description: 'Test your listening skills with authentic recordings and diverse accents.',
      color: 'indigo',
    },
    {
      icon: FileText,
      title: 'Reading',
      duration: '60 minutes',
      questions: '40 questions',
      description: 'Practice with academic and general texts to improve comprehension.',
      color: 'yellow',
    },
    {
      icon: PenTool,
      title: 'Writing',
      duration: '60 minutes',
      questions: '2 tasks',
      description: 'Develop essay writing and task response skills with expert evaluation.',
      color: 'indigo',
    },
    {
      icon: Mic,
      title: 'Speaking',
      duration: '11-14 minutes',
      questions: '3 parts',
      description: 'Build confidence with face-to-face or recorded speaking practice.',
      color: 'yellow',
    },
  ];

  const features = [
    {
      icon: Target,
      title: 'Real Exam Conditions',
      description: 'Experience the actual test environment with accurate timing and format.',
    },
    {
      icon: BarChart,
      title: 'Detailed Analysis',
      description: 'Get comprehensive feedback on your performance across all sections.',
    },
    {
      icon: Award,
      title: 'Band Score Prediction',
      description: 'Receive accurate band score predictions based on your test results.',
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
            <FileText className="w-10 h-10 text-yellow-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            IELTS Mock Tests
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prepare for success with full-length practice tests that simulate real IELTS exam conditions. Get detailed feedback and track your progress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const bgColor = module.color === 'indigo' ? 'bg-indigo-100' : 'bg-yellow-100';
            const textColor = module.color === 'indigo' ? 'text-indigo-600' : 'text-yellow-600';
            const borderColor = module.color === 'indigo' ? 'border-indigo-600' : 'border-yellow-500';

            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 ${borderColor}`}
              >
                <div className={`${bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${textColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{module.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{module.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">{module.questions}</span>
                  </div>
                </div>
                <p className="text-gray-600">{module.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-2xl p-12 mb-20 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Take Our Mock Tests?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-indigo-100">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Practice Tests Available
              </h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-3">✓</span>
                  <span>20+ full-length IELTS practice tests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-3">✓</span>
                  <span>Automatic scoring for Listening and Reading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-3">✓</span>
                  <span>Expert evaluation for Writing and Speaking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-3">✓</span>
                  <span>Performance tracking and progress reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-3">✓</span>
                  <span>Answer keys and detailed explanations</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-indigo-50 rounded-xl p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Test Package</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Full Mock Tests</span>
                  <span className="text-2xl font-bold text-indigo-600">20+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Module-wise Tests</span>
                  <span className="text-2xl font-bold text-indigo-600">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Practice Questions</span>
                  <span className="text-2xl font-bold text-indigo-600">1000+</span>
                </div>
              </div>
              <button className="w-full mt-8 bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-semibold text-lg shadow-lg">
                Start Mock Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
