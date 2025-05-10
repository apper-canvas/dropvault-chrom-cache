import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import getIcon from '../utils/iconUtils';

const MainFeature = ({ activeTab }) => {
  // States for file upload
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  
  // States for file viewing and sharing
  const [sharedFiles, setSharedFiles] = useState([
    { id: 's1', name: 'Project Proposal.pdf', size: 2500000, sharedWith: 'team@example.com', date: '2023-04-15' },
    { id: 's2', name: 'Marketing Materials.zip', size: 15000000, sharedWith: 'marketing@example.com', date: '2023-04-10' }
  ]);
  
  // Mock file data for "My Files" tab
  const [myFiles, setMyFiles] = useState([
    { id: '1', name: 'Annual Report.pdf', size: 4500000, date: '2023-04-20', starred: true },
    { id: '2', name: 'Team Photo.jpg', size: 3200000, date: '2023-04-18', starred: false },
    { id: '3', name: 'Presentation.pptx', size: 8100000, date: '2023-04-15', starred: true },
    { id: '4', name: 'Budget.xlsx', size: 1800000, date: '2023-04-10', starred: false },
  ]);
  
  // References
  const fileInputRef = useRef(null);
  
  // Icons declaration
  const UploadCloudIcon = getIcon('UploadCloud');
  const FileIcon = getIcon('FileText');
  const ImageIcon = getIcon('Image');
  const SpreadsheetIcon = getIcon('Table');
  const PresentationIcon = getIcon('Presentation');
  const ArchiveIcon = getIcon('Archive');
  const StarIcon = getIcon('Star');
  const TrashIcon = getIcon('Trash');
  const LinkIcon = getIcon('Link');
  const CheckCircleIcon = getIcon('CheckCircle');
  const CopyIcon = getIcon('Copy');
  const DownloadIcon = getIcon('Download');
  const RefreshCwIcon = getIcon('RefreshCw');
  const SendIcon = getIcon('Send');
  const UserIcon = getIcon('User');
  const MailIcon = getIcon('Mail');
  
  // Functions for file upload
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };
  
  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };
  
  const handleFiles = (fileList) => {
    const newFiles = Array.from(fileList).map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      progress: 0,
      status: 'ready'
    }));
    
    setFiles(prev => [...prev, ...newFiles]);
    toast.success(`${newFiles.length} file${newFiles.length > 1 ? 's' : ''} added to upload queue`);
  };
  
  const removeFile = (id) => {
    setFiles(prev => prev.filter(file => file.id !== id));
    toast.info("File removed from upload queue");
  };
  
  const uploadFiles = () => {
    if (files.length === 0) {
      toast.error("Please add files to upload");
      return;
    }
    
    setUploading(true);
    
    // Simulate upload progress
    files.forEach(file => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 1;
        
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          
          // Check if all files have completed
          const allDone = Object.values(uploadProgress).every(p => p === 100);
          
          if (allDone) {
            setTimeout(() => {
              setUploading(false);
              
              // Add uploaded files to "My Files"
              const newMyFiles = files.map(f => ({
                id: f.id,
                name: f.name,
                size: f.size,
                date: new Date().toISOString().split('T')[0],
                starred: false
              }));
              
              setMyFiles(prev => [...newMyFiles, ...prev]);
              setFiles([]);
              setUploadProgress({});
              
              toast.success("All files uploaded successfully!");
            }, 500);
          }
        }
        
        setUploadProgress(prev => ({
          ...prev,
          [file.id]: progress
        }));
      }, 200);
    });
  };
  
  const cancelUpload = () => {
    setUploading(false);
    setUploadProgress({});
    toast.info("Upload canceled");
  };
  
  // File type icon function
  const getFileTypeIcon = (fileName) => {
    if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(fileName)) return ImageIcon;
    if (/\.(xls|xlsx|csv|numbers)$/i.test(fileName)) return SpreadsheetIcon;
    if (/\.(ppt|pptx|key)$/i.test(fileName)) return PresentationIcon;
    if (/\.(zip|rar|tar|gz|7z)$/i.test(fileName)) return ArchiveIcon;
    return FileIcon;
  };
  
  // Format bytes function
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };
  
  // Toggle star function
  const toggleStar = (id) => {
    setMyFiles(files => 
      files.map(file => 
        file.id === id ? { ...file, starred: !file.starred } : file
      )
    );
    toast.success("File updated");
  };
  
  // Delete file function
  const deleteFile = (id) => {
    setMyFiles(files => files.filter(file => file.id !== id));
    toast.success("File deleted");
  };
  
  // Copy share link function
  const copyShareLink = () => {
    // In a real app, this would copy an actual sharing link
    navigator.clipboard.writeText("https://dropvault.example/share/abc123");
    toast.success("Share link copied to clipboard");
  };
  
  // Handle share
  const [shareEmail, setShareEmail] = useState('');
  
  const handleShare = (fileId) => {
    if (!shareEmail || !shareEmail.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // In a real app, this would send a share invitation
    toast.success(`Share invitation sent to ${shareEmail}`);
    setShareEmail('');
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
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
  
  // Tab content rendering functions
  const renderUploadTab = () => (
    <motion.div
      key="uploadTab"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-6"
    >
      <motion.div 
        variants={itemVariants}
        className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center transition-colors ${
          isDragging 
            ? 'border-primary bg-primary/5' 
            : 'border-surface-300 dark:border-surface-600 hover:border-primary dark:hover:border-primary hover:bg-surface-50 dark:hover:bg-surface-700/50'
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
          <UploadCloudIcon className="w-8 h-8" />
        </div>
        
        <h3 className="text-xl font-semibold mb-2">Drag & Drop Files Here</h3>
        <p className="text-surface-600 dark:text-surface-400 mb-6 max-w-md">
          Drop your files here, or click to browse your computer
        </p>
        
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileInputChange} 
          className="hidden" 
          multiple 
        />
        
        <button
          onClick={() => fileInputRef.current.click()}
          className="px-5 py-2.5 font-medium bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
          disabled={uploading}
        >
          Select Files
        </button>
      </motion.div>
      
      {files.length > 0 && (
        <motion.div 
          variants={itemVariants}
          className="space-y-4"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Files to Upload ({files.length})</h3>
            <div className="flex space-x-3">
              {uploading ? (
                <button
                  onClick={cancelUpload}
                  className="px-4 py-2 text-sm font-medium bg-accent hover:bg-accent/90 text-white rounded-lg transition-colors flex items-center"
                >
                  <RefreshCwIcon className="w-4 h-4 mr-1.5 animate-spin" />
                  Cancel
                </button>
              ) : (
                <button
                  onClick={uploadFiles}
                  className="px-4 py-2 text-sm font-medium bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors flex items-center"
                >
                  <UploadCloudIcon className="w-4 h-4 mr-1.5" />
                  Upload All
                </button>
              )}
            </div>
          </div>
          
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
            {files.map((file) => {
              const FileTypeIcon = getFileTypeIcon(file.name);
              const progress = uploadProgress[file.id] || 0;
              
              return (
                <motion.div 
                  key={file.id}
                  variants={itemVariants}
                  className="bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-100 dark:bg-surface-700 flex items-center justify-center text-surface-500 dark:text-surface-300 flex-shrink-0">
                    <FileTypeIcon className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="truncate pr-4 font-medium">
                        {file.name}
                      </div>
                      {!uploading && (
                        <button 
                          onClick={() => removeFile(file.id)}
                          className="text-surface-500 hover:text-accent p-1 rounded"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-surface-500 dark:text-surface-400">
                        {formatBytes(file.size)}
                      </span>
                      {uploading && (
                        <span className="text-xs font-medium text-primary">
                          {progress}%
                        </span>
                      )}
                    </div>
                    
                    {uploading && (
                      <div className="w-full bg-surface-200 dark:bg-surface-700 rounded-full h-1.5 mt-2">
                        <div 
                          className="bg-primary h-1.5 rounded-full transition-all duration-300" 
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
  
  const renderFilesTab = () => (
    <motion.div
      key="filesTab"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">My Files ({myFiles.length})</h3>
        <input
          type="text"
          placeholder="Search files..."
          className="px-3 py-1.5 text-sm border border-surface-300 dark:border-surface-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-surface-800"
        />
      </motion.div>
      
      <motion.div variants={itemVariants} className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-surface-100 dark:bg-surface-700">
              <th className="py-3 px-4 text-left text-sm font-medium text-surface-600 dark:text-surface-300 rounded-tl-lg">Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-surface-600 dark:text-surface-300 hidden sm:table-cell">Size</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-surface-600 dark:text-surface-300 hidden md:table-cell">Date</th>
              <th className="py-3 px-4 text-right text-sm font-medium text-surface-600 dark:text-surface-300 rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-200 dark:divide-surface-700">
            {myFiles.map((file) => {
              const FileTypeIcon = getFileTypeIcon(file.name);
              
              return (
                <motion.tr 
                  key={file.id} 
                  variants={itemVariants}
                  className="bg-white dark:bg-surface-800 hover:bg-surface-50 dark:hover:bg-surface-700/70"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded bg-surface-100 dark:bg-surface-700 flex items-center justify-center text-surface-500 dark:text-surface-300">
                        <FileTypeIcon className="w-4 h-4" />
                      </div>
                      <span className="font-medium truncate max-w-[150px] sm:max-w-[250px]">
                        {file.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-surface-600 dark:text-surface-400 text-sm hidden sm:table-cell">
                    {formatBytes(file.size)}
                  </td>
                  <td className="py-3 px-4 text-surface-600 dark:text-surface-400 text-sm hidden md:table-cell">
                    {file.date}
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex items-center justify-end space-x-2">
                      <button 
                        onClick={() => toggleStar(file.id)}
                        className={`p-1.5 rounded hover:bg-surface-100 dark:hover:bg-surface-700 ${
                          file.starred 
                            ? 'text-yellow-400' 
                            : 'text-surface-400 dark:text-surface-500'
                        }`}
                        title={file.starred ? "Unstar" : "Star"}
                      >
                        <StarIcon className="w-4 h-4" />
                      </button>
                      
                      <button 
                        className="p-1.5 rounded text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-700 hover:text-primary"
                        title="Download"
                      >
                        <DownloadIcon className="w-4 h-4" />
                      </button>
                      
                      <button 
                        className="p-1.5 rounded text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-700 hover:text-primary"
                        title="Share"
                      >
                        <LinkIcon className="w-4 h-4" />
                      </button>
                      
                      <button 
                        onClick={() => deleteFile(file.id)}
                        className="p-1.5 rounded text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-700 hover:text-accent"
                        title="Delete"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
        
        {myFiles.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-surface-800 rounded-lg border border-surface-200 dark:border-surface-700">
            <p className="text-surface-500 dark:text-surface-400">
              No files found. Upload some files to get started.
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
  
  const renderShareTab = () => (
    <motion.div
      key="shareTab"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="space-y-3">
        <h3 className="font-semibold text-lg">Share a File</h3>
        
        <div className="p-5 bg-surface-50 dark:bg-surface-800 rounded-lg border border-surface-200 dark:border-surface-700">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Share Link
              </label>
              <div className="flex">
                <input
                  type="text"
                  value="https://dropvault.example/share/abc123"
                  readOnly
                  className="w-full px-3 py-2 bg-white dark:bg-surface-700 border border-surface-300 dark:border-surface-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={copyShareLink}
                  className="px-3 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-dark transition-colors flex items-center"
                >
                  <CopyIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Share with Email
              </label>
              <div className="flex">
                <div className="relative flex-grow">
                  <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-surface-400 w-4 h-4" />
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={shareEmail}
                    onChange={(e) => setShareEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-white dark:bg-surface-700 border border-surface-300 dark:border-surface-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  onClick={() => handleShare('123')}
                  className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-dark transition-colors flex items-center"
                >
                  <SendIcon className="w-4 h-4 mr-1.5" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="space-y-3">
        <h3 className="font-semibold text-lg">Shared Files</h3>
        
        <div className="space-y-3">
          {sharedFiles.map((file) => {
            const FileTypeIcon = getFileTypeIcon(file.name);
            
            return (
              <div 
                key={file.id}
                className="p-4 bg-white dark:bg-surface-800 rounded-lg border border-surface-200 dark:border-surface-700 flex flex-col sm:flex-row sm:items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-100 dark:bg-surface-700 flex items-center justify-center text-surface-500 dark:text-surface-300 flex-shrink-0">
                  <FileTypeIcon className="w-5 h-5" />
                </div>
                
                <div className="flex-grow min-w-0">
                  <div className="font-medium truncate">{file.name}</div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1">
                    <div className="flex items-center text-xs text-surface-500 dark:text-surface-400">
                      <UserIcon className="w-3 h-3 mr-1" /> 
                      Shared with: {file.sharedWith}
                    </div>
                    
                    <div className="text-xs text-surface-500 dark:text-surface-400">
                      {formatBytes(file.size)}
                    </div>
                    
                    <div className="text-xs text-surface-500 dark:text-surface-400">
                      Shared on: {file.date}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 ml-auto">
                  <button 
                    className="p-1.5 rounded text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-700 hover:text-primary"
                    title="Copy Share Link"
                  >
                    <LinkIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
          
          {sharedFiles.length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-surface-800 rounded-lg border border-surface-200 dark:border-surface-700">
              <p className="text-surface-500 dark:text-surface-400">
                You haven't shared any files yet.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
  
  return (
    <AnimatePresence mode="wait">
      {activeTab === 'upload' && renderUploadTab()}
      {activeTab === 'files' && renderFilesTab()}
      {activeTab === 'share' && renderShareTab()}
    </AnimatePresence>
  );
};

export default MainFeature;