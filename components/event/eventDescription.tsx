"use client";

import { LabelText } from "../shared";

export default function EventDescription({
    description,
}: {
    description: string;
}) {
    const formattedDescription = description
        // bold markdown (**text**)
        .replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>",
        )

        // paragraphs
        .split(/\n{2,}/)
        .map(
            (paragraph) =>
                `<p>${paragraph.replace(
                    /\n/g,
                    "<br />",
                )}</p>`,
        )
        .join("")

        // prevent excessive breaks
        .replace(
            /(<br\s*\/?>\s*){3,}/g,
            "<br /><br />",
        );

    return (
        <div className="w-full flex flex-col font-medium px-4 py-4">
            <LabelText>About Event</LabelText>

            <div
                className="event-description text-sm text-start mt-4 [&_strong]:font-bold [&_p]:mb-3"
                dangerouslySetInnerHTML={{
                    __html: formattedDescription,
                }}
            />
        </div>
    );
}