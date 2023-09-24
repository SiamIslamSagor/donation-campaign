const Hero = () => {
  return (
    <div className="h-[50vh] flex gap-10 flex-col justify-center items-center bg-red-100">
      <h2 className="text-5xl text-center font-bold">
        I Grow By Helping People In Need
      </h2>
      <div className="bg-white rounded-lg border border-[#DEDEDE]">
        <input
          className="outline-none text-xl px-2 md:px-6 w-[470px] max-sm:w-72 "
          type="text"
          placeholder="Search here...."
        />
        <button className="rounded-r-lg bg-red-500 text-white font-bold py-3 px-4 md:px-7 duration-700  hover:bg-red-400">
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
