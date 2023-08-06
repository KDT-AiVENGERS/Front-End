import { ButtonProps } from "@/interfaces/components";

const Button: React.FC<ButtonProps> = ({
  id,
  children,
  className,
  onClick,
  newButtonColorClassName,
  newHoverColorClassName,
}) => {
  const bgColor = newButtonColorClassName
    ? newButtonColorClassName
    : "bg-space-yellow";
  const hoverColor = newHoverColorClassName
    ? newHoverColorClassName
    : "bg-space-red";

  return (
    <div className="flex items-center justify-center space-x-4 my-4">
      <button
        id={id ? id : ""}
        onClick={onClick}
        className={`w-64 h-20 px-4 rounded-2xl ${bgColor} text-space-dark-blue font-HakgyoansimWoojuR tracking-wider text-3xl
         hover:${hoverColor} hover:scale-110 hover:font-black transition ease-in-out delay-50 flex items-center justify-center ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export { Button };
