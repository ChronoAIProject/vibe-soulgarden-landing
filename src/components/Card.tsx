import { WOBBLY_RADIUS_MD, HARD_SHADOW_CARD, HARD_SHADOW } from '../design-tokens';

type Decoration = 'none' | 'tape' | 'tack' | 'pin';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  decoration?: Decoration;
  tint?: 'white' | 'cream' | 'lightBlue' | 'lavender' | 'postit' | 'greenAccent' | 'roseAccent';
  rotate?: 0 | 1 | 2 | -1 | -2;
}

const tintBg: Record<NonNullable<CardProps['tint']>, string> = {
  white: 'bg-white',
  cream: 'bg-brand-creamAccent',
  lightBlue: 'bg-brand-lightBlueAccent/50',
  lavender: 'bg-brand-lavenderAccent/50',
  postit: 'bg-[#fff9c4]',
  greenAccent: 'bg-brand-greenAccent',
  roseAccent: 'bg-brand-roseAccent',
};

export function Card({
  children,
  className = '',
  decoration = 'none',
  tint = 'white',
  rotate = 0,
}: CardProps) {
  const rotation = {
    0: '',
    1: 'rotate-1',
    2: 'rotate-2',
    '-1': '-rotate-1',
    '-2': '-rotate-2',
  }[rotate];

  const isTape = decoration === 'tape';
  const isPinOrTape = decoration === 'pin' || decoration === 'tape';
  return (
    <div
      className={`
        relative p-4 sm:p-6 md:p-8
        transition-transform duration-100 hover:-rotate-1
        ${isPinOrTape ? 'border-[3px] border-pencil' : 'border-2 border-pencil'}
        ${tintBg[tint]} ${rotation} ${className}
      `}
      style={{
        borderRadius: WOBBLY_RADIUS_MD,
        boxShadow: isPinOrTape ? HARD_SHADOW : HARD_SHADOW_CARD,
      }}
    >
      {decoration === 'tape' && (
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 sm:w-32 h-6 bg-paperMuted border-2 border-pencil/30 -rotate-3 z-10"
          style={{ borderRadius: '8px 8px 2px 2px', boxShadow: '2px 2px 0px 0px rgba(45,45,45,0.2)' }}
          aria-hidden
        />
      )}
      {decoration === 'tack' && (
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-roseAccent border-2 border-pencil shadow-[2px_2px_0px_0px_#2d2d2d] z-10"
          style={{ borderRadius: '50%' }}
          aria-hidden
        />
      )}
      {decoration === 'pin' && (
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-roseAccent border-2 border-pencil shadow-[2px_2px_0px_0px_#2d2d2d] z-10"
          style={{ borderRadius: '50%' }}
          aria-hidden
        />
      )}
      <div className="relative z-0">{children}</div>
    </div>
  );
}
