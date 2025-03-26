import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

async function getMarkdownContent() {
  const markdownFilePath = path.join(process.cwd(), 'public', 'content', 'art_cv.md');
  return fs.readFileSync(markdownFilePath, 'utf8');
}

export default async function CvPage() {
  const markdownContent = await getMarkdownContent();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Curriculum Vitae (Artist) </h1>
      <ReactMarkdown 
        remarkPlugins={[remarkBreaks]}
        components={{
          h1: ({ ...props }) => (
            <h1 className="text-2xl font-bold my-2" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="text-xl font-semibold mt-6 mb-2" {...props} />
          ),
          a: ({ ...props }) => (
            <a {...props} className='text-blue-500 underline' />
          ),
        }}>{markdownContent}</ReactMarkdown>
    </div>
  );
}