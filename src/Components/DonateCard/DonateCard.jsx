import PropTypes from "prop-types";
const DonateCard = ({ singleDonate }) => {
  //   console.log(singleDonate);
  const { img, text_color, category_color, card_color } = singleDonate;
  return (
    <div>
      <div
        style={{ backgroundColor: card_color }}
        className="flex items-center justify-center gap-7"
      >
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <p>category</p>
          <h2>title</h2>
          <h4>price</h4>
          <button>view Details</button>
        </div>
      </div>
    </div>
  );
};

DonateCard.propTypes = {
  singleDonate: PropTypes.object,
};

export default DonateCard;
