import { Link } from "react-router";
import { privacyContent } from "../privacyContent";
import { FormattedContent } from "../components/FormattedContent";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Privacy Policy | SoulGarden" },
  { name: "description", content: "SoulGarden Privacy Policy" },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen font-body text-pencil min-w-0 bg-[#FBF5E4]">
      <div className="max-w-3xl mx-auto px-4 sm:px-5 md:px-6 py-8 sm:py-10 md:py-12">
        <Link
          to="/"
          className="font-body text-sm sm:text-base text-pencil/70 hover:text-brand-lightBlue underline decoration-2 underline-offset-2 min-h-[44px] inline-flex items-center touch-manipulation mb-6 sm:mb-8"
        >
          ← Back to SoulGarden
        </Link>
        <article className="border-2 border-pencil p-4 sm:p-6 md:p-8 bg-brand-creamAccent rounded-2xl shadow-[3px_3px_0px_0px_rgba(45,45,45,0.12)]">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-pencil mb-6">
            Privacy Policy
          </h1>
          <div
            className="font-body text-sm sm:text-base text-pencil/90 leading-relaxed"
            style={{ maxWidth: "65ch" }}
          >
            <FormattedContent content={privacyContent} />
          </div>
        </article>
      </div>
    </div>
  );
}
