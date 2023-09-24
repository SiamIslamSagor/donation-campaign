import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center gap-5">
      <h2 className="text-5xl text-center">Ops!!</h2>
      <p className="text-2xl">Page Not Found</p>
      <Link>
        <button className="btn btn-primary">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
