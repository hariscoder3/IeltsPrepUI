import React from 'react';
import { Upload } from 'lucide-react';
import Card from './Card';
import Button from './Button';
import FileInput from './FileInput';

const MainContent = ({ activeScreen, handleFileUpload, handleSubmit, isLoading, vocabulary, answers }) => {
  return (
    <main className="flex-1 p-8 overflow-auto">
      {activeScreen === 'home' && (
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-indigo-800">Upload Files</h1>
          <Card className="p-6">
            <div className="space-y-4">
              <FileInput
                label="Paragraph Picture"
                onChange={(file) => handleFileUpload('paragraph', file)}
              />
              <FileInput
                label="Questions Picture"
                onChange={(file) => handleFileUpload('questions', file)}
              />
              <FileInput
                label="Answers Picture"
                onChange={(file) => handleFileUpload('answers', file)}
              />
              <Button 
                onClick={handleSubmit}
                className="w-full h-12 text-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  <>
                    <Upload className="mr-2 h-5 w-5" />
                    Submit
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>
      )}

      {activeScreen === 'vocabulary' && (
        <div>
          <h1 className="text-3xl font-bold mb-6 text-indigo-800">Vocabulary</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vocabulary.map((item, index) => (
              <Card key={index} className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Group Number: {item.groupNumber}</h3>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Word: {item.word}</h3>
                <p className="mb-2"><strong className="text-indigo-500">Meaning:</strong> {item.meaning}</p>
                <p className="mb-2"><strong className="text-indigo-500">Formal Writing:</strong> {item.formal}</p>
                <p><strong className="text-indigo-500">Semi-formal Speaking:</strong> {item.semiformal}</p>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeScreen === 'answers' && (
        <div>
          <h1 className="text-3xl font-bold mb-6 text-indigo-800">Answers</h1>
          <div className="space-y-4">
            {answers.map((item, index) => (
              <Card key={index} className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Question {index + 1}</h3>
                <p className="mb-2"><strong className="text-indigo-500">Q:</strong> {item.question}</p>
                <p><strong className="text-indigo-500">A:</strong> {item.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default MainContent;