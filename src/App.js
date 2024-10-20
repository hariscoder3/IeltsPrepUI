// import React, { useState } from 'react';
// import './index.css';
// import Sidebar from './components/Sidebar';
// import MainContent from './components/MainContent';

// const App = () => {
//   const [activeScreen, setActiveScreen] = useState('home');
//   const [isProcessed, setIsProcessed] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [vocabulary, setVocabulary] = useState([]);
//   const [answers, setAnswers] = useState([]);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const handleFileUpload = (type, file) => {
//     console.log(`Uploading ${type} file:`, file);
//   };

//   const handleSubmit = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsProcessed(true);
//       setIsLoading(false);
//       setVocabulary([
//         { word: 'Example', meaning: 'A representative form', formal: 'This case serves as an exemplar.', semiformal: 'Let me give you an example.' },
//         { word: 'Analyze', meaning: 'Examine methodically', formal: 'Please analyze the data and provide your findings.', semiformal: 'Can you take a look at this and tell me what you think?' },
//       ]);
//       setAnswers([
//         { question: 'What is the main idea of the passage?', answer: 'The main idea is the importance of sustainable urban planning.' },
//         { question: 'How does the author support their argument?', answer: 'The author supports their argument with statistical data and case studies from various cities.' },
//       ]);
//     }, 2000);
//   };

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   return (
//     <div className="flex h-screen bg-gray-50">
//       <Sidebar 
//         isSidebarOpen={isSidebarOpen} 
//         toggleSidebar={toggleSidebar} 
//         setActiveScreen={setActiveScreen}
//         isProcessed={isProcessed}
//       />
//       <MainContent 
//         activeScreen={activeScreen}
//         handleFileUpload={handleFileUpload}
//         handleSubmit={handleSubmit}
//         isLoading={isLoading}
//         vocabulary={vocabulary}
//         answers={answers}
//       />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
  const [activeScreen, setActiveScreen] = useState('home');
  const [isProcessed, setIsProcessed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [vocabulary, setVocabulary] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleFileUpload = (type, file) => {
    console.log(`Uploading ${type} file:`, file);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsProcessed(true);
      setIsLoading(false);
      setVocabulary([
        { word: 'Example', meaning: 'A representative form', formal: 'This case serves as an exemplar.', semiformal: 'Let me give you an example.' },
        { word: 'Analyze', meaning: 'Examine methodically', formal: 'Please analyze the data and provide your findings.', semiformal: 'Can you take a look at this and tell me what you think?' },
      ]);
      setAnswers([
        { question: 'What is the main idea of the passage?', answer: 'The main idea is the importance of sustainable urban planning.' },
        { question: 'How does the author support their argument?', answer: 'The author supports their argument with statistical data and case studies from various cities.' },
      ]);
    }, 2000);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen">
      {/* Sidebar with fixed position */}
      <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        setActiveScreen={setActiveScreen}
        isProcessed={isProcessed}
      />

      {/* Main section */}
      <div className="flex flex-col flex-grow ml-16">
        {/* Header Section */}
        <header className="text-blue-600 text-center py-4 text-2xl font-bold" 
                style={{ marginTop: '30px', marginLeft: '80px' }}>
          IELTS Preparation
        </header>

        {/* Main Content Section */}
        <div className="flex flex-grow justify-center items-center">
          <MainContent 
            activeScreen={activeScreen}
            handleFileUpload={handleFileUpload}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            vocabulary={vocabulary}
            answers={answers}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
