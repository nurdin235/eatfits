import clsx from 'clsx'

export default function Input({
  label,
  error,
  className,
  ...props
}) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="text-primary dark:text-primary text-sm font-semibold leading-normal ml-1">
          {label}
        </label>
      )} 

      <input
        className={clsx(
          'form-input flex w-full rounded-xl text-foreground dark:text-white border-dark/10 dark:border-dark/20 bg-surface-light dark:bg-surface-dark focus:border-primary focus:ring-1 focus:ring-primary h-14 placeholder:text-primary/50 dark:placeholder:text-primary/50 px-4 pr-12 text-base transition-all shadow-sm',
          error ? 'border-cta focus:ring-1 focus:ring-cta' : '',
          className
        )}
        {...props}
      />

      {error && (
        <p className="text-xs text-cta mt-1">{error}</p>
      )}
    </div>
  )
}
