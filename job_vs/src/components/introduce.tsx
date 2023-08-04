import React, { useEffect, useState } from "react";

const Introduce: React.FC = () => {
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

  return (
    <div
      style={{
        opacity: scrollPos > threshold ? 0 : 1, // 임계치를 넘어가면 opacity 0, 그렇지 않으면 1
        transition: "opacity 0.3s", // opacity가 변경될 때 부드럽게 애니메이션 효과를 줍니다.
      }}
    >
      <h2
        className="font-HakgyoansimWoojuR font-black tracking-tight
          text-4xl text-white my-5"
      >
        무슨 서비스인지 궁금하다면 아래로!
      </h2>
    </div>
  );
};

export { Introduce };
