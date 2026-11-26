function Label({ className = "", ...props }) {
  return (
    <label
      data-slot="label"
      className={`flex items-center gap-2 text-sm leading-none font-medium select-none ${className}`}
      {...props}
    />
  )
}

export { Label }
