import { motion } from 'framer-motion';

const Terms = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing or using DropVault services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use our services.'
    },
    {
      title: '2. Service Description',
      content: 'DropVault provides cloud storage and file sharing services that allow users to upload, store, manage, and share digital content. The specific features and limitations of the service depend on the subscription plan you choose.'
    },
    {
      title: '3. User Accounts',
      subsections: [
        {
          title: '3.1 Registration',
          content: 'To use DropVault services, you must create an account with a valid email address and secure password. You are responsible for maintaining the confidentiality of your account credentials.'
        },
        {
          title: '3.2 Account Security',
          content: 'You are solely responsible for all activities that occur under your account. You must notify DropVault immediately of any unauthorized use of your account or any other breach of security.'
        }
      ]
    },
    {
      title: '4. User Obligations',
      subsections: [
        {
          title: '4.1 Acceptable Use',
          content: 'You agree to use DropVault services only for lawful purposes and in accordance with these Terms. You shall not use the service to store, share, or transmit any content that is illegal, harmful, threatening, abusive, or otherwise objectionable.'
        },
        {
          title: '4.2 Content Responsibility',
          content: 'You retain ownership of all content you upload to DropVault. However, you are solely responsible for the content you upload, share, or store using our services.'
        }
      ]
    },
    {
      title: '5. Subscription and Payments',
      subsections: [
        {
          title: '5.1 Subscription Plans',
          content: 'DropVault offers various subscription plans with different features and storage capacities. You can upgrade, downgrade, or cancel your subscription at any time subject to the terms of your current plan.'
        },
        {
          title: '5.2 Payment Terms',
          content: 'All fees are payable in advance according to your chosen billing cycle. If we are unable to process payment through your designated method, we reserve the right to suspend or terminate your access to the service.'
        }
      ]
    },
    {
      title: '6. Intellectual Property',
      content: 'DropVault and its associated logos, trademarks, and service marks are the intellectual property of DropVault Inc. Nothing in these Terms grants you a right or license to use any of DropVault\'s intellectual property.'
    },
    {
      title: '7. Privacy',
      content: 'Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms by reference, explains how we collect, use, and protect your personal information.'
    },
    {
      title: '8. Term and Termination',
      content: 'These Terms will remain in effect until terminated by either you or DropVault. We reserve the right to suspend or terminate your access to the service at any time for violation of these Terms or for any other reason we deem appropriate.'
    },
    {
      title: '9. Limitation of Liability',
      content: 'To the maximum extent permitted by law, DropVault shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.'
    },
    {
      title: '10. Changes to Terms',
      content: 'We may modify these Terms at any time. If we make material changes to these Terms, we will provide notice through our website or by other means. Your continued use of the service after such notice constitutes your acceptance of the modified Terms.'
    },
    {
      title: '11. Governing Law',
      content: 'These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.'
    },
    {
      title: '12. Contact Information',
      content: 'If you have any questions about these Terms, please contact us at legal@dropvault.com.'
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
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="text-surface-600 dark:text-surface-400">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>
      
      <div className="bg-white dark:bg-surface-800 rounded-xl shadow-card p-8">
        <div className="prose prose-sm max-w-none dark:prose-invert prose-headings:font-semibold prose-p:text-surface-600 dark:prose-p:text-surface-400">
          <p className="text-surface-600 dark:text-surface-400 mb-8">
            Welcome to DropVault. These Terms of Service ("Terms") govern your access to and use of DropVault's website, products, and services. Please read these Terms carefully before using our services.
          </p>
          
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">{section.title}</h2>
              
              {section.content && (
                <p className="text-surface-600 dark:text-surface-400 mb-4">{section.content}</p>
              )}
              
              {section.subsections && section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-4 ml-4">
                  <h3 className="text-base font-medium mb-2 text-surface-800 dark:text-surface-200">{subsection.title}</h3>
                  <p className="text-surface-600 dark:text-surface-400">{subsection.content}</p>
                </div>
              ))}
            </div>
          ))}
          
          <div className="mt-12 pt-6 border-t border-surface-200 dark:border-surface-700">
            <p className="text-surface-600 dark:text-surface-400 text-sm">
              By using DropVault services, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Terms;