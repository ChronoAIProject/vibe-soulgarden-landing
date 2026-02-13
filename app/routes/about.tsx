import { Link } from "react-router";
import { aboutContent } from "../aboutContent";
import { FormattedContent } from "../components/FormattedContent";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "About | SoulGarden" },
  { name: "description", content: "Learn about SoulGarden and why we built it" },
];

function AboutContentWithImage() {
  // Split content into paragraphs
  const paragraphs = aboutContent.split(/\n\n+/).filter((p) => p.trim());
  
  // Find the index of "Rooting for you," and "The SoulGarden Team"
  const rootingIndex = paragraphs.findIndex(p => p.trim().startsWith("Rooting for you,"));
  const teamIndex = paragraphs.findIndex(p => p.trim().startsWith("The SoulGarden Team"));
  
  // Identify paragraph titles (short lines without periods, or specific patterns)
  const isTitle = (text: string): boolean => {
    const trimmed = text.trim();
    // Known section titles
    const knownTitles = [
      "Why we built SoulGarden",
      "Who we built it for",
      "What we believe in and stand for",
    ];
    // Exclude greetings and signatures
    const excludePatterns = [
      "Dear",
      "Rooting for you",
      "The SoulGarden Team",
      "We're planting",
    ];
    
    if (excludePatterns.some(pattern => trimmed.startsWith(pattern))) {
      return false;
    }
    
    return knownTitles.includes(trimmed) || (trimmed.length < 60 && !trimmed.includes('.') && trimmed.length > 10);
  };
  
  // Function to convert URLs to links (from FormattedContent)
  const linkify = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s\)]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
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
      {paragraphs.map((paragraph, index) => {
        const isRooting = index === rootingIndex;
        const isTeam = index === teamIndex;
        const isParagraphTitle = isTitle(paragraph.trim());
        const isLast = index === paragraphs.length - 1;
        
        return (
          <div key={index}>
            {isRooting && (
              <>
                <p className="mb-6 font-bold">
                  {linkify(paragraph.trim())}
                </p>
                <div className="flex justify-start my-6 sm:my-8">
                  <img 
                    src="/Plant_assets/smiling_bouquet.png" 
                    alt="Smiling Bouquet" 
                    className="h-20 sm:h-24 md:h-28 w-auto object-contain" 
                  />
                </div>
              </>
            )}
            {!isRooting && isParagraphTitle && (
              <h2 className="font-bold text-pencil mb-3 mt-6 first:mt-0">
                {paragraph.trim()}
              </h2>
            )}
            {!isRooting && !isParagraphTitle && (
              <p className={`mb-6 ${isLast ? 'last:mb-0' : ''} ${isTeam ? 'font-bold' : ''}`}>
                {linkify(paragraph.trim())}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen font-body text-pencil min-w-0 bg-[#FBF5E4]">
      <div className="max-w-3xl mx-auto px-4 sm:px-5 md:px-6 py-8 sm:py-10 md:py-12">
        <Link
          to="/"
          className="font-body text-sm sm:text-base text-pencil/70 hover:text-brand-lightBlue underline decoration-2 underline-offset-2 min-h-[44px] inline-flex items-center touch-manipulation mb-6 sm:mb-8"
        >
          ← Back to SoulGarden
        </Link>
        <article 
          className="relative border-[3px] border-pencil p-4 sm:p-6 md:p-8 bg-brand-lavenderAccent transition-transform duration-100 rotate-1 hover:rotate-0"
          style={{
            borderRadius: '240px 20px 220px 20px / 20px 220px 20px 240px',
            boxShadow: '4px 4px 0px 0px #2d2d2d',
          }}
        >
          <div
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-lavenderAccent border-2 border-pencil shadow-[2px_2px_0px_0px_#2d2d2d] z-10"
            style={{ borderRadius: '50%' }}
            aria-hidden
          />
          <img
            src="/Logo_Icon_Chrome.png"
            alt="SoulGarden Logo"
            className="absolute top-4 right-8 sm:top-6 sm:right-10 md:right-12 w-12 h-12 sm:w-16 sm:h-16 object-contain z-10"
          />
          <div className="relative z-0">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-pencil mb-6">
              About SoulGarden
            </h1>
            <div
              className="font-body text-sm sm:text-base text-pencil/90 leading-relaxed"
              style={{ maxWidth: "65ch" }}
            >
              <AboutContentWithImage />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
