"use client";

import ReactMarkdown from "react-markdown";
import { LabelText } from "../shared";

export default function EventDescription({
    description,
}: {
    description: string;
}) {
    return (
        <div className="w-full flex flex-col font-medium px-4 py-4">
            <LabelText>About Event</LabelText>
            <div className="event-description text-sm text-start mt-4">
                <ReactMarkdown
                    components={{
                        // Paragraphs
                        p: ({ children }) => (
                            <p className="mb-3 leading-relaxed">{children}</p>
                        ),
                        // Headings
                        h1: ({ children }) => (
                            <h1 className="block w-full text-xl font-bold mt-4 mb-2">{children}</h1>
                        ),
                        h2: ({ children }) => (
                            <h2 className="block w-full text-lg font-bold mt-3 mb-2">{children}</h2>
                        ),
                        h3: ({ children }) => (
                            <h3 className="block w-full text-base font-semibold mt-3 mb-1">{children}</h3>
                        ),
                        // Lists
                        ul: ({ children }) => (
                            <ul className="list-disc list-inside mb-3 space-y-1">{children}</ul>
                        ),
                        ol: ({ children }) => (
                            <ol className="list-decimal list-inside mb-3 space-y-1">{children}</ol>
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
                    {description}
                </ReactMarkdown>
            </div>
        </div>
    );
}
