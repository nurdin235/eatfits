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
        <label className="text-gray-900 dark:text-gray-200 text-sm font-semibold leading-normal ml-1">
          {label}
        </label>
      )} 

      <input
        className={clsx(
          'form-input flex w-full rounded-xl text-gray-900 dark:text-white border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark focus:border-primary focus:ring-1 focus:ring-primary h-14 placeholder:text-gray-400 dark:placeholder:text-gray-600 px-4 pr-12 text-base transition-all shadow-sm',
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
