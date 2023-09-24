import PropTypes from "prop-types";
import Card from "../Card/Card";

const Cards = ({ data }) => {
  return (
    <div>
      <h2>All Cards : {data.length}</h2>
      {data.map(singleData => (
        <Card singleData={singleData} key={singleData.id}></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {
  data: PropTypes.array,
};

export default Cards;
