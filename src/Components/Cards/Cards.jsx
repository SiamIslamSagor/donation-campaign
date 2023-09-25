import PropTypes from "prop-types";
import Card from "../Card/Card";
import { useContext } from "react";
import { JsonDataContext } from "../Home/Home";

const Cards = () => {
  const data = useContext(JsonDataContext);

  return (
    <div className="container mx-auto my-20 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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