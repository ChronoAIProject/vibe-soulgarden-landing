import { Link } from "react-router";

interface FormattedContentProps {
  content: string;
}

export function FormattedContent({ content }: FormattedContentProps) {
  // Split content into paragraphs (double line breaks)
  const paragraphs = content.split(/\n\n+/).filter((p) => p.trim());

  // Function to convert URLs to links
  const linkify = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s\)]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        // Check if it's the terms link - convert to internal route
        if (part.includes("soulgarden.chrono-ai.fun/terms")) {
          return (
            <Link
              key={index}
              to="/terms"
              className="text-brand-lightBlue hover:text-brand-roseAccent underline decoration-2 underline-offset-2"
            >
              Terms of Service
            </Link>
          );
        }
        // Check if it's the privacy link - convert to internal route
        if (part.includes("soulgarden.chrono-ai.fun/privacy")) {
          return (
            <Link
              key={index}
              to="/privacy"
              className="text-brand-lightBlue hover:text-brand-roseAccent underline decoration-2 underline-offset-2"
            >
              Privacy Policy
            </Link>
          );
        }
        // Regular external links
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-lightBlue hover:text-brand-roseAccent underline decoration-2 underline-offset-2"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-4 last:mb-0">
          {linkify(paragraph.trim())}
        </p>
      ))}
    </div>
  );
}
