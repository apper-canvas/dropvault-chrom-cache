import { motion } from 'framer-motion';
import getIcon from '../utils/iconUtils';

function Security() {
  const ShieldIcon = getIcon('Shield');

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0, y: 20 }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 }
  };

  // Security sections with GDPR information
  const sections = [
    {
      title: "Data Protection & Security Practices",
      content: (
        <>
          <p className="mb-4">
            At DropVault, we implement industry-leading security measures to protect your data. Our platform is 
            built with security as a foundational principle, not an afterthought.
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>End-to-end encryption for all stored files and data transfers</li>
            <li>Regular security audits and penetration testing by third-party experts</li>
            <li>Multi-factor authentication options for all accounts</li>
            <li>Secure data centers with physical access controls</li>
            <li>Continuous monitoring for unusual activities and potential threats</li>
            <li>Regular security updates and patch management</li>
          </ul>
          <p>
            Our security team constantly reviews and enhances our protection measures to adapt to evolving threats 
            and ensure your data remains secure.
          </p>
        </>
      )
    },
    {
      title: "GDPR Compliance",
      content: (
        <>
          <p className="mb-4">
            DropVault is fully compliant with the General Data Protection Regulation (GDPR). As a data processor, 
            we adhere to all requirements and principles outlined in the regulation:
          </p>
          <h4 className="font-semibold text-base mb-2">Data Processing Principles</h4>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li><span className="font-medium">Lawfulness, fairness, and transparency:</span> We process data legally, fairly, and in a transparent manner.</li>
            <li><span className="font-medium">Purpose limitation:</span> We collect data for specified, explicit, and legitimate purposes.</li>
            <li><span className="font-medium">Data minimization:</span> We limit data collection to what is necessary for our services.</li>
            <li><span className="font-medium">Accuracy:</span> We maintain accurate data and update it as needed.</li>
            <li><span className="font-medium">Storage limitation:</span> We retain data only as long as necessary for the service.</li>
            <li><span className="font-medium">Integrity and confidentiality:</span> We ensure appropriate security of personal data.</li>
            <li><span className="font-medium">Accountability:</span> We take responsibility for demonstrating GDPR compliance.</li>
          </ul>
          <p>
            We also maintain detailed records of all data processing activities and conduct regular Data Protection 
            Impact Assessments (DPIAs) when implementing new technologies or processing methods.
          </p>
        </>
      )
    },
    {
      title: "Your Rights Under GDPR",
      content: (
        <>
          <p className="mb-4">
            As a user of DropVault, you have several rights under GDPR that we fully support and facilitate:
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li><span className="font-medium">Right to access:</span> You can request a copy of all personal data we hold about you.</li>
            <li><span className="font-medium">Right to rectification:</span> You can request correction of inaccurate personal data.</li>
            <li><span className="font-medium">Right to erasure:</span> You can request deletion of your personal data under certain conditions.</li>
            <li><span className="font-medium">Right to restrict processing:</span> You can request limits on how we use your data.</li>
            <li><span className="font-medium">Right to data portability:</span> You can request your data in a structured, machine-readable format.</li>
            <li><span className="font-medium">Right to object:</span> You can object to processing of your data for certain purposes.</li>
            <li><span className="font-medium">Rights related to automated decision-making:</span> You can object to automated decision-making, including profiling.</li>
          </ul>
          <p className="mb-4">
            To exercise any of these rights, please contact our Data Protection Officer at <a href="mailto:dpo@dropvault.com" className="text-primary hover:underline">dpo@dropvault.com</a>.
            We will respond to all requests within 30 days as required by GDPR.
          </p>
        </>
      )
    },
    {
      title: "Data Breach Notification",
      content: (
        <>
          <p className="mb-4">
            In the unlikely event of a data breach affecting your personal data, we have a comprehensive incident response 
            plan that includes:
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>Notifying affected users within 72 hours of becoming aware of a breach</li>
            <li>Providing details about the nature of the breach and potential risks</li>
            <li>Reporting to relevant supervisory authorities as required by GDPR</li>
            <li>Implementing immediate measures to mitigate potential harm</li>
            <li>Conducting thorough investigations to prevent future incidents</li>
          </ul>
          <p>
            Our proactive security measures are designed to prevent breaches, but we remain prepared to respond 
            quickly and effectively if an incident occurs.
          </p>
        </>
      )
    },
    {
      title: "Security Certifications & Compliance",
      content: (
        <>
          <p className="mb-4">
            DropVault maintains several industry certifications to validate our security practices:
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>ISO 27001 (Information Security Management)</li>
            <li>SOC 2 Type II compliance</li>
            <li>Cloud Security Alliance (CSA) STAR certification</li>
            <li>GDPR compliance verified by independent auditors</li>
          </ul>
          <p className="mb-4">
            In addition to GDPR, we comply with various international data protection regulations including:
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>California Consumer Privacy Act (CCPA)</li>
            <li>Brazilian General Data Protection Law (LGPD)</li>
            <li>Canadian Personal Information Protection and Electronic Documents Act (PIPEDA)</li>
            <li>Australian Privacy Principles (APPs)</li>
          </ul>
          <p>
            We continuously monitor changes in global privacy regulations and update our practices accordingly.
          </p>
        </>
      )
    }
  ];

  return (
    <motion.div 
      className="max-w-4xl mx-auto" 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <motion.div 
        className="flex items-center mb-6 space-x-3"
        variants={itemVariants}
      >
        <div className="p-3 rounded-full bg-primary/10 text-primary dark:text-primary-light">
          <ShieldIcon className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold">Security & Data Protection</h1>
      </motion.div>
      
      <motion.div
        className="card mb-8"
        variants={itemVariants}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p className="lead text-lg text-surface-600 dark:text-surface-300">
            At DropVault, we prioritize the security and privacy of your data. This page outlines our comprehensive security measures 
            and how we comply with the General Data Protection Regulation (GDPR) and other global privacy standards.
          </p>
        </div>
      </motion.div>

      {sections.map((section, index) => (
        <motion.div 
          key={index}
          className="card mb-6"
          variants={itemVariants}
        >
          <h2 className="text-xl font-semibold mb-4 text-primary dark:text-primary-light flex items-center">
            {section.title}
          </h2>
          <div className="prose prose-sm dark:prose-invert max-w-none text-surface-700 dark:text-surface-300">
            {section.content}
          </div>
        </motion.div>
      ))}

      <motion.div 
        className="card mb-8 bg-surface-50 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700"
        variants={itemVariants}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p className="italic text-surface-600 dark:text-surface-400">
            For any security-related questions or to report a security concern, please contact our security team at{' '}
            <a href="mailto:security@dropvault.com" className="text-primary hover:underline">security@dropvault.com</a>.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Security;