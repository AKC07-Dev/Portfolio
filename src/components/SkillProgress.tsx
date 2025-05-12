
type SkillProgressProps = {
  name: string;
  level: number; // 1-10
  icon?: React.ReactNode;
};

const SkillProgress = ({ name, level, icon }: SkillProgressProps) => {
  const dots = Array.from({ length: 10 }, (_, index) => {
    const isFilled = index < level;
    return (
      <div 
        key={index}
        className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
          isFilled 
            ? "bg-purple-primary shadow-glow" 
            : "bg-gray-700"
        }`}
      />
    );
  });

  return (
    <div className="flex items-center gap-4 p-4 bg-darker rounded-lg hover:bg-darker/80 transition-all">
      {icon && <div className="text-purple-light">{icon}</div>}
      <span className="flex-grow font-medium text-gray-200">{name}</span>
      <div className="flex gap-1 flex-wrap">{dots}</div>
    </div>
  );
};

export default SkillProgress;
