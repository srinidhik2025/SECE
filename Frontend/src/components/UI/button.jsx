const variants = {
  default: 'bg-black text-white hover:bg-black/80',
  destructive: 'bg-red-600 text-white hover:bg-red-700',
  outline: 'border border-gray-300 bg-transparent hover:bg-gray-100',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  ghost: 'bg-transparent hover:bg-gray-100',
}

export function Button({ variant = 'default', className = '', type = 'button', ...props }) {
  const variantClass = variants[variant] ?? variants.default

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantClass} ${className}`}
      {...props}
    />
  )
}