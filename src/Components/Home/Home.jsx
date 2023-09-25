import { createContext, useEffect, useState } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import {
  getItemInLocalStorage,
  setDonatedDataInLc,
  setItemInLocalStorage,
} from "../../localStorage";

export const JsonDataContext = createContext([]);
export const HandleCardClickContext = createContext(null);
export const ClickCardIdContext = createContext(null);
export const ClickedCardDetailsContext = createContext(null);
export const HandleDonationContext = createContext(null);

const Home = () => {
  const data = useLoaderData();

  const [clickedCardId, setClickedCardId] = useState(0);
  const [clickedCardDetails, setClickedCardDetails] = useState({});
  const navigate = useNavigate();

  const handleDonationBox = id => {
    setDonatedDataInLc(id);
    // console.log(id);
  };

  const handleCardClick = id => {
    // console.log(id);
    setItemInLocalStorage(id);
    setClickedCardId(id);
    navigate("/data");
  };

  useEffect(() => {
    const clickedStoredId = getItemInLocalStorage("id");
    setClickedCardId(clickedStoredId);
  }, []);
  return (
    <div>
      <Header></Header>
      <HandleDonationContext.Provider value={handleDonationBox}>
        <ClickedCardDetailsContext.Provider
          value={[clickedCardDetails, setClickedCardDetails]}
        >
          <JsonDataContext.Provider value={data}>
            <HandleCardClickContext.Provider value={handleCardClick}>
              <ClickCardIdContext.Provider
                value={[clickedCardId, setClickedCardId]}
              >
                <Outlet></Outlet>
              </ClickCardIdContext.Provider>
            </HandleCardClickContext.Provider>
          </JsonDataContext.Provider>
        </ClickedCardDetailsContext.Provider>
      </HandleDonationContext.Provider>
    </div>
  );
};

export default Home;
