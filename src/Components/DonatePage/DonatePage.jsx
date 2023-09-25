import { useContext, useEffect, useState } from "react";
import {
  ClickCardIdContext,
  ClickedCardDetailsContext,
  HandleDonationContext,
  JsonDataContext,
} from "../Home/Home";

const DonatePage = () => {
  //   const [clickedCardDetails, setClickedCardDetails] = useContext(
  //     ClickedCardDetailsContext
  //   );
  //   console.log(clickedCardDetails);

  const handleDonationBox = useContext(HandleDonationContext);
  //   console.log(handleDonationBox);

  const [details, setDetails] = useState({});

  const data = useContext(JsonDataContext);
  //   console.log(data);
  const [clickedCardId, setClickedCardId] = useContext(ClickCardIdContext);
  //   console.log(clickedCardId);
  const clickedCardDetailsObj = data.find(
    singleObj => singleObj.id === clickedCardId
  );
  useEffect(() => {
    clickedCardDetailsObj && setDetails(clickedCardDetailsObj);
  }, [clickedCardDetailsObj]);
  //   console.log(details);
  //   console.log(clickedCardDetailsObj);
  //   const { id, img, title, price, description, text_color } =
  //     clickedCardDetailsObj || {};

  const { id, img, text_color, price, title, description } = details;
  //   console.log(id, img, text_color, price, title, description);
  //   console.log(details);

  return (
    <div className="container mx-auto mb-12">
      <div className="relative">
        <img className="w-full rounded-[20px] max-h-[700px]" src={img} alt="" />
        {clickedCardId > 0 && (
          <div className="bg-[#0B0B0B80] rounded-b-[20px] w-full p-5 absolute bottom-0">
            <button
              onClick={() => handleDonationBox(id)}
              style={{ backgroundColor: text_color }}
              className=" btn outline-none border-[#0B0B0B80] text-white hover:border-[#0B0B0B80]"
            >
              Donate {price}
            </button>
          </div>
        )}
      </div>
      <h2 className="text-5xl my-8 font-bold">{title}</h2>
      <p className="text-gray-500 font-medium">{description}</p>
    </div>
  );
};

export default DonatePage;
