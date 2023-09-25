import PropTypes from "prop-types";
import { useContext } from "react";
import { ClickCardIdContext, HandleCardClickContext } from "../Home/Home";
const Card = ({ singleData }) => {
  const { id, img, title, category, card_color, category_color, text_color } =
    singleData;
  const handleCardClick = useContext(HandleCardClickContext);
  const [clickedCardId] = useContext(ClickCardIdContext);
  // console.log(handleCardClick);
  // console.log(clickedCardId);
  return (
    <div
      onClick={() => handleCardClick(id)}
      style={{ backgroundColor: card_color }}
      className={`flex flex-col gap-5  rounded-lg`}
    >
      <img src={img} alt="" />
      <div style={{ color: text_color }} className="px-4">
        <span
          style={{ backgroundColor: category_color }}
          className={` py-1 px-3 font-medium rounded-[4px]`}
        >
          {category}
        </span>
        <h2 className={`my-3 text-2xl font-semibold`}>{title}</h2>
      </div>
    </div>
  );
};

Card.propTypes = {
  singleData: PropTypes.object,
  img: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
};

export default Card;
