import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface Event {
  id: number;
  module: string;
  title: string;
  description: string;
  date: string;
}

export default function Dashboard() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const handleModuleClick = (module: string) => {
    setSelectedModule(module === selectedModule ? null : module);
  };

  const getEventForModule = (module: string) => {
    return events.find(event => event.module.toLowerCase() === module.toLowerCase());
  };

  const modules = [
    { name: 'Speaking', icon: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png', bgColor: 'bg-blue-100' },
    { name: 'Listening', icon: 'https://cdn-icons-png.flaticon.com/512/2921/2921223.png', bgColor: 'bg-green-100' },
    { name: 'Reading', icon: 'https://cdn-icons-png.flaticon.com/512/2921/2921224.png', bgColor: 'bg-blue-300' },
    { name: 'Writing', icon: 'https://cdn-icons-png.flaticon.com/512/2921/2921225.png', bgColor: 'bg-purple-200' },
    { name: 'Vocabulary', icon: 'https://cdn-icons-png.flaticon.com/512/2921/2921226.png', bgColor: 'bg-blue-200' },
    { name: 'Practice Mock Test', icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', bgColor: 'bg-blue-200' },
  ];

  const moduleDescriptions = {
    'Speaking': 'Practice speaking skills with AI-powered feedback',
    'Listening': 'Improve listening comprehension with various audio exercises',
    'Reading': 'Enhance reading skills with diverse texts and questions',
    'Writing': 'Master writing tasks with guided practice and evaluation',
    'Vocabulary': 'Build vocabulary with interactive word games and quizzes',
    'Practice Mock Test': 'Take full-length mock tests to simulate exam conditions',
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-600 to-blue-400 text-white flex flex-col p-6">
        <div className="flex items-center space-x-3 mb-10">
          <img src="/babycode-logo-symbol.svg" alt="" className="w-10 h-10" />
          <span className="text-2xl font-bold">BabyCode</span>
        </div>
        <nav className="flex flex-col space-y-6">
          <Link to="/" className="flex items-center space-x-3 hover:text-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6"/></svg>
            <span>Home</span>
          </Link>
          <Link to="/stories" className="flex items-center space-x-3 hover:text-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/></svg>
            <span>Stories</span>
          </Link>
          <Link to="/shop" className="flex items-center space-x-3 hover:text-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2l1.5 4.5h9L18 2z"/></svg>
            <span>Shop</span>
          </Link>
          <Link to="/feedback" className="flex items-center space-x-3 hover:text-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/></svg>
            <span>Feedback</span>
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10 bg-gray-50" style={{ marginTop: '3cm' }}>
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        {/* Content area for selected module */}
        {selectedModule === 'Speaking' && (
          <div className="mb-8 p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Speaking Module</h2>
            <p>
              This section contains content related to the Speaking module. Here you can add lessons, practice exercises, tips, and other resources to help students improve their speaking skills.
            </p>
          </div>
        )}

        {error && (
          <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            Error loading events: {error}
          </div>
        )}

        <div className="grid grid-cols-3 gap-6">
          {modules.map((module) => {
            const event = getEventForModule(module.name);
            return (
              <div
                key={module.name}
                className={`${module.bgColor} rounded-xl p-6 flex flex-col items-center ${module.name === 'Speaking' ? 'cursor-pointer' : ''}`}
                onClick={() => module.name === 'Speaking' && handleModuleClick('Speaking')}
              >
                <img src={module.icon} alt={module.name} className="w-24 h-24 mb-4" />
                <span className="text-lg font-semibold">{module.name}</span>
                <p className="text-sm text-gray-600 mt-2">{moduleDescriptions[module.name as keyof typeof moduleDescriptions]}</p>
                {event && (
                  <div className="mt-4 p-3 bg-white rounded shadow text-gray-700 text-sm">
                    <strong>Upcoming Event:</strong> {event.title} on {new Date(event.date).toLocaleDateString()}.
                    <br />
                    {event.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
