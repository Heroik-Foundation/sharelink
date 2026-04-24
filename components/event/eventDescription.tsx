"use client";

import ReactMarkdown from "react-markdown";
import { LabelText } from "../shared";

export default function EventDescription({
    description,
}: {
    description: string;
}) {
    const formattedDescription = description
        .split(/\n{2,}/)
        .map((p) => `<p>${p.replace(/\n/g, "<br />")}</p>`)
        .join("")
        .replace(/(<br\s*\/?>\s*){2,}/g, "<br /><br />");

        console.log(formattedDescription?.replace("<br /><br /><br />", "<p></p>"));
        
    
    return (
        <div className="w-full flex flex-col font-medium px-4 py-4">
            <LabelText>About Event</LabelText>  
            <div
                className="event-description text-sm text-start mt-4"
                dangerouslySetInnerHTML={{ __html: formattedDescription?.replace("<br /><br /><br />", "<br />") }}
            />
        </div>
    );
}