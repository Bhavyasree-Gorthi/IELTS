import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'Courses', href: '#courses' },
      { name: 'About Us', href: '#about' },
      { name: 'Contact', href: '#contact' },
    ],
    courses: [
      { name: 'IELTS Academic', href: '#' },
      { name: 'IELTS General', href: '#' },
      { name: 'Speaking Module', href: '#' },
      { name: 'Writing Module', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/search?q=%23codeBabyCode&src=hashtag_click&f=user', label: 'Twitter' },
    { icon: Linkedin, href: 'https://in.linkedin.com/company/babycode', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/babycode.news/?hl=en', label: 'Instagram' },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* Removed BabyCode logo */}
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="bg-gray-800 p-2 rounded-lg hover:bg-indigo-600 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Courses</h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact BabyCode</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>Phone Support (WhatsApp): <a href="https://wa.me/919030870876" className="underline hover:text-yellow-400">+91 9030870876</a></li>
              <li>Email Support: <a href="mailto:babycodeielts@gmail.com" className="underline hover:text-yellow-400">babycodeielts@gmail.com</a></li>
              <li>Business Hours:<br />
                Monday - Friday: 9:00 AM - 6:00 PM (IST)<br />
                Saturday: 10:00 AM - 4:00 PM (IST)
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {currentYear} BabyCode. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
