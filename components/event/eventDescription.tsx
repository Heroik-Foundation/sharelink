"use client";

import ReactMarkdown from "react-markdown";
import { LabelText } from "../shared";

export default function EventDescription({
    description,
}: {
    description: string;
}) {
    // Normalize the raw description into clean markdown:
    // 1. Trim leading/trailing whitespace
    // 2. Collapse 3+ newlines into 2 (one blank line = paragraph break in markdown)
    // 3. Convert single \n (that are NOT before/after a heading) into two spaces + \n
    //    so markdown renders them as a <br />
    const normalizedDescription = description
        .trim()
        .replace(/\n{3,}/g, "\n\n")
        .replace(/([^\n])\n(?!#)(?!\n)/g, "$1  \n");

    return (
        <div className="w-full flex flex-col font-medium px-4 py-4">
            <LabelText>About Event</LabelText>
            <div className="event-description text-sm text-start mt-4">
                <ReactMarkdown
                    components={{
                        // Paragraphs
                        p: ({ children }) => (
                            <p className="mb-2 leading-relaxed">{children}</p>
                        ),
                        // Headings — mt separates from prev section, mb-0 keeps content close
                        h1: ({ children }) => (
                            <h1 className="block w-full text-xl font-bold mt-8 mb-0">{children}</h1>
                        ),
                        h2: ({ children }) => (
                            <h2 className="block w-full text-lg font-bold mt-7 mb-0">{children}</h2>
                        ),
                        h3: ({ children }) => (
                            <h3 className="block w-full text-base font-semibold mt-6 mb-0">{children}</h3>
                        ),
                        // Lists
                        ul: ({ children }) => (
                            <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>
                        ),
                        ol: ({ children }) => (
                            <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>
                        ),
                        li: ({ children }) => (
                            <li className="leading-relaxed">{children}</li>
                        ),
                        // Inline
                        strong: ({ children }) => (
                            <strong className="block w-full font-bold mt-2">{children}</strong>
                        ),
                        em: ({ children }) => (
                            <em className="italic">{children}</em>
                        ),
                        // Line break
                        br: () => <br />,
                        // Links
                        a: ({ href, children }) => (
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                {children}
                            </a>
                        ),
                        // Blockquote
                        blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-3">
                                {children}
                            </blockquote>
                        ),
                        // Code
                        code: ({ children }) => (
                            <code className="bg-gray-100 rounded px-1 py-0.5 text-xs font-mono">
                                {children}
                            </code>
                        ),
                    }}
                >
                    {normalizedDescription}
                </ReactMarkdown>
            </div>
        </div>
    );
}