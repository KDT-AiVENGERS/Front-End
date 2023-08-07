import { ButtonProps, LongButtonProps } from "@/interfaces/components";

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
  const hoverColor = newHoverColorClassName ? newHoverColorClassName : "";

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

const LongButton: React.FC<LongButtonProps> = ({
  id,
  children,
  className,
  onClick,
  newButtonColorClassName,
  newHoverColorClassName,
  example,
}) => {
  const bgColor = newButtonColorClassName
    ? newButtonColorClassName
    : "bg-space-yellow";
  const hoverColor = newHoverColorClassName ? newHoverColorClassName : "";

  return (
    <div className="flex w-[64rem] items-center justify-center space-x-4 my-4">
      <div className="w-full flex justify-between items-center">
        <div className="w-full flex justify-center">
          <div
            id="silver_weak"
            className="text-white text-center text-3xl font-HakgyoansimWoojuR
        text-bold tracking-tighter"
          >
            {example}
          </div>
        </div>
        <button
          id={id ? id : ""}
          onClick={onClick}
          className={`w-64 h-20 px-4 rounded-2xl ${bgColor} text-space-dark-blue font-HakgyoansimWoojuR tracking-wider text-3xl
         hover:${hoverColor} hover:scale-110 hover:font-black transition ease-in-out delay-50 flex items-center justify-center ${className}`}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export { Button, LongButton };
