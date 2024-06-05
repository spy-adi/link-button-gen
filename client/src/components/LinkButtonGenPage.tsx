import "./LinkButtonGenPage.css";
import Navbar from "./Navbar";

const LinkButtonGenPage = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <button className="btn btn-success btn-add-new">Add a new link</button>
      </div>
    </>
  );
};

export default LinkButtonGenPage;
