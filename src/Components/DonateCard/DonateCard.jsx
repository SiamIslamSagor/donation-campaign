import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const DonateCard = ({ singleDonate }) => {
  const {
    img,
    text_color,
    category,
    title,
    price,
    category_color,
    card_color,
  } = singleDonate;
  const navigate = useNavigate();
  const handleViewDetailsBtn = () => {
    navigate("/donation-details");
  };
  return (
    <div
      style={{ backgroundColor: card_color }}
      className={`flex flex-col max-sm:py-4 sm:flex-row gap-5 sm:items-center  rounded-lg`}
    >
      <img
        className="max-sm:rounded-lg max-sm:px-4 md:rounded-l-lg sm:bg-black h-60"
        src={img}
        alt=""
      />
      <div style={{ color: text_color }} className="px-4">
        <span
          style={{ backgroundColor: category_color }}
          className={` py-1 px-3 font-medium rounded-[4px]`}
        >
          {category}
        </span>
        <h2 className={`my-3 text-xl font-semibold`}>{price}</h2>
        <h2 className={`my-3 text-black text-2xl font-bold`}>{title}</h2>
        <button
          onClick={handleViewDetailsBtn}
          style={{ backgroundColor: text_color }}
          className="p-2 rounded-[4px] font-semibold text-white"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

DonateCard.propTypes = {
  singleDonate: PropTypes.object,
};

export default DonateCard;
