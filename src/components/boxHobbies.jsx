const boxHobbies = () => {
  const hobbies = [
    "Singing",
    "Reading books",
    "Playing Guitar",
    "Running",
    "Learning new technologies",
  ];
  return (
    <div>
      <div className="flex flex-wrap gap-3 mt-2">
        {hobbies.map((hobby, index) => (
          <span
            key={index}
            className="bg-gray-400 text-white font-semibold py-[4px] px-[8px] rounded-md text-[15px]"
          >
            {hobby}
          </span>
        ))}
      </div>
    </div>
  );
};

export default boxHobbies;
