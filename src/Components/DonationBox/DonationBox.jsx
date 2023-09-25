import { useContext } from "react";
import { JsonDataContext } from "../Home/Home";
import { getDonatedDataInLC } from "../../localStorage";
import DonateCard from "../DonateCard/DonateCard";

const DonationBox = () => {
  const data = useContext(JsonDataContext);
  //   console.log(data);
  const donatedDataIds = getDonatedDataInLC();
  const donatedData = data.filter(
    singleData => donatedDataIds.includes(singleData.id) // array ar moddhe singleData id includes ache ki na?
  );
  console.log(donatedData);
  return (
    <div className="container mx-auto">
      <h2>All donation here</h2>
      <div className="grid justify-center items-center  grid-cols-1 lg:grid-cols-2">
        {donatedData.map(singleDonate => (
          <DonateCard
            singleDonate={singleDonate}
            key={singleDonate.id}
          ></DonateCard>
        ))}
      </div>
    </div>
  );
};

export default DonationBox;
