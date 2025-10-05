import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SpeakingPractice from './pages/SpeakingPractice';
import MockTests from './pages/MockTests';
import AIBandScore from './pages/AIBandScore';
import StudyMaterials from './pages/StudyMaterials';
import Courses from './pages/Courses';
import Enroll from './pages/Enroll';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speaking-practice" element={<SpeakingPractice />} />
          <Route path="/mock-tests" element={<MockTests />} />
          <Route path="/ai-band-score" element={<AIBandScore />} />
          <Route path="/study-materials" element={<StudyMaterials />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
