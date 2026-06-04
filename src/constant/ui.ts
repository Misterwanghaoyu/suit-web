export const SPACING = {
  section: {
    py: 'py-24',
    pyLarge: 'py-32',
    px: 'px-6 md:px-12 lg:px-24',
  },
  container: {
    maxWidth: 'max-w-6xl',
    maxWidthLarge: 'max-w-7xl',
    maxWidthSmall: 'max-w-4xl',
  },
} as const;

export const TYPOGRAPHY = {
  heading: {
    hero: 'text-5xl md:text-7xl',
    section: 'text-4xl md:text-5xl',
    subsection: 'text-3xl md:text-4xl',
    card: 'text-xl md:text-2xl',
  },
  body: {
    large: 'text-lg md:text-xl',
    base: 'text-base md:text-lg',
    small: 'text-sm',
    tiny: 'text-[10px]',
  },
} as const;

export const TRANSITION = {
  default: 'transition-all duration-300',
  hover: 'hover:opacity-60 transition-opacity',
} as const;
