/**
 * Full-screen loading page before landing: 3 plant assets with alternating up/down float.
 */
const PLANTS = [
  { src: '/Plant_assets/smiling_bouquet.png', alt: 'Smiling bouquet', delayClass: '' },
  { src: '/Plant_assets/sunflower.png', alt: 'Sunflower', delayClass: 'animation-delay-500' },
  { src: '/Plant_assets/fire_flower.png', alt: 'Fire flower', delayClass: 'animation-delay-1000' },
] as const;

export function LoadingPage() {
  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-paper font-body text-pencil"
      style={{
        backgroundImage: 'radial-gradient(#e5e0d8 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
      aria-live="polite"
      aria-label="Loading SoulGarden"
    >
      {/* 3 plants in a row, alternating up/down float */}
      <div className="flex items-end justify-center gap-4 sm:gap-6 md:gap-8 px-4">
        {PLANTS.map((plant) => (
          <div key={plant.src} className="flex flex-col items-center">
            <img
              src={plant.src}
              alt={plant.alt}
              className={`h-14 w-auto sm:h-16 md:h-20 object-contain drop-shadow-sm animate-loading-float ${plant.delayClass}`}
              loading="eager"
            />
          </div>
        ))}
      </div>
      {/* Wordmark only, no captions */}
      <div className="mt-8 sm:mt-10 flex flex-col items-center">
        <img
          src="/WordMark_Chrome.png"
          alt="SoulGarden"
          className="h-6 sm:h-7 w-auto object-contain opacity-90"
        />
      </div>
    </div>
  );
}
