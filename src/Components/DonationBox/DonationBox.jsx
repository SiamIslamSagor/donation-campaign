import { useContext, useState } from "react";
import { DonatedDataContext } from "../Home/Home";
import DonateCard from "../DonateCard/DonateCard";
import EmptyDonationBox from "../EmptyDonationBox/EmptyDonationBox";

const DonationBox = () => {
  const donatedData = useContext(DonatedDataContext);
  const [donatedDataLength, setDonatedDataLength] = useState(4);
  return (
    <div className="container mx-auto my-20">
      {donatedData.length === 0 && <EmptyDonationBox></EmptyDonationBox>}
      <div className="grid justify-center gap-5 items-center  grid-cols-1 xl:grid-cols-2">
        {donatedData.slice(0, donatedDataLength).map(singleDonate => (
          <DonateCard
            singleDonate={singleDonate}
            key={singleDonate.id}
          ></DonateCard>
        ))}
      </div>
      <div
        className={`text-center my-14 ${donatedData.length <= 4 && "hidden"} ${
          donatedData.length === donatedDataLength && "hidden"
        }`}
      >
        <button
          onClick={() => setDonatedDataLength(donatedData.length)}
          className="btn btn-success bg-green-600 text-white text-lg px-8"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default DonationBox;
