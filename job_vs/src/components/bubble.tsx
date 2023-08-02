import { BubbleProps } from "@/interfaces/components";

const Bubble: React.FC<BubbleProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <span
        className="bg-space-yellow w-24 mx-2 my-2 h-10 text-lg rounded-full
        text-space-dark-blue font-HakgyoansimWoojuR flex items-center justify-center"
      >
        {children}
      </span>
    </div>
  );
};

export { Bubble };
