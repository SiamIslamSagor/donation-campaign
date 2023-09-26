import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { IoChevronBackOutline } from "react-icons/io5";

const ErrorPage = () => {
  return (
    <div>
      <Header></Header>
      <div className=" h-[70vh] flex flex-col justify-center items-center gap-5">
        <h2 className="text-5xl font-semibold text-center">
          Ops <span className="text-red-600">!!!</span>
        </h2>
        <p className="text-2xl text-red-600">Something is wrong!</p>
        <p className="text-lg text-gray-500">Page Not Found.</p>
        <Link to={"/"}>
          <button className="btn btn-outline btn-link duration-700 font-bold text-blue-700">
            <IoChevronBackOutline></IoChevronBackOutline>Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
