import { useContext, useEffect, useState } from "react";
import {
  ClickCardIdContext,
  HandleDonationContext,
  JsonDataContext,
  ToastContainerContext,
} from "../Home/Home";

const DonatePage = () => {
  const handleDonationBox = useContext(HandleDonationContext);

  const ToastContainer = useContext(ToastContainerContext);

  const [details, setDetails] = useState({});

  const data = useContext(JsonDataContext);

  const [clickedCardId, setClickedCardId] = useContext(ClickCardIdContext);

  const clickedCardDetailsObj = data.find(
    singleObj => singleObj.id === clickedCardId
  );
  useEffect(() => {
    clickedCardDetailsObj && setDetails(clickedCardDetailsObj);
  }, [clickedCardDetailsObj]);
  const { id, img, text_color, price, title, description } = details;

  return (
    <div className="container mx-auto mb-12">
      <div className="relative bg-[#0B0B0B80] rounded-lg">
        <img className="w-full rounded-lg max-h-[700px]" src={img} alt="" />
        {clickedCardId > 0 && (
          <div className="bg-[#0B0B0B80] rounded-b-[20px] w-full p-5 absolute bottom-0">
            <button
              onClick={() => handleDonationBox(id)}
              style={{ backgroundColor: text_color }}
              className=" btn rounded-[4px] outline-none border-[#0B0B0B80] text-white hover:border-[#0B0B0B80]"
            >
              Donate {price}
            </button>
          </div>
        )}
      </div>
      <h2 className="text-5xl my-8 font-bold">{title}</h2>
      <p className="text-gray-500 font-medium">{description}</p>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default DonatePage;
