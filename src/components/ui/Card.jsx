import clsx from 'clsx'

export default function Card({ children, className }) {
  return (
    <div
      className={clsx(
        'rounded-2xl bg-background shadow-sm border border-dark/10 p-6',
        className
      )}
    >
      {children}
    </div>
  )
}
