const userName = () => {
  return (
    <>
      <div className="relative">
        <div
          className="border-t-4 border-r-4 border-l-4
     border-black px-[44px] py-4  inline-block text-center"
        >
          <h1 className="text-2xl font-bold">TRẦN QUANG THẮNG</h1>
        </div>
        <div className="flex items-center justify-center mt-1 absolute top-12">
          <div className="w-16 h-1 bg-black"></div>
          <span className="mx-3 text-lg font-medium">
            Technology Information
          </span>
          <div className="w-16 h-1 bg-black"></div>
        </div>
      </div>
    </>
  );
};

export default userName;
