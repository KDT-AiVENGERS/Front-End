import { OnboardingProps } from "@/interfaces/components";

const Onboarding: React.FC<OnboardingProps> = ({
  imagePath,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className="flex">
      <img src={imagePath} alt={imageAlt} className="w-96 h-96"></img>
      <div className="flex flex-col px-4 justify-center">
        <p
          className="font-SpoqaHanSansNeo font-black tracking-tight
               text-8xl text-white my-5"
        >
          {title}
        </p>
        <div
          className="whitespace-pre-line font-HakgyoansimWoojuR tracking-tight  
               px-2 text-4xl text-white"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export { Onboarding };
