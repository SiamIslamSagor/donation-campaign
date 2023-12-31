import { useContext, useState } from "react";
import donationImg from "/donation_img.jpg";
import { SearchTextContext } from "../Home/Home";
const Hero = () => {
  const bannerBgStyle = {
    backgroundImage: `url(${donationImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useContext(SearchTextContext);
  const handleSetInput = e => {
    setSearch(e.target.value);
  };

  const handleSearchBtn = searchValue => {
    setSearchText(searchValue);
  };

  return (
    <div style={bannerBgStyle}>
      <div
        style={{ backgroundImage: donationImg }}
        className="h-[50vh] xl:h-[65vh] flex bg-[#FFFFFFF2] gap-10 flex-col justify-center items-center"
      >
        <h2 className="text-5xl text-center font-bold">
          I Grow By Helping People In Need
        </h2>
        <div className="bg-white rounded-lg border border-[#DEDEDE]">
          <input
            onChange={handleSetInput}
            className="outline-none text-xl px-2 md:px-6 w-[470px] max-sm:w-72 "
            type="text"
            placeholder="Search Categories here...."
          />
          <button
            onClick={() => handleSearchBtn(search)}
            className="rounded-r-lg bg-red-500 text-white font-bold py-3 px-4 md:px-7 duration-700  hover:bg-red-400"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
