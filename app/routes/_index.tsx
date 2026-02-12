import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { LoadingPage } from "../components/LoadingPage";
import { ArrowRight } from "lucide-react";
import { SiInstagram, SiPinterest, SiTiktok } from "react-icons/si";
import type { MetaFunction } from "react-router";

const LOADING_DURATION_MS = 1500;

export const meta: MetaFunction = () => [
  { title: "SoulGarden" },
  {
    name: "description",
    content:
      "Manifestation, but not as a chore. Turn your affirmations into personalized magical AI plants that grow through 2 minute daily affirmation rituals that feel like play, not work.",
  },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "SoulGarden" },
  {
    property: "og:description",
    content:
      "Manifestation, but not as a chore. Turn your affirmations into personalized magical AI plants that grow through 2 minute daily affirmation rituals that feel like play, not work.",
  },
  { property: "og:image", content: "/Social_img.png" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "SoulGarden" },
  {
    name: "twitter:description",
    content:
      "Manifestation, but not as a chore. Turn your affirmations into personalized magical AI plants that grow through 2 minute daily affirmation rituals that feel like play, not work.",
  },
  { name: "twitter:image", content: "/Social_img.png" },
];

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), LOADING_DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-screen font-body text-pencil min-w-0 animate-fade-in">
      {/* Hero + Nav — full width bg encapsulates both */}
      <section
        className="relative w-full min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/Plant_assets/sunny_garden.png)' }}
        aria-label="Hero"
      >
        {/* Nav */}
        <header className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-4 sm:py-6 md:py-8">
          <nav className="flex items-center justify-between gap-2">
            <a href="#" className="flex items-center gap-1.5 sm:gap-2 shrink-0 min-h-[44px] min-w-[44px] items-center justify-center md:justify-start" aria-label="SoulGarden home">
              <img
                src="/Logo_Icon_Chrome.png"
                alt=""
                aria-hidden
                className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 object-contain"
              />
              <img
                src="/WordMark_Chrome.png"
                alt="SoulGarden"
                className="h-5 sm:h-6 md:h-6 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none"
              />
            </a>
            <div className="flex flex-1 items-center justify-center gap-3 sm:gap-4 shrink-0" aria-label="Social links">
              <a href="https://www.tiktok.com/@soulgarden.app?lang=en" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-pencil text-pencil/80 hover:text-brand-roseAccent hover:border-brand-roseAccent transition-colors touch-manipulation" aria-label="TikTok">
                <SiTiktok className="h-5 w-5 sm:h-5 sm:w-5" aria-hidden />
              </a>
              <a href="https://www.instagram.com/soulgarden.app/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-pencil text-pencil/80 hover:text-brand-roseAccent hover:border-brand-roseAccent transition-colors touch-manipulation" aria-label="Instagram">
                <SiInstagram className="h-5 w-5 sm:h-5 sm:w-5" aria-hidden />
              </a>
              <a href="https://www.pinterest.com/appsoulgarden/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-pencil text-pencil/80 hover:text-brand-roseAccent hover:border-brand-roseAccent transition-colors touch-manipulation" aria-label="Pinterest">
                <SiPinterest className="h-5 w-5 sm:h-5 sm:w-5" aria-hidden />
              </a>
            </div>
            <Button variant="primary" href="#get-started" className="animate-nav-cta-shake">
              Get started
            </Button>
          </nav>
        </header>

        {/* Hero content — left: copy + CTAs, right: phone mock */}
        <div className="relative z-10 flex flex-1 flex-col md:flex-row md:items-center md:justify-center max-w-5xl mx-auto px-4 sm:px-5 md:px-6 py-8 sm:py-12 md:py-16 w-full gap-8 md:gap-12">
          <div className="w-full max-w-2xl xl:max-w-xl -mt-12 sm:-mt-16 md:-rotate-1 md:-mt-20 shrink-0">
            <h1 className="leading-tight w-full">
              <img src="/Balloon_title.png" alt="Type a wish. Watch it grow." className="w-full max-w-[95vw] sm:max-w-[480px] md:max-w-[580px] lg:max-w-[680px] xl:max-w-[760px] h-auto block leading-none" />
            </h1>
            <div
              className="mt-1 sm:mt-2 relative border-2 border-pencil p-4 sm:p-5 md:p-6 lg:p-6 transition-transform duration-100 hover:-rotate-1 bg-brand-roseAccent rotate-1 w-full max-w-md sm:max-w-lg lg:max-w-md xl:max-w-lg"
              style={{
                borderRadius: '240px 20px 220px 20px / 20px 220px 20px 240px',
                boxShadow: '3px 3px 0px 0px rgba(45,45,45,0.12)',
              }}
            >
              <p className="text-sm sm:text-base md:text-base font-body text-pencil/80 leading-relaxed">
                <strong className="font-bold text-pencil/90">Perfect for Your Daily Intentional Break</strong>
                <br />
                A quick daily 2 minute intentional break from doom scrolling. Perfect for the busy ADHD minds, wandering attention, and anyone who wants wellness practice to feel like play, not work.
              </p>
            </div>
            <div className="mt-5 sm:mt-7 md:mt-8 flex flex-wrap gap-3 sm:gap-4 md:gap-5">
              <Button variant="primary" href="#get-started">
                Start manifesting
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" strokeWidth={2.5} />
              </Button>
              <Button variant="secondary" href="#how-it-works">
                How it works
              </Button>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-auto shrink-0">
            <img
              src="/Phone_mocks/Phone_hero.png"
              alt="SoulGarden app on phone, plant a seed of intention"
              className="h-[320px] sm:h-[400px] md:h-[480px] lg:h-[560px] xl:h-[620px] w-auto max-h-[70vh] object-contain animate-plant-float"
            />
          </div>
        </div>
      </section>

      {/* Why SoulGarden — one section on its own: heading + 3 phone + card blocks */}
      <section
        id="why-soulgarden"
        className="w-full"
        style={{ background: 'radial-gradient(ellipse 120vmin 72vmin at center, #D9E4F7 0%, #FFFFFF 39%, #EDDCFB 100%)' }}
        aria-labelledby="why-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-5 md:px-6 py-12 sm:py-16 md:py-20">
        <h2 id="why-heading" className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-pencil text-center mb-2 sm:mb-3">
          &quot;Plant&quot; your wildest dreams
        </h2>
        <p className="font-body text-center text-base sm:text-lg text-pencil/80 max-w-xl mx-auto mb-10 sm:mb-16">
          Dream big (example) I&apos;m hot, rich and unbothered.
        </p>

        {/* Section 1: AI-Powered — image outside, card = pinned note (text only) */}
        <div className="mb-12 sm:mb-16 md:mb-24 grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 items-center">
          <div className="relative flex justify-center order-2 md:order-1 w-full shrink-0">
            <img src="/Phone_mocks/Phone_3.png" alt="SoulGarden app on phone showing plant evolution and Aurum-Crested Tide-Lily" className="relative z-10 h-[400px] sm:h-[500px] md:h-[560px] lg:h-[640px] w-auto max-h-[85vh] object-contain animate-plant-float" />
          </div>
          <div className="order-1 md:order-2 relative">
            <img src="/phone_sticker/sticker_3.png" alt="" aria-hidden className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain pointer-events-none z-[100]" />
            <Card decoration="tack" tint="greenAccent" rotate={1} className="w-full max-w-md">
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-pencil mb-3 sm:mb-4">Magic starts</h3>
              <p className="font-body text-base sm:text-lg md:text-xl text-pencil/80 leading-relaxed mb-3 sm:mb-4">
                SoulGarden transforms your dreams into beautifully worded manifestation mantras.
              </p>
              <p className="font-body text-base sm:text-lg md:text-xl text-pencil/80 leading-relaxed">
                You share what your heart desires, and SoulGarden turns it into poetry for the universe. It&apos;s your personal cosmic translator taking your wishes and weaving them into powerful, soulful affirmations that help you speak your dreams into existence. ✨
              </p>
            </Card>
          </div>
        </div>

        {/* Section 2: Wellness-Focused — image outside, card = pinned note (text only) */}
        <div className="mb-12 sm:mb-16 md:mb-24 grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 items-center">
          <div className="relative flex justify-center order-2 w-full shrink-0">
            <img src="/Phone_mocks/Phone_2.png" alt="SoulGarden app on phone showing Your Garden with plant collection" className="relative z-10 h-[400px] sm:h-[500px] md:h-[560px] lg:h-[640px] w-auto max-h-[85vh] object-contain animate-plant-float" />
          </div>
          <div className="order-1 relative">
            <img src="/phone_sticker/sticker_2.png" alt="" aria-hidden className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain pointer-events-none z-[100]" />
            <Card decoration="tack" tint="roseAccent" rotate={-1} className="w-full max-w-md">
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-pencil mb-3 sm:mb-4">Unlimited plant variation</h3>
              <p className="font-body text-base sm:text-lg md:text-xl text-pencil/80 leading-relaxed">
                <strong className="font-bold text-pencil/90">Your manifestation is sent out to the universe.</strong> Each manifestation becomes a unique, collectible plant that grows through daily personalized affirmations. We promise every plant is one-of-a-kind, uniquely yours, no repeats! Don&apos;t believe us? Share it with your friends and see!
              </p>
            </Card>
          </div>
        </div>

        {/* Section 3: Gamified Engagement — image outside, card = pinned note (text only) */}
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 items-center">
          <div className="relative flex justify-center order-2 md:order-1 w-full shrink-0">
            <img src="/Phone_mocks/Phone_1.png" alt="SoulGarden app on phone showing daily affirmation and Gilded Aurum-Vine plant" className="relative z-10 h-[400px] sm:h-[500px] md:h-[560px] lg:h-[640px] w-auto max-h-[85vh] object-contain animate-plant-float" />
          </div>
          <div className="order-1 md:order-2 relative">
            <img src="/phone_sticker/sticker_1.png" alt="" aria-hidden className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain pointer-events-none z-[100]" />
            <Card decoration="tack" tint="lightBlue" rotate={1} className="w-full max-w-md">
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-pencil mb-3 sm:mb-4">Watch it bloom into Reality</h3>
              <p className="font-body text-base sm:text-lg md:text-xl text-pencil/80 leading-relaxed mb-3 sm:mb-4">
                &quot;Water&quot; your unique plants daily by holding and chant your daily affirmation. Your affirmations are unique to YOU. Specifically tailored to each manifestation. This is the core daily ritual that helps plants grow.
              </p>
              <p className="font-body text-base sm:text-lg md:text-xl text-pencil/80 leading-relaxed mb-3 sm:mb-4">
                If you keep watering with intentions, this is where magic happens. Your plants will start to evolve into the next growing phase until they are fully bloomed.
              </p>
              <p className="font-body text-base sm:text-lg md:text-xl text-pencil/80 leading-relaxed">
                Collect them all in your plant encyclopedia.
              </p>
            </Card>
          </div>
        </div>
        </div>
      </section>

      {/* How it works + For the believers who: — merged section */}
      <section
        id="how-it-works"
        className="w-full"
        style={{ background: 'radial-gradient(ellipse 120vmin 72vmin at center, #FBF5E4 0%, #FFFFFF 39%, #D9E4F7 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-5 md:px-6 py-12 sm:py-16 md:py-20">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-pencil text-center mb-8 sm:mb-10 md:mb-12">
            How it works
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card decoration="pin" tint="greenAccent" rotate={1}>
              <div className="flex justify-center mb-3 sm:mb-4">
                <img src="/Plant_assets/royal_seed.png" alt="Seed" className="h-20 sm:h-24 md:h-28 w-auto object-contain" />
              </div>
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center border-2 border-pencil font-heading font-bold text-base sm:text-lg bg-brand-creamAccent shrink-0" style={{ borderRadius: '180px 20px 160px 20px / 20px 160px 20px 180px' }}>1</span>
                <h3 className="font-heading text-lg sm:text-xl font-bold">Plant</h3>
              </div>
              <p className="font-body text-sm sm:text-base text-pencil/80">
                Set your manifestation and send it out to the universe. Watch it turn into a beautiful plant.
              </p>
              <p className="font-body text-xs sm:text-sm text-pencil/60 mt-2 italic">
                *Pro Tip: Be Delusional
              </p>
            </Card>
            <Card decoration="pin" tint="roseAccent" rotate={-1}>
              <div className="flex justify-center mb-3 sm:mb-4">
                <img src="/Plant_assets/sproutling.png" alt="Sprout" className="h-20 sm:h-24 md:h-28 w-auto object-contain" />
              </div>
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center border-2 border-pencil font-heading font-bold text-base sm:text-lg bg-brand-lightBlueAccent shrink-0" style={{ borderRadius: '180px 20px 160px 20px / 20px 160px 20px 180px' }}>2</span>
                <h3 className="font-heading text-lg sm:text-xl font-bold">Water</h3>
              </div>
              <p className="font-body text-sm sm:text-base text-pencil/80">
                Take a minute break and chant your daily affirmation with intent.
              </p>
              <p className="font-body text-xs sm:text-sm text-pencil/60 mt-2 italic">
                *Hold to connect your energy
              </p>
            </Card>
            <Card decoration="pin" tint="lavender" rotate={1}>
              <div className="flex justify-center mb-3 sm:mb-4">
                <img src="/Plant_assets/smiling_bouquet.png" alt="Bloom" className="h-20 sm:h-24 md:h-28 w-auto object-contain" />
              </div>
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center border-2 border-pencil font-heading font-bold text-base sm:text-lg bg-brand-lavenderAccent shrink-0" style={{ borderRadius: '180px 20px 160px 20px / 20px 160px 20px 180px' }}>3</span>
                <h3 className="font-heading text-lg sm:text-xl font-bold">Bloom</h3>
              </div>
              <p className="font-body text-sm sm:text-base text-pencil/80">
                Your unique magical plant will fully bloom after 4 growth stages.
              </p>
              <p className="font-body text-xs sm:text-sm text-pencil/60 mt-2 italic">
                *Collect them in your encyclopedia
              </p>
            </Card>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 w-full text-center mt-16 sm:mt-20 md:mt-24">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-pencil">
              For the believers who:
            </h2>
            {(() => {
              const texts = [
                'Don\'t want another "chore"',
                'Want more than static vision boards or journal notebooks',
                'Believes in magic but gets easily distracted',
                'Want a short intentional and fun break from doom scrolling',
              ];
              const bubbleBg = [
                'bg-brand-roseAccent/90',
                'bg-brand-lightBlueAccent/80',
                'bg-brand-lavenderAccent/80',
                'bg-yellow-100',
              ];
              const plantAssets = [
                '/Plant_assets/sunflower.png',
                '/Plant_assets/animating_sprout.png',
                '/Plant_assets/golden_lotus.png',
                '/Plant_assets/flying_heart.png',
              ];
              const renderBubble = (i: number) => (
                <div
                  key={i}
                  className={`relative border-2 border-pencil pl-14 sm:pl-16 md:pl-20 pr-4 sm:pr-5 md:pr-6 py-1.5 sm:py-2 md:py-2.5 ${bubbleBg[i]} w-full min-w-0 overflow-visible text-left min-h-[4.5rem] sm:min-h-[5rem] flex items-center`}
                  style={{
                    borderRadius: '240px 20px 220px 20px / 20px 220px 20px 240px',
                    boxShadow: '3px 3px 0px 0px rgba(45,45,45,0.12)',
                  }}
                >
                  <img
                    src={plantAssets[i]}
                    alt=""
                    aria-hidden
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain pointer-events-none z-10"
                  />
                  <span className="relative z-0 font-body text-xs sm:text-sm md:text-base text-pencil/90 text-left leading-snug">{texts[i]}</span>
                </div>
              );
              return (
                <div className="grid grid-cols-2 gap-x-10 gap-y-3 sm:gap-x-12 sm:gap-y-4 md:gap-x-16">
                  {renderBubble(0)}
                  {renderBubble(1)}
                  {renderBubble(2)}
                  {renderBubble(3)}
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* FAQ — one section, full-width radial gradient bg */}
      <section
        className="w-full"
        style={{ background: 'radial-gradient(ellipse 120vmin 72vmin at center, #EDDCFB 0%, #FFFFFF 39%, #F3D3DB 100%)' }}
        aria-labelledby="faq-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-5 md:px-6 py-12 sm:py-16 md:py-20">
        <h2 id="faq-heading" className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-pencil text-center mb-2 sm:mb-3">
          Frequently asked questions
        </h2>
        <p className="font-body text-center text-base sm:text-lg text-pencil/80 max-w-xl mx-auto mb-8 sm:mb-12">
          Quick answers about SoulGarden.
        </p>
        <ul className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
          {[
            {
              q: 'What is SoulGarden?',
              a: 'SoulGarden is an AI-powered manifestation and affirmation app. You set daily intentions, and they become beautiful, animated plants. Water them with personalized AI-generated affirmations in short 2–3 minute sessions and watch them grow through four stages: seed, sprout, growing, and fully bloomed.',
            },
            {
              q: 'How does the daily practice work?',
              a: 'Use the home screen widget for quick access. Each day you read your AI-generated affirmation and "Hold to Manifest" to water your plant. Sessions are short and visual so practice feels like play, not work. No long-form writing or extended meditation required.',
            },
            {
              q: 'Are the plants really unique?',
              a: 'Yes. AI generates one-of-a-kind plant designs for each intention. No two plants are the same. You can collect them in your personal encyclopedia and see your garden grow over time.',
            },
            {
              q: 'Is there a free version?',
              a: 'Yes. The free tier includes 3 plants per week, 3 waterings per plant per day, and up to 10 saved plants. Premium unlocks unlimited plants, waterings, premium and bioluminescent plant variations, ad-free experience, and cloud sync.',
            },
          ].map((faq, i) => {
            const faqTints = ['greenAccent', 'roseAccent', 'lightBlue', 'lavender', 'cream'] as const;
            return (
              <li key={faq.q}>
                <Card decoration="tape" tint={faqTints[i % 5]} rotate={i % 2 === 0 ? 1 : -1}>
                  <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold text-pencil mb-2">{faq.q}</h3>
                  <p className="font-body text-pencil/80 text-sm sm:text-base md:text-lg leading-relaxed">{faq.a}</p>
                </Card>
              </li>
            );
          })}
        </ul>
        </div>
      </section>

      {/* Final CTA + Footer — full width, single bg image */}
      <div
        className="flex w-full flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/cta_meadow_wide.png)' }}
      >
        <section id="get-started" className="flex w-full flex-col items-center justify-center px-4 sm:px-5 md:px-6 py-32 sm:py-40 md:py-48 lg:py-60">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-pencil">
              Your first magical plant is waiting.
            </h2>
            <p className="mt-2 sm:mt-3 font-body text-base sm:text-lg text-pencil/80 max-w-md mx-auto">
              You&apos;ve been scrolling for a while. That energy could&apos;ve grown something beautiful by now.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
              <Button variant="primary">
                Download for free now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" strokeWidth={2.5} />
              </Button>
            </div>
          </div>
        </section>

        {/* Footer — bubble style, responsive width within equal side margins, bottom padding */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-4 sm:pb-6 md:pb-8">
          <footer
            className="w-full relative border-2 border-pencil p-4 sm:p-5 md:p-6 bg-brand-creamAccent"
            style={{
              borderRadius: '240px 20px 220px 20px / 20px 220px 20px 240px',
              boxShadow: '3px 3px 0px 0px rgba(45,45,45,0.12)',
            }}
          >
          <div className="w-full px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a href="#" className="flex items-center shrink-0 min-h-[44px] items-center" aria-label="SoulGarden home">
              <img src="/WordMark_Chrome.png" alt="SoulGarden" className="h-5 sm:h-6 md:h-7 w-auto object-contain" />
            </a>
            <p className="font-body text-xs sm:text-sm text-pencil/60 text-center sm:text-right max-w-md">
              Plant a seed of intention today.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <Link to="/privacy" className="font-body text-sm sm:text-base text-pencil/70 hover:text-brand-roseAccent underline decoration-2 underline-offset-2 min-h-[44px] inline-flex items-center touch-manipulation">Privacy</Link>
              <Link to="/terms" className="font-body text-sm sm:text-base text-pencil/70 hover:text-brand-lightBlue underline decoration-2 underline-offset-2 min-h-[44px] inline-flex items-center touch-manipulation">Terms</Link>
            </div>
          </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
