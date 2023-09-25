import { createContext, useEffect, useState } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import {
  getDonatedDataInLC,
  getItemInLocalStorage,
  setDonatedDataInLc,
  setItemInLocalStorage,
} from "../../localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const JsonDataContext = createContext([]);
export const HandleCardClickContext = createContext(null);
export const ClickCardIdContext = createContext(null);
export const ClickedCardDetailsContext = createContext(null);
export const HandleDonationContext = createContext(null);
export const SearchTextContext = createContext("");
export const ToastContainerContext = createContext(null);
export const DonatedDataContext = createContext([]);

const Home = () => {
  const data = useLoaderData();

  const [clickedCardId, setClickedCardId] = useState(0);
  const [clickedCardDetails, setClickedCardDetails] = useState({});
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleDonationBox = id => {
    setDonatedDataInLc(id);
    toast("Donate Successfully");
  };

  const handleCardClick = id => {
    setItemInLocalStorage(id);
    setClickedCardId(id);
    navigate("/donation-details");
  };

  const donatedDataIds = getDonatedDataInLC();
  const donatedData = data.filter(singleData =>
    donatedDataIds.includes(singleData.id)
  );

  useEffect(() => {
    const clickedStoredId = getItemInLocalStorage("id");
    setClickedCardId(clickedStoredId);
  }, []);
  return (
    <div>
      <Header></Header>
      <DonatedDataContext.Provider value={donatedData}>
        <ToastContainerContext.Provider value={ToastContainer}>
          <SearchTextContext.Provider value={[searchText, setSearchText]}>
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
          </SearchTextContext.Provider>
        </ToastContainerContext.Provider>
      </DonatedDataContext.Provider>
    </div>
  );
};

export default Home;
