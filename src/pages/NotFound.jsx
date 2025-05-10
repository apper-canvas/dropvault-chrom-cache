import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import getIcon from '../utils/iconUtils';

const NotFound = () => {
  const HomeIcon = getIcon('Home');
  const AlertTriangleIcon = getIcon('AlertTriangle');
  
  return (
    <motion.div 
      className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-24 h-24 mb-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
        <AlertTriangleIcon className="w-12 h-12" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
      
      <p className="text-surface-600 dark:text-surface-400 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
      </p>
      
      <Link 
        to="/" 
        className="inline-flex items-center px-5 py-2.5 font-medium bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
      >
        <HomeIcon className="w-5 h-5 mr-2" />
        Return Home
      </Link>
    </motion.div>
  );
};

export default NotFound;