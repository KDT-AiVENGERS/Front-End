import { ButtonProps } from "@/interfaces/components";
import React, { useEffect, useState } from "react";

const FadeButton: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  newButtonColorClassName,
  newHoverColorClassName,
}) => {
  const [scrollPos, setScrollPos] = useState<number>(0);
  const threshold = 100; // 이 값은 원하는 대로 설정하세요.

  useEffect(() => {
    const onScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const bgColor = newButtonColorClassName
    ? newButtonColorClassName
    : "bg-space-yellow";
  const hoverColor = newHoverColorClassName
    ? newHoverColorClassName
    : "bg-space-red";

  return (
    <div
      style={{
        opacity: scrollPos > threshold ? 0 : 1, // 임계치를 넘어가면 opacity 0, 그렇지 않으면 1
        transition: "opacity 0.3s", // opacity가 변경될 때 부드럽게 애니메이션 효과를 줍니다.
      }}
    >
      <div className="flex items-center justify-center space-x-4 my-4">
        <button
          onClick={onClick}
          className={`w-64 h-20 px-4 rounded-2xl ${bgColor} text-space-dark-blue font-HakgyoansimWoojuR tracking-wider text-3xl
         hover:${hoverColor} hover:font-black hover:scale-110 transition ease-in-out delay-50 flex items-center justify-center ${className}`}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export { FadeButton };
