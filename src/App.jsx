import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';
import getIcon from './utils/iconUtils';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Security from './pages/Security';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    // Check user's preferred color scheme
    const isDarkPreferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Check local storage for saved preference
    const savedMode = localStorage.getItem('darkMode');
    
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    } else {
      setDarkMode(isDarkPreferred);
    }
  }, []);
  
  useEffect(() => {
    // Apply dark mode to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to local storage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const MoonIcon = getIcon('Moon');
  const SunIcon = getIcon('Sun');
  const GithubIcon = getIcon('Github');
  const location = useLocation();

  return (
    <div className="min-h-screen">
      {/* Top navbar */}
      <header className="bg-white dark:bg-surface-800 shadow-sm sticky top-0 z-10">
        <div className="custom-container py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">DV</span>
            </div>
            <h1 className="text-xl font-bold text-primary dark:text-primary-light">DropVault</h1>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium ${location.pathname === '/' ? 'text-primary dark:text-primary-light' : 'text-surface-600 dark:text-surface-300 hover:text-primary dark:hover:text-primary-light'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium ${location.pathname === '/about' ? 'text-primary dark:text-primary-light' : 'text-surface-600 dark:text-surface-300 hover:text-primary dark:hover:text-primary-light'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium ${location.pathname === '/contact' ? 'text-primary dark:text-primary-light' : 'text-surface-600 dark:text-surface-300 hover:text-primary dark:hover:text-primary-light'}`}
            >
              Contact
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
              aria-label="View on GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>
      
      <main className="py-8">
        <AnimatePresence mode="wait">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="*" 
              element={
                <div className="custom-container">
                  <NotFound />
                </div>
              } 
            />
            <Route path="/contact" element={<div className="custom-container"><Contact /></div>} />
            <Route path="/about" element={<div className="custom-container"><About /></div>} />
            <Route path="/terms" element={<div className="custom-container"><Terms /></div>} />
            <Route path="/privacy" element={<div className="custom-container"><Privacy /></div>} />
            <Route path="/security" element={<div className="custom-container"><Security /></div>} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <footer className="bg-white dark:bg-surface-800 border-t border-surface-200 dark:border-surface-700 py-10 mt-12">
        <div className="custom-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DV</span>
                </div>
                <h3 className="text-lg font-bold text-primary dark:text-primary-light">DropVault</h3>
              </div>
              <p className="text-surface-500 dark:text-surface-400 text-sm mb-4">
                Secure, fast, and reliable file storage and sharing platform for individuals and teams.
              </p>
              <div className="flex space-x-3">
                {[
                  { icon: 'Twitter', url: 'https://twitter.com' },
                  { icon: 'Facebook', url: 'https://facebook.com' },
                  { icon: 'Linkedin', url: 'https://linkedin.com' },
                  { icon: 'Instagram', url: 'https://instagram.com' }
                ].map((social, index) => {
                  const Icon = getIcon(social.icon);
                  return (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 rounded-full bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300 hover:bg-primary hover:text-white transition-colors"
                      aria-label={`Visit our ${social.icon} page`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
            
            {/* Quick links */}
            <div>
              <h3 className="text-surface-800 dark:text-surface-100 font-medium text-base mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                      className="text-surface-500 dark:text-surface-400 hover:text-primary dark:hover:text-primary-light text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h3 className="text-surface-800 dark:text-surface-100 font-medium text-base mb-4">Legal</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Terms of Service', path: '/terms' },
                  { name: 'Privacy Policy', path: '/privacy' },
                  { name: 'Cookie Policy', path: '/privacy#cookies' },
                  { name: 'Security', path: '/security' }
                ].map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.path} 
                      className="text-surface-500 dark:text-surface-400 hover:text-primary dark:hover:text-primary-light text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-surface-800 dark:text-surface-100 font-medium text-base mb-4">Contact Us</h3>
              <p className="text-surface-500 dark:text-surface-400 text-sm mb-2">Email: support@dropvault.com</p>
              <p className="text-surface-500 dark:text-surface-400 text-sm">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-surface-200 dark:border-surface-700 mt-8 pt-6 text-center text-surface-500 dark:text-surface-400 text-sm">
            <p>© {new Date().getFullYear()} DropVault. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
        toastClassName="text-sm font-medium"
      />
    </div>
  );
}

export default App;