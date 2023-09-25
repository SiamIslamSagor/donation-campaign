import PropTypes from "prop-types";
import Card from "../Card/Card";
import { useContext, useEffect, useState } from "react";
import { JsonDataContext, SearchTextContext } from "../Home/Home";

const Cards = () => {
  const data = useContext(JsonDataContext);
  const [searchText, setSearchText] = useContext(SearchTextContext);
  // console.log(searchText);
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    const searchResult = data.filter(
      singleData => searchText === singleData.category
    );
    setSearchData(searchResult);
    // console.log();
  }, [data, searchText]);
  // console.log(searchResult);
  // console.log(searchData);

  return (
    <div className="container mx-auto my-20 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {searchData.length === 0
        ? data.map(singleData => (
            <Card singleData={singleData} key={singleData.id}></Card>
          ))
        : searchData.map(singleData => (
            <Card singleData={singleData} key={singleData.id}></Card>
          ))}
    </div>
  );
};

Cards.propTypes = {
  data: PropTypes.array,
};

export default Cards;
