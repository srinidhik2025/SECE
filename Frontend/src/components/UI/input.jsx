function Input({ className = "", type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={`h-8 w-full min-w-0 rounded-lg border border-gray-300 bg-transparent px-2.5 py-1 text-base transition-colors outline-none placeholder:text-gray-400 focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${className}`}
      {...props}
    />
  )
}

export { Input }
