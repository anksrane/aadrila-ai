export default function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center transition duration-200 focus:outline-none";

  const variants = {
    primary:
      "px-[36px] py-[16px] rounded-[160px] bg-[var(--color-primary)] text-white text-[16px] font-radioCanada font-semibold",
    secondary:
      "px-[24px] py-[16px] rounded-[50px] btn-gradient text-white text-[20px] font-manrope font-bold",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
