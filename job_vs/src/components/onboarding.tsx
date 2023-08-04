import { OnboardingProps } from "@/interfaces/components";

const Onboarding: React.FC<OnboardingProps> = ({
  imagePath,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className="flex">
      <img src={imagePath} alt={imageAlt} className="w-1/4 h-1/4"></img>
      <div className="flex flex-col ms-14 px-10 justify-center">
        <p
          className="font-SpoqaHanSansNeo font-black tracking-tight
               text-4xl text-white my-5"
        >
          {title}
        </p>
        <div
          className="whitespace-pre-line font-HakgyoansimWoojuR tracking-tight  
               text-2xl text-white"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export { Onboarding };
