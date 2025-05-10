import { motion } from 'framer-motion';
import getIcon from '../utils/iconUtils';

const About = () => {
  const CheckIcon = getIcon('Check');
  const UserIcon = getIcon('User');
  
  const teamMembers = [
    {
      name: 'Alex Morgan',
      position: 'Founder & CEO',
      bio: 'Alex has over 15 years of experience in cloud storage solutions and cybersecurity.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Sam Taylor',
      position: 'CTO',
      bio: 'Sam leads our engineering team and has built scalable systems for Fortune 500 companies.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Jordan Lee',
      position: 'Head of Product',
      bio: 'Jordan ensures our products meet the highest standards of quality and user experience.',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Casey Rivera',
      position: 'Security Specialist',
      bio: 'Casey oversees our security protocols ensuring your data is always protected.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80'
    }
  ];
  
  const features = [
    'Enterprise-grade security with end-to-end encryption',
    'Reliable cloud storage with 99.9% uptime guarantee',
    'Fast file transfers with optimized global CDN',
    'Intuitive user interface for seamless file management',
    'Cross-platform availability with mobile and desktop apps',
    'Granular permission controls for team collaboration'
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">About DropVault</h1>
        <p className="max-w-2xl mx-auto text-surface-600 dark:text-surface-400">
          We're on a mission to make file storage and sharing secure, reliable, and effortless for individuals and teams worldwide.
        </p>
      </div>
      
      {/* Our Story */}
      <div className="bg-white dark:bg-surface-800 rounded-xl shadow-card p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-surface-600 dark:text-surface-400 mb-4">
              Founded in 2018, DropVault began with a simple idea: create a file storage solution that prioritizes security without sacrificing usability. Our team of cybersecurity experts and UX designers came together to build a platform that would give users complete confidence in storing and sharing their most important files.
            </p>
            <p className="text-surface-600 dark:text-surface-400">
              Today, DropVault serves thousands of customers around the globe, from individual professionals to enterprise teams. We remain committed to our founding principles of security, reliability, and ease of use in everything we build.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="The DropVault team collaborating" 
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="bg-white dark:bg-surface-800 rounded-xl shadow-card p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6">What Makes Us Different</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center text-primary mt-0.5">
                <CheckIcon className="w-4 h-4" />
              </span>
              <span className="ml-3 text-surface-600 dark:text-surface-400">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Team */}
      <div className="bg-white dark:bg-surface-800 rounded-xl shadow-card p-8">
        <h2 className="text-2xl font-semibold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden bg-surface-200 dark:bg-surface-700">
                {member.avatar ? (
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/10 dark:bg-primary/20 text-primary">
                    <UserIcon className="w-10 h-10" />
                  </div>
                )}
              </div>
              <h3 className="text-lg font-medium text-surface-800 dark:text-surface-200">{member.name}</h3>
              <p className="text-sm text-primary dark:text-primary-light mb-2">{member.position}</p>
              <p className="text-sm text-surface-600 dark:text-surface-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;