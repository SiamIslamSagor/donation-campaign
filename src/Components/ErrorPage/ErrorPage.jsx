import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const ErrorPage = () => {
  return (
    <div>
      <div className="h-[100vh] bg-gray-100 flex justify-center items-center">
        <div className="shadow-lg px-20 py-5 bg-white rounded-md flex flex-col justify-center items-center gap-5">
          <h2 className="text-5xl font-semibold text-center">
            Ops <span className="text-red-600">!!!</span>
          </h2>
          <p className="text-2xl text-center text-red-600">
            Something is wrong!
          </p>
          <p className="text-lg text-center text-gray-500">Page Not Found.</p>
          <Link to={"/"}>
            <button className="btn btn-outline btn-link duration-700 font-bold text-blue-700">
              <IoChevronBackOutline></IoChevronBackOutline>Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
