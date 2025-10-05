import { Mic, FileText, Brain, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: Mic,
    title: 'Speaking Practice',
    description: 'Interactive one-on-one speaking sessions with certified trainers to boost your confidence and fluency.',
    color: 'indigo',
    link: '/speaking-practice',
  },
  {
    icon: FileText,
    title: 'Mock Tests',
    description: 'Full-length practice tests simulating real IELTS exam conditions with detailed performance analysis.',
    color: 'yellow',
    link: '/mock-tests',
  },
  {
    icon: Brain,
    title: 'AI Band Score Prediction',
    description: 'Advanced AI technology to predict your band score and identify areas for improvement instantly.',
    color: 'indigo',
    link: '/ai-band-score',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Study Materials',
    description: 'Access to curated resources, video lessons, and downloadable content for all four modules.',
    color: 'yellow',
    link: '/study-materials',
  },
];

const colorClasses = {
  indigo: {
    bg: 'bg-indigo-100',
    text: 'text-indigo-600',
    hover: 'group-hover:bg-indigo-600',
  },
  yellow: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-600',
    hover: 'group-hover:bg-yellow-600',
  },
};

export default function Features() {
  const navigate = useNavigate();

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose IELTS Excellence?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach combines expert instruction, cutting-edge technology,
            and personalized support to ensure your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            const colors = colorClasses[feature.color as keyof typeof colorClasses];

            return (
              <div
                key={feature.title}
                onClick={() => navigate(feature.link)}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent cursor-pointer"
              >
                <div className={`${colors.bg} ${colors.hover} w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300`}>
                  <Icon className={`w-7 h-7 ${colors.text} group-hover:text-white transition-colors duration-300`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
