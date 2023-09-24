import PropTypes from "prop-types";
const Card = ({ singleData }) => {
  return (
    <div>
      <h2>{singleData.title}</h2>
    </div>
  );
};

Card.propTypes = {
  singleData: PropTypes.object,
};

export default Card;
