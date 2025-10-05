import { Brain, Zap, TrendingUp, CheckCircle, Upload, FileText, MessageSquare } from 'lucide-react';

export default function AIBandScore() {
  const features = [
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get your predicted band score within seconds of completing your test.',
    },
    {
      icon: TrendingUp,
      title: 'Detailed Analytics',
      description: 'Understand your strengths and weaknesses across all four modules.',
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Advanced machine learning algorithms trained on thousands of real IELTS scores.',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Complete Your Test',
      description: 'Take any of our practice tests or upload your practice answers.',
    },
    {
      step: '2',
      title: 'AI Analysis',
      description: 'Our AI system analyzes your responses using advanced algorithms.',
    },
    {
      step: '3',
      title: 'Get Your Score',
      description: 'Receive detailed band predictions and personalized improvement suggestions.',
    },
  ];

  const modules = [
    {
      icon: FileText,
      name: 'Reading',
      accuracy: '95%',
    },
    {
      icon: MessageSquare,
      name: 'Listening',
      accuracy: '94%',
    },
    {
      icon: Upload,
      name: 'Writing',
      accuracy: '91%',
    },
    {
      icon: MessageSquare,
      name: 'Speaking',
      accuracy: '89%',
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full mb-6">
            <Brain className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            AI Band Score Prediction
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge artificial intelligence to predict your IELTS band score with remarkable accuracy. Get instant feedback and personalized improvement recommendations.
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-2xl p-12 mb-20 text-white">
          <h2 className="text-3xl font-bold mb-4 text-center">Prediction Accuracy</h2>
          <p className="text-center text-indigo-100 mb-12 text-lg">
            Our AI model has been trained on over 50,000 real IELTS test results
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Icon className="w-10 h-10 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">{module.name}</h4>
                  <p className="text-3xl font-bold text-yellow-300">{module.accuracy}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6 text-2xl font-bold text-yellow-600">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-indigo-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What You'll Receive
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                'Overall band score prediction (0-9 scale)',
                'Individual scores for each module',
                'Comparison with target score',
                'Strengths and weaknesses analysis',
                'Personalized study recommendations',
                'Progress tracking over time',
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-indigo-50 rounded-xl p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Try It Now</h3>
              <p className="text-gray-700 mb-6">
                Experience the power of AI-driven band score prediction. Take a practice test or upload your answers to get started.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-semibold shadow-lg">
                  Take Practice Test
                </button>
                <button className="w-full bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors duration-200 font-semibold">
                  Upload Answers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
