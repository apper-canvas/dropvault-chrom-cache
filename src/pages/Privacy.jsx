import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Privacy = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cookiesRef = useRef(null);
  
  useEffect(() => {
    // If URL has #cookies hash, scroll to that section
    if (location.hash === '#cookies' && cookiesRef.current) {
      cookiesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  
  const sections = [
    {
      title: '1. Information We Collect',
      content: 'DropVault collects several types of information from and about users of our services, including:',
      list: [
        'Personal information such as name, email address, and payment information when you register for an account.',
        'Usage data including storage usage, file access patterns, and feature utilization.',
        'Technical data such as IP address, browser type, operating system, and device information.',
        'Information about your interactions with our website, applications, and communications.'
      ]
    },
    {
      title: '2. How We Use Your Information',
      content: 'We use the information we collect for various purposes, including:',
      list: [
        'Providing, maintaining, and improving our services.',
        'Processing transactions and sending related information.',
        'Sending administrative notifications, such as updates to our terms or privacy policy.',
        'Responding to your comments, questions, and requests.',
        'Personalizing your experience and delivering content relevant to your interests.',
        'Monitoring and analyzing trends, usage, and activities in connection with our services.'
      ]
    },
    {
      id: 'cookies',
      title: '3. Cookies and Similar Technologies',
      content: 'DropVault uses cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.',
      subsections: [
        {
          title: '3.1 Types of Cookies We Use',
          list: [
            'Essential cookies: Necessary for the basic functionality of our website.',
            'Analytical/performance cookies: Allow us to recognize and count the number of visitors and see how visitors move around our website.',
            'Functionality cookies: Enable us to personalize content for you.',
            'Targeting cookies: Record your visit to our website, the pages you have visited, and the links you have followed.'
          ]
        },
        {
          title: '3.2 Managing Cookies',
          content: 'You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.'
        }
      ]
    },
    {
      title: '4. Data Security',
      content: 'We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.'
    },
    {
      title: '5. Data Retention',
      content: 'We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.'
    },
    {
      title: '6. Your Data Protection Rights',
      content: 'Depending on your location, you may have certain rights regarding your personal information:',
      list: [
        'The right to access information we hold about you.',
        'The right to request correction of any inaccurate personal information.',
        'The right to request the erasure of your personal information.',
        'The right to object to processing of your personal information.',
        'The right to data portability.',
        'The right to withdraw consent at any time where we relied on your consent to process your personal information.'
      ]
    },
    {
      title: '7. Third-Party Services',
      content: 'Our service may contain links to third-party websites, services, or applications that are not owned or controlled by DropVault. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.'
    },
    {
      title: '8. Children\'s Privacy',
      content: 'Our services are not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.'
    },
    {
      title: '9. Changes to This Privacy Policy',
      content: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.'
    },
    {
      title: '10. Contact Us',
      content: 'If you have any questions about this Privacy Policy, please contact us at privacy@dropvault.com.'
    }
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-surface-600 dark:text-surface-400">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>
      
      <div className="bg-white dark:bg-surface-800 rounded-xl shadow-card p-8">
        <div className="prose prose-sm max-w-none dark:prose-invert prose-headings:font-semibold prose-p:text-surface-600 dark:prose-p:text-surface-400">
          <p className="text-surface-600 dark:text-surface-400 mb-8">
            At DropVault, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services. Please read this policy carefully to understand our practices regarding your personal data.
          </p>
          
          {sections.map((section, index) => (
            <div 
              key={index} 
              className="mb-8"
              id={section.id}
              ref={section.id === 'cookies' ? cookiesRef : null}
            >
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">{section.title}</h2>
              
              {section.content && (
                <p className="text-surface-600 dark:text-surface-400 mb-4">{section.content}</p>
              )}
              
              {section.list && (
                <ul className="list-disc pl-5 mb-4">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-surface-600 dark:text-surface-400 mb-2">{item}</li>
                  ))}
                </ul>
              )}
              
              {section.subsections && section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-4 ml-4">
                  <h3 className="text-base font-medium mb-2 text-surface-800 dark:text-surface-200">{subsection.title}</h3>
                  
                  {subsection.content && (
                    <p className="text-surface-600 dark:text-surface-400 mb-2">{subsection.content}</p>
                  )}
                  
                  {subsection.list && (
                    <ul className="list-disc pl-5 mb-2">
                      {subsection.list.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-surface-600 dark:text-surface-400 mb-1">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
          
          <div className="mt-12 pt-6 border-t border-surface-200 dark:border-surface-700">
            <p className="text-surface-600 dark:text-surface-400 text-sm">
              By using DropVault services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Privacy;