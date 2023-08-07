import {
  ButtonProps,
  LongButtonProps,
  PaginationButtonProps,
} from "@/interfaces/components";

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

const PaginationButton: React.FC<PaginationButtonProps> = ({
  mode,
  onClick,
}) => {
  return (
    <div className="flex w-[64rem] h-10 items-center justify-center space-x-4 my-4">
      <button onClick={onClick}>
        <img
          id="pagination"
          src={`/images/qna/arrow_${mode}.png`}
          alt={`${mode === "prev" ? "이전 질문" : "다음 질문"} 버튼`}
          className="w-12 h-12 hover:w-16 hover:h-16 transition-all transition ease-in-out delay-50"
        />
      </button>
      {/* <button
        onClick={onClick}
        className="w-64 h-20 px-4 rounded-2xl text-space-dark-blue font-HakgyoansimWoojuR tracking-wider text-3xl
          hover:scale-110 hover:font-black transition ease-in-out delay-50 flex items-center justify-center"
      >
        {mode}
      </button> */}
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
    <div className="flex w-[64rem] items-center justify-center space-x-4 my-4 me-[12rem]">
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

export { Button, LongButton, PaginationButton };
