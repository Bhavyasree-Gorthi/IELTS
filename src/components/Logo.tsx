export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="url(#gradient1)" stroke="#4F46E5" strokeWidth="2"/>
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6366F1"/>
            <stop offset="100%" stopColor="#4F46E5"/>
          </linearGradient>
        </defs>
        <text x="50" y="40" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="white" textAnchor="middle">
          IE
        </text>
        <rect x="20" y="55" width="60" height="4" rx="2" fill="#FDE047"/>
        <path d="M 30 70 L 50 65 L 70 70" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" fill="none"/>
      </svg>
    </div>
  );
}
