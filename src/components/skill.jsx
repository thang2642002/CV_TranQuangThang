const skill = ({ skill, level, maxLevel = 100 }) => {
  return (
    <div className="flex flex-col space-y-1">
      <p className="font-bold text-gray-800">{skill}</p>
      <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-gray-700"
          style={{ width: `${(level / maxLevel) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default skill;
