import React from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
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
          <a {...props} className="text-blue-500 underline" />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
