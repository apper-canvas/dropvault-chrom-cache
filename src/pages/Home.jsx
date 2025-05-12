import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import MainFeature from '../components/MainFeature';
import getIcon from '../utils/iconUtils';

const Home = () => {
  const [activeTab, setActiveTab] = useState('upload');
  
  // Icon declarations
  const UploadCloudIcon = getIcon('UploadCloud');
  const FolderIcon = getIcon('Folder');
  const ShareIcon = getIcon('Share2');
  const LockIcon = getIcon('Lock');
  const ZapIcon = getIcon('Zap');
  const ShieldIcon = getIcon('Shield');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };
  
  const features = [
    {
      title: "Fast Uploads",
      description: "Quick file uploads with progress tracking",
      icon: ZapIcon
    },
    {
      title: "Secure Storage",
      description: "Your files are stored with end-to-end encryption",
      icon: ShieldIcon
    },
    {
      title: "Easy Sharing",
      description: "Share files via secure links with custom permissions",
      icon: ShareIcon
    },
    {
      title: "Private Access",
      description: "Control who can view and download your files",
      icon: LockIcon
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.div 
        className="relative -mx-4 -mt-8 mb-12 overflow-hidden bg-surface-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Digital file storage" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-secondary-dark/80 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Secure Cloud Storage for Your Digital World</h1>
            <p className="text-white/90 text-xl mb-8 max-w-2xl">Store, access, and share your files from anywhere with our secure cloud solution.</p>
            <button className="btn btn-secondary text-base px-8 py-3 shadow-lg hover:shadow-xl transform transition hover:-translate-y-1">
              Get Started Free
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div className="space-y-12" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.section variants={itemVariants} className="text-center max-w-4xl mx-auto space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Upload, Store & Share Your Files
        </h1>
        <p className="text-lg md:text-xl text-surface-600 dark:text-surface-300 max-w-2xl mx-auto">
          DropVault gives you a seamless way to upload and share your files in seconds.
        </p>
      </motion.section>

      <motion.div variants={itemVariants} className="bg-white dark:bg-surface-800 rounded-2xl shadow-soft dark:shadow-none border border-surface-200 dark:border-surface-700 overflow-hidden">
        <div className="flex border-b border-surface-200 dark:border-surface-700">
          <button
            className={`flex items-center px-4 py-3 font-medium text-sm md:text-base transition-colors ${
              activeTab === 'upload'
                ? 'text-primary dark:text-primary-light border-b-2 border-primary dark:border-primary-light'
                : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-700'
            }`}
            onClick={() => handleTabChange('upload')}
          >
            <UploadCloudIcon className="w-4 h-4 mr-2" />
            Upload Files
          </button>
          <button
            className={`flex items-center px-4 py-3 font-medium text-sm md:text-base transition-colors ${
              activeTab === 'files'
                ? 'text-primary dark:text-primary-light border-b-2 border-primary dark:border-primary-light'
                : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-700'
            }`}
            onClick={() => handleTabChange('files')}
          >
            <FolderIcon className="w-4 h-4 mr-2" />
            My Files
          </button>
          <button
            className={`flex items-center px-4 py-3 font-medium text-sm md:text-base transition-colors ${
              activeTab === 'share'
                ? 'text-primary dark:text-primary-light border-b-2 border-primary dark:border-primary-light'
                : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-700'
            }`}
            onClick={() => handleTabChange('share')}
          >
            <ShareIcon className="w-4 h-4 mr-2" />
            Shared
          </button>
        </div>
        
        <div className="p-4 md:p-6">
          <MainFeature activeTab={activeTab} />
        </div>
      </motion.div>

      <motion.section 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {features.map((feature, index) => (
          <div 
            key={index}
            className="p-6 rounded-xl bg-gradient-to-br from-surface-50 to-white dark:from-surface-800 dark:to-surface-700 shadow-card border border-surface-200 dark:border-surface-600 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-surface-600 dark:text-surface-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </motion.section>
      </motion.div>
    </>
  );
};

export default Home;