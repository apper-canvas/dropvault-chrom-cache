import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import getIcon from '../utils/iconUtils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const MapPinIcon = getIcon('MapPin');
  const MailIcon = getIcon('Mail');
  const PhoneIcon = getIcon('Phone');
  const SendIcon = getIcon('Send');
  const LoaderIcon = getIcon('Loader');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-surface-600 dark:text-surface-400">
          Have questions or need assistance? We're here to help! Fill out the form below, and our team will get back to you as soon as possible.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Contact Information */}
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-surface-800 rounded-xl shadow-card p-6">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 bg-primary/10 dark:bg-primary/20 p-2 rounded-full text-primary">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-surface-800 dark:text-surface-200">Our Location</h3>
                  <p className="mt-1 text-sm text-surface-600 dark:text-surface-400">
                    123 Innovation Way<br />
                    Tech Park, CA 94103
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-primary/10 dark:bg-primary/20 p-2 rounded-full text-primary">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-surface-800 dark:text-surface-200">Email Address</h3>
                  <p className="mt-1 text-sm text-surface-600 dark:text-surface-400">
                    <a href="mailto:support@dropvault.com" className="hover:text-primary">support@dropvault.com</a><br />
                    <a href="mailto:info@dropvault.com" className="hover:text-primary">info@dropvault.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-primary/10 dark:bg-primary/20 p-2 rounded-full text-primary">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-surface-800 dark:text-surface-200">Phone Number</h3>
                  <p className="mt-1 text-sm text-surface-600 dark:text-surface-400">
                    +1 (555) 123-4567<br />
                    Mon-Fri 9am-5pm PST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="bg-white dark:bg-surface-800 rounded-xl shadow-card p-6">
            <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border border-surface-300 dark:border-surface-600 rounded-lg bg-white dark:bg-surface-700 text-surface-800 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Your Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border border-surface-300 dark:border-surface-600 rounded-lg bg-white dark:bg-surface-700 text-surface-800 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-3 py-2 border border-surface-300 dark:border-surface-600 rounded-lg bg-white dark:bg-surface-700 text-surface-800 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-3 py-2 border border-surface-300 dark:border-surface-600 rounded-lg bg-white dark:bg-surface-700 text-surface-800 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
              </div>
              
              <div className="text-right">
                <button type="submit" disabled={isSubmitting} className="btn btn-primary flex items-center space-x-2 ml-auto">
                  {isSubmitting ? (
                    <>
                      <LoaderIcon className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <SendIcon className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;