import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    score: 'Band 8.5',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The personalized coaching and mock tests were instrumental in helping me achieve my target score. The trainers really understand the exam inside out!',
    country: 'United Kingdom',
  },
  {
    name: 'Rajesh Kumar',
    score: 'Band 8.0',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'I was struggling with speaking, but the one-on-one sessions transformed my confidence. I exceeded my target score thanks to IELTS Excellence!',
    country: 'Canada',
  },
  {
    name: 'Emma Chen',
    score: 'Band 9.0',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The AI-powered practice tests helped me identify my weak areas immediately. The study materials are comprehensive and easy to follow.',
    country: 'Australia',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our students who achieved their dream IELTS scores with our guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-indigo-100" />

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-yellow-200"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.country}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="pt-4 border-t border-gray-100">
                <div className="inline-flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-indigo-700">
                    Achieved: {testimonial.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
