export default function Button({ children, variant = "primary", className = "", ...props }) {
  const base = `btn ${variant === "cta" ? "btn-cta" : "btn-primary"}`;
  return (
    <button className={`${base} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
