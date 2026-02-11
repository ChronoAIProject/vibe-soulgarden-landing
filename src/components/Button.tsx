import { WOBBLY_RADIUS } from '../design-tokens';

type ButtonVariant = 'primary' | 'secondary';

/* Smaller buttons: 40px min touch target, smaller text */
const baseClasses = `
  inline-flex items-center justify-center
  min-h-[40px] min-w-[36px] px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2
  gap-1.5 text-sm font-heading font-bold sm:text-base md:text-base
  border-2 border-pencil
  transition-transform duration-100
  shadow-hard hover:shadow-hard-hover
  hover:translate-x-0.5 hover:translate-y-0.5
  active:translate-x-1 active:translate-y-1 active:shadow-none
  touch-manipulation
`;

const variantClasses = {
  primary:
    'bg-black text-white border-[#C6D4F3] shadow-[4px_4px_0px_0px_#C6D4F3] hover:shadow-[2px_2px_0px_0px_#C6D4F3] hover:bg-brand-roseAccent hover:text-pencil hover:border-brand-roseAccent',
  secondary:
    'bg-brand-lavenderAccent text-pencil border-brand-lavender hover:bg-brand-greenAccent hover:text-pencil hover:border-brand-greenAccent',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

interface ButtonLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  href: string;
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps | ButtonLinkProps) {
  const classes = `${baseClasses} ${variantClasses[variant ?? 'primary']} ${className}`;
  const style = { borderRadius: WOBBLY_RADIUS };

  if ('href' in props && props.href) {
    const { href, ...rest } = props as ButtonLinkProps;
    return (
      <a href={href} className={classes} style={style} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      style={style}
      {...(props as ButtonProps)}
    >
      {children}
    </button>
  );
}
