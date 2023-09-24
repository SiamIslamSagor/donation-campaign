import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import Hero from "../Hero/Hero";

const HomeSection = () => {
  const data = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Cards data={data}></Cards>
    </div>
  );
};

export default HomeSection;
