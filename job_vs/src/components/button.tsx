import { ButtonProps } from "@/interfaces/components";

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <div className="flex flex-row items-center space-x-4 my-4">
      <button
        onClick={onClick}
        className={`w-64 h-20 px-4 py-2 rounded-2xl bg-space-yellow text-space-dark-blue font-HakgyoansimWoojuR tracking-wider text-3xl
         hover:bg-space-red hover:text-white hover:scale-110 transition ease-in-out delay-50 ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export { Button };
