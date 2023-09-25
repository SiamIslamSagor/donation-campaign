import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export const HandleCardClickContext = createContext(null);
export const ClickCardIdContext = createContext(null);

const Home = () => {
  const [clickedCardId, setClickedCardId] = useState(0);

  const handleCardClick = id => {
    setClickedCardId(id);
  };
  return (
    <div>
      <Header></Header>
      <HandleCardClickContext.Provider value={handleCardClick}>
        <ClickCardIdContext.Provider value={[clickedCardId, setClickedCardId]}>
          <Outlet></Outlet>
        </ClickCardIdContext.Provider>
      </HandleCardClickContext.Provider>
    </div>
  );
};

export default Home;
