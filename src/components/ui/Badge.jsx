import clsx from 'clsx'

export default function Badge({ children, variant = 'primary' }) {
  const variants = {
    primary: 'bg-primary/10 text-primary',
    accent: 'bg-accent/20 text-dark',
    cta: 'bg-cta/10 text-cta',
  }

  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variants[variant]
      )}
    >
      {children}
    </span>
  )
}
