export default function IndustryCard({
  icon,
  title,
  text,
  as: Component = "div",
  className = "",
  ...props 
}) {
  return (
    <Component {...props}
      className={`bg-white max-w-[320px] min-h-[320px] h-fit rounded-[20px] shadow-md hover:shadow-lg transition p-[15px] md:p-[24px] flex items-center text-center ${className}`}
    >
      <div className="flex flex-col items-center text-center">
        <img src={icon} alt={title} className="h-12 w-12" />

        <h3 className="mt-4 text-[18px] md:text-[24px] font-semibold font-raleway text-[var(--color-text-dark)]">
          {title}
        </h3>

        <p className="mt-2 text-[14px] md:text-[16px] text-[var(--color-text-grey)] font-medium font-manrope">
          {text}
        </p>
      </div>
    </Component>
  );
}
