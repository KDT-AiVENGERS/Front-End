import { BubbleProps } from "@/interfaces/components";

const Bubble: React.FC<BubbleProps> = ({ children, onCancelClick }) => {
  return (
    <div className="flex justify-center">
      <div
        className="bg-space-yellow px-2 mx-2 my-2 h-8 text-lg rounded-full
        text-space-dark-blue font-Pretendard-200 flex items-center justify-center"
      >
        <span className="me-4">{children}</span>
        <button onClick={onCancelClick}>
          <img
            src="/images/close.png"
            alt="취소 버튼"
            className="w-4 h-4"
          ></img>
        </button>
      </div>
    </div>
  );
};

export { Bubble };
